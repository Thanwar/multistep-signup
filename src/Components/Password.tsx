import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

function PassForm() {
  return (
    <div>
      <Formik
        initialValues={{
            Password: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          Password: Yup.string()
          .min(6, "Password is too short.")
          .max(20, "Password is too long.")
          .required("This field is required."),
        })}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <div>
              <Field
                type="password"
                as={TextField}
                variant="outlined"
                label="Password"
                name="Password"
                id="Password"
              />
              <ErrorMessage
                name="Password"
                render={(msg) => <span style={{ color: "red" }}>{msg}</span>}
              />
            </div>
            <br /> 
            <div>
              <br/>
              <br/>
              <br/>
              <br/>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PassForm;
