// components/RegisterForm.tsx
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { handleRegister } from "@/services/userServices";

const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().required("Required").min(8, "Too Short!"),
});

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values, actions) => {
      handleRegister({ email: values.email, password: values.password });
      actions.setSubmitting(false);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} className="p-4">
      <FormGroup className="mb-3">
        <FormLabel>Email</FormLabel>
        <FormControl
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.email}
        />
        <FormControl.Feedback type="invalid">
          {formik.errors.email}
        </FormControl.Feedback>
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>Password</FormLabel>
        <FormControl
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.password}
        />
        <FormControl.Feedback type="invalid">
          {formik.errors.password}
        </FormControl.Feedback>
      </FormGroup>

      <Button
        type="submit"
        variant="primary"
        disabled={!formik.isValid || formik.isSubmitting}
      >
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;
