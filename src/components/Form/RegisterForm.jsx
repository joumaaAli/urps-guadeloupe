// components/RegisterForm.tsx
import { useFormik } from "formik";
import { useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import { Col, FormFeedback, Input, Label } from "reactstrap";
import * as yup from "yup";
import styles from "./Form.module.scss";
import { addPraticien } from "@/services/praticien";

const RegisterForm = () => {
  const [specialities, setSpecialities] = useState([
    "Cardiology",
    "Neurology",
    "Pediatrics",
  ]);
  const [cities, setCities] = useState(["Chicago", "Houston"]);
  const [materiels, setMateriels] = useState([
    "Materiel 1",
    "Materiel 2",
    "Materiel 3",
  ]);
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
      name: "mobileNumber",
      label: "Phone",
      options: {
        type: "tel",
        required: true,
      },
    },
    {
      name: "RPPSNumber",
      label: "RPPS Number",
      options: {
        type: "text",
        required: false,
      },
    },
    {
      name: "orderNumber",
      label: "Order Number",
      options: {
        type: "text",
        required: true,
      },
    },
    {
      name: "cabinetNumber",
      label: "Cabinet Number",
      options: {
        type: "tel",
        required: true,
      },
    },
    {
      name: "specialties",
      label: "Speciality",
      options: {
        type: "select",
        required: true,
        options: specialities,
      },
    },
    {
      name: "materiels",
      label: "Materiels",
      options: {
        type: "select",
        required: true,
        options: materiels,
      },
    },
    {
      name: "city",
      label: "City",
      options: {
        type: "select",
        required: true,
        options: cities,
      },
    },
  ];

  const validationSchema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    mobileNumber: yup
      .string()
      .matches(/^[0-9]+$/, "Phone must be a number")
      .required("Phone is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      RPPSNumber: "",
      orderNumber: "",
      cabinetNumber: "",
      city: "",
      specialities: "",
      materiels: "",
    },
    validationSchema,
    onSubmit: (values, actions) => {
      addPraticien(values);
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
          <Col md="6" className="my-2" key={index}>
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
              required={field.options.required}
              {...(field.options.type === "select" && {
                children: field.options.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                )),
              })}
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
            onClick={formik.handleSubmit}
          >
            Register
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default RegisterForm;
