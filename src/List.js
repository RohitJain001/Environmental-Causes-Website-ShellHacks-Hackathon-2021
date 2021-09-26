import React, { Component }  from 'react';
import { ListItemAvatar } from "@material-ui/core";
import { Form, Field } from "react-final-form";

const List = () => (
  <>
    <h1>Your Data</h1>
    <Form
      onSubmit={(values) => alert(JSON.stringify(values, 0, 2))}
      initialValues={{ acceptedTerms: true }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        }

        if (!values.acceptedTerms) {
          errors.acceptedTerms =
            "You must accept the terms and conditions before you proceed.";
        }

        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      render={({
        handleSubmit,
        form,
        submitting,
        pristine,
        values,
        errors,
        touched,
      }) => (
        <form onSubmit={handleSubmit}>
          <Field name="name">
            {({ input, meta }) => (
              <div>
                <label>Username</label>
                <input {...input} type="text" placeholder="Username" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div>
            <label>Twitter Handle</label>
            <Field name="twitter" component="input" type="text" />
          </div>
          <Field name="email">
            {({ input, meta }) => (
              <div>
                <label>Email</label>
                <input {...input} type="email" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div>
            <label>Accept Terms</label>
            <Field name="acceptedTerms" component="input" type="checkbox" />
            {touched.acceptedTerms && errors.acceptedTerms && (
              <span>{errors.acceptedTerms}</span>
            )}
          </div>
          <div>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
            <button type="submit" disabled={submitting}>
              Submit
            </button>
          </div>
        </form>
      )}
    />
  </>
);

export default List;