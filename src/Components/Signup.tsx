import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

function SignupForm() {
  return (
    <div>
      <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
            firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
        })}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <div>
              <Field
                type="text"
                as={TextField}
                variant="outlined"
                label="First Name"
                name="firstName"
                id="firstName"
              />
              <ErrorMessage
                name="firstName"
                render={(msg) => <span style={{ color: "red" }}>{msg}</span>}
              />
            </div>
            <br />
            <div>
            <Field
                type="text"
                as={TextField}
                variant="outlined"
                label="Last Name"
                name="lastName"
                id="lastName"
              />
              <ErrorMessage
                name="lastName"
                render={(msg) => <span style={{ color: "red" }}>{msg}</span>}
              />
            </div>
            <br/>
            <div>
            <Field
                type="text"
                as={TextField}
                variant="outlined"
                label="Email"
                name="email"
                id="email"
              />
              <ErrorMessage
                name="email"
                render={(msg) => <span style={{ color: "red" }}>{msg}</span>}
              />
            </div>
              <br/>
              <br/>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignupForm;
