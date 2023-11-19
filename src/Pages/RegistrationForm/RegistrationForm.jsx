import React from 'react'
import { useFormik} from "formik"
import * as Yup from 'yup'
import { useState} from "react"
import './RegistrationForm.css'
const RegistrationForm = () => {
    const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const [errorMessage, setErrorMessage] = useState('')
    const form = useFormik ({
    initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        terms: false
    },

    validationSchema: Yup.object({

        firstName: Yup.string()
        .required("Förnamn måste anges")
        .min(2, "Förnamnet måste bestå av minst 2 tecken"),

        lastName: Yup.string()
        .required("Efternamn måste anges")
        .min(2, "Efternamn måste bestå av minst 2 tecken"),

        email: Yup.string()
        .required("E-post måste anges")
        .matches(emailRegEx, "Du måste ange en giltig e-postadress"),

        password: Yup.string()
        .required("Lösenord måste anges")
        .matches(passwordRegEx, "Lösenordet måste innehålla: minst en liten bokstav, en stor bokstav, en siffra, en special tecken ( @$!%*?& ), plus att det ska vara minst 8 tecken lång"),

        terms: Yup.boolean()
        .oneOf([true], 'Allmänna avtalsvillkor måste godkännas'),

    }),

    onSubmit: async (values) => {
        const result = await fetch('https://win23-react-api.azurewebsites.net/api/users', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(values)
            
        })

        switch (result.status) {
            case 201:
                alert('användaren skapades')
                break;
                case 400:
                setErrorMessage('något gick fel.')
                break;
                case 409:
                setErrorMessage('en användare med samma e-post finns redan.')
                break;

        }
        
    }

    })
  return (

    <form onSubmit={form.handleSubmit} noValidate>
    <h1>REGISTRERA DIG IDAG!</h1>
    <p className="errorMessage"> {errorMessage} </p>
    <div className="input-group">
        <label className={form.errors.firstName && form.touched.firstName ? 'error': ''}>{form.errors.firstName && form.touched.firstName ? form.errors.firstName : 'Förnamn'}</label>
        <input type="text" name="firstName" value={form.values.firstName} onChange={form.handleChange} onBlur={form.handleBlur} />
    </div>

    <div className="input-group">
        <label className={form.errors.lastName && form.touched.lastName ? 'error': ''} >{form.errors.lastName && form.touched.lastName ? form.errors.lastName : 'Efternamn'}</label>
        <input type="text" name="lastName" value={form.values.lastName} onChange={form.handleChange} onBlur={form.handleBlur} />
    </div>

    <div className="input-group">
        <label className={form.errors.email && form.touched.email ? 'error': ''} >{form.errors.email && form.touched.email ? form.errors.email : 'E.post'}</label>
        <input type="email" name="email" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} />
    </div>
    <div className="input-group">
        <label className={form.errors.password && form.touched.password ? 'error': ''} >{form.errors.password && form.touched.password ? form.errors.password : 'Lösenord'}</label>
        <input type="password" name="password" value={form.values.password} onChange={form.handleChange} onBlur={form.handleBlur} />
    </div>
    <div className="input-group">
        <p className={form.errors.terms && form.touched.terms ? 'error': ''} >{form.errors.terms && form.touched.terms ? form.errors.terms : 'Allmänna avtalsvillkor'}</p>
        <div className="input-checkbox-group">
        <input type="checkbox" name="terms" checked={form.values.terms} onChange={form.handleChange} onBlur={form.handleBlur} />
        <label>Jag har läst och godkänner de allmänna avtalsvillkoren</label>
    </div>
    </div>

    <button type="submit" disabled={!form.values.terms} >BLI MEDLEM</button>

</form>

  )
}

export default RegistrationForm