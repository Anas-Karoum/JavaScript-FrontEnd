import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './ContactInformation.css';

const ContactInformation = () => {
  const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required('Förnamn måste anges')
        .min(2, 'Förnamnet måste bestå av minst 2 tecken'),

      email: Yup.string()
        .required('E-post måste anges')
        .matches(emailRegEx, 'Du måste ange en giltig e-postadress'),

      message: Yup.string().required('Skriv ditt meddelande'),
    }),

    onSubmit: async (values) => {
      try {
        const result = await fetch(
          'https://win23-assignment.azurewebsites.net/api/contactform',
          {
            method: 'post',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(values),
          }
        );

        if (result.ok) {
          setSuccessMessage('Meddelandet har skickats');
          form.resetForm();
        } else {
          const errorText = await result.text();
          setErrorMessage(errorText || 'Något gick fel.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrorMessage('Något gick fel.');
      }
    },
  });

  return (
    <section className="contact-info">
      <div className="container">
        <div className="parent">
          <div className="child">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <h3>Visit us</h3>
              <a href="https://maps.app.goo.gl/3nw4XHQZzj4Zvew5A" target="_blank">
                Sveavägen 31 111 34 STOCKHOLM
              </a>
            </div>
          </div>
          <div className="child">
            <i className="fa-solid fa-square-phone"></i>
            <div>
              <h3>Call us</h3>
              <a href="tel:+46 (8) 121 470 50">+46 (8) 121 470 50</a>
              <a href="tel:+46 (8) 121 470 51">+46 (8) 121 470 51</a>
            </div>
          </div>
          <div className="child">
            <i className="fa-solid fa-envelope"></i>
            <div>
              <h3>Email us</h3>
              <a href="mailto:info@crito.com">info@crito.com</a>
              <a href="mailto:support@crito.com">support@crito.com</a>
            </div>
          </div>
        </div>

        <div className="content">
          <h2>Leave us a message for any information.</h2>
          <div className="contact-form">
            <form onSubmit={form.handleSubmit} noValidate>
              {/* Name Input field */}
              <div className="input-group">
                <label
                  htmlFor="name"
                  className={`validation-label ${form.errors.name && form.touched.name ? 'error' : ''}`}
                >
                  {form.errors.name && form.touched.name ? form.errors.name : 'Namn'}
                </label>
                <input
                  className="input-style"
                  type="text"
                  id="name"
                  name="name"
                  value={form.values.name}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>

              {/* Email Input field */}
              <div className="input-group">
                <label
                  htmlFor="email"
                  className={`validation-label ${form.errors.email && form.touched.email ? 'error' : ''}`}
                >
                  {form.errors.email && form.touched.email ? form.errors.email : 'E.post'}
                </label>
                <input
                  className="input-style"
                  type="email"
                  id="email"
                  name="email"
                  value={form.values.email}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>

              {/* Message Textarea */}
              <div className="input-group">
                <label
                  htmlFor="message"
                  className={`validation-label ${form.errors.message && form.touched.message ? 'error' : ''}`}
                >
                  {form.errors.message && form.touched.message ? form.errors.message : 'Skriv ditt meddelande'}
                </label>
                <textarea
                  className="input-style"
                  id="message"
                  name="message"
                  value={form.values.message}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>

              {/* Submit button */}
              <button type="submit" className="btn-yellow">
                Skicka<i className="fa-solid fa-up-right-from-square"></i>
              </button>
            </form>
          </div>

          {/* Success and error messages */}
          <div>
            {successMessage && <p className="successMessage">{successMessage}</p>}
            {errorMessage && <p className="errorMessage">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
