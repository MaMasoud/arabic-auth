import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormPlace from '../components/FormPlace';
import Input from '../components/Input';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('بريد إلكتروني غير صالح').required('مطلوب'),
    password: Yup.string().required('مطلوب').min(8, 'كلمة المرور يجب أن تكون 8 أحرف على الأقل')
});

export default function Login() {
    return (
        <FormPlace>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validateOnBlur={true}
            >
                {({ errors, touched, handleBlur, handleChange }) => (
                    <Form>
                        <Field
                            name="email"
                            type="email"
                            placeholder="أدخل الايميل الخاص بك"
                            component={Input}
                            label="الايميل"
                            error={touched.email && errors.email ? errors.email : ''}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className='mb-8'
                        />
                        <Field
                            name="password"
                            type="password"
                            placeholder="أدخل كلمة المرور الخاص بك"
                            component={Input}
                            label="كلمة المرور"
                            error={touched.password && errors.password ? errors.password : ''}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className='mb-8'
                        />
                        <button className='w-full bg-primary text-white rounded-lg p-2 mt-2 hover:opacity-80 duration-300' type="submit">
                            تسجيل الدخول
                        </button>
                    </Form>
                )}
            </Formik>
            <Link to="/forgot-password" className='content-center'>sdf</Link>
        </FormPlace>
    );
}
