import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const Contact = () => {
  const formik = useFormik({
    initialValues: {
      contact: '',
    },
    validationSchema: Yup.object({
        contact: Yup.string()
        .max(15, 'Must be less than 15 digits')
        .min(11, 'Must be more than 11 digits')
        .required('Required'),

    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="contact">contact</label>
      <input
        id="contact"
        name="contact"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.contact}
      />
      {formik.touched.contact && formik.errors.contact ? (
        <div>{formik.errors.contact}</div>
      ) : null}
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
};