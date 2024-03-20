import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  Card,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { HandleLogout, handleLogin } from "@/services/userServices";
import style from "./Form.module.scss";
const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().required("Required"),
});

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await handleLogin(values.email, values.password);
    },
  });

  return (
    <Card className={style["login-card"]}>
      <h1>Login</h1>
      <p>
        This page is only accessible to authenticated users. Please login to
        access the page.
      </p>
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
        <div className="w-100 d-flex justify-content-between">
          <Button
            type="submit"
            variant="primary"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Login
          </Button>
          <Button type="button" variant="primary" onClick={HandleLogout}>
            Logout
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default LoginForm;
