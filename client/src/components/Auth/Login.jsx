import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useAuth } from '../../routes/AuthContext';

const Login = () => {
    const {login} =useAuth()
    const handleSignIn = (userData) => {
        login(userData);
    };

    return (
        <Formik
            initialValues={{ username: '', role: '' }}
            validate={values => {
                const errors = {};
                if (!values.username) {
                    errors.username = 'username required'
                }

                if (!values.role) {
                    errors.role = 'role required'
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                const user ={
                    username:values.username,
                    role:values.role
                }
                
                handleSignIn(user);
                alert(`user created : ${user.username}`)
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form className='flex flex-col gap-2'>
                    <h1>login</h1>
                    <Field className="txtbox" type="type" name="username" />
                    <ErrorMessage name="username" component="div" />
                    <Field className="txtbox" type="type" name="role" />
                    <ErrorMessage name="role" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default Login