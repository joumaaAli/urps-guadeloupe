// components/RegisterForm.tsx
import { handleRegister } from "@/services/userServices";
import { useFormik } from "formik";
import { Button, Row, Card } from "react-bootstrap";
import { Col, FormFeedback, Input, Label } from "reactstrap";
import * as yup from "yup";
import styles from "./Form.module.scss";

const fields = [
  {
    name: "firstName",
    label: "First Name",
    options: {
      type: "text",
      required: true,
    },
  },

  {
    name: "lastName",
    label: "Last Name",
    options: {
      type: "text",
      required: true,
    },
  },

  {
    name: "email",
    label: "Email",
    options: {
      type: "email",
      required: true,
    },
  },

  {
    name: "password",
    label: "Password",
    options: {
      type: "password",
      required: true,
    },
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    options: {
      type: "password",
      required: true,
    },
  },

  {
    name: "phone",
    label: "Phone",
    options: {
      type: "tel",
      required: true,
    },
  },
];

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
    <Card className={`${styles["card"]}`}>
      <Row>
        <h1>Register</h1>
      </Row>
      <Row>
        {fields.map((field, index) => (
          <Col md="12" className="my-2" key={index}>
            <Label htmlFor={field.name}>{field.label}</Label>
            <Input
              type={field.options.type}
              id={field.name}
              name={field.name}
              placeholder={field.label}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[field.name]}
              invalid={formik.touched[field.name] && formik.errors[field.name]}
              size={"sm"}
            />
            <FormFeedback>{formik.errors[field.name]}</FormFeedback>
          </Col>
        ))}
      </Row>
      <Row className="my-2">
        <Col>
          <Button
            type="submit"
            variant="primary"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Register
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default RegisterForm;
