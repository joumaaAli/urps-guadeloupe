// components/RegisterForm.tsx
import { fetchCities } from "@/services/city";
import { fetchMateriels } from "@/services/materiel";
import { addPraticien } from "@/services/praticien";
import { fetchSpecialities } from "@/services/specialty";
import { Praticien } from "@/types/models";
import { useFormik } from "formik";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FormFeedback, Input, Label } from "reactstrap";
import * as yup from "yup";
import CustomAsyncSelect from "../AsyncSelect/AsyncSelect";
import styles from "./Form.module.scss";

type Field = {
  name: keyof Praticien;
  label: string;
  options: {
    type: string;
    required: boolean;
  };
};

const RegisterForm = () => {
  const validationSchema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email().required("Email is required"),
    mobileNumber: yup
      .string()
      .matches(/^[0-9]+$/, "Phone must be a number")
      .required("Phone is required"),
    orderNumber: yup.string().required("Order Number is required"),
    cabinetNumber: yup.string().required("Cabinet Number is required"),
  });

  const formik = useFormik<Praticien>({
    initialValues: {
      specialties: [],
      materiels: [],
      cityId: 0,
      orderNumber: "",
      cabinetNumber: "",
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      RPPSNumber: "",
      status: "PENDING",
    },
    validationSchema,
    onSubmit: (values) => {
      addPraticien(values);
    },
  });

  const fields: Field[] = [
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
  ];

  return (
    <Card className={styles.card}>
      <Row>
        <h1>Register</h1>
      </Row>
      <form onSubmit={formik.handleSubmit}>
        <Row>
          {fields.map((field, index) => (
            <Col md="6" className="my-2" key={index}>
              <Label htmlFor={field.name}>{field.label}</Label>
              <Input
                id={field.name}
                name={field.name}
                placeholder={field.label}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[field.name] as any}
                required={field.options.required}
                invalid={
                  formik.touched[field.name] && !!formik.errors[field.name]
                }
              />
              <FormFeedback>{formik.errors[field.name] as string}</FormFeedback>
            </Col>
          ))}
        </Row>
        <Row>
          {/* Render other fields as before */}
          <Col md="6" className="my-2">
            <Label htmlFor="specialties">Speciality</Label>
            <CustomAsyncSelect
              loadOptions={fetchSpecialities}
              defaultOptions
              onChange={(option: any) =>
                formik.setFieldValue(
                  "specialties",
                  option.map((choice: any) => choice.value)
                )
              }
              isMulti
            />
          </Col>
          <Col md="6" className="my-2">
            <Label htmlFor="materiels">Materiels</Label>
            <CustomAsyncSelect
              loadOptions={fetchMateriels}
              defaultOptions
              onChange={(option: any) =>
                formik.setFieldValue(
                  "materiels",
                  option.map((choice: any) => choice.value)
                )
              }
              isMulti
            />
          </Col>
          <Col md="6" className="my-2">
            <Label htmlFor="city">City</Label>
            <CustomAsyncSelect
              loadOptions={fetchCities}
              defaultOptions
              onChange={(option: any) =>
                formik.setFieldValue("cityId", option.value)
              }
            />
          </Col>
        </Row>
        <Row className="my-2">
          <Col>
            <Button
              type="submit"
              variant="primary"
              // disabled={!formik.isValid || formik.isSubmitting}
            >
              Register
            </Button>
          </Col>
        </Row>
      </form>
    </Card>
  );
};

export default RegisterForm;
