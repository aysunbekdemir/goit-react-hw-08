import React from 'react';
import { Formik, Form, Field } from 'formik';

const LoginForm = () => {
  const initialValues = { email: '', password: '' };

  const handleSubmit = (values, { resetForm }) => {
    // Giriş işlemi burada yapılacak (dispatch ile)
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label>
          Email
          <Field name="email" type="email" />
        </label>
        <label>
          Password
          <Field name="password" type="password" />
        </label>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
