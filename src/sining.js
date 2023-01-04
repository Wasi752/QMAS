import React from 'react';
import { Formik } from 'formik';

const inputClass = "h-[10%] w-[50%] p-4 border border-blue-300 rounded-md m-1";
const lableClass = "ml-0 pr-2 mt-5 text-2xl font-bold";
const divClassRight = "flex flex-col w-full h-full ml-40";
const divClassLeft = "flex flex-col w-full h-full ml-72";

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    }
    else if (values.name.length < 4) {
        errors.name = 'Name must be 4 characters';
    }
    if (!values.lastName) {
        errors.lastName = 'Required';
    }
    else if (values.lastName.length < 4) {
        errors.lastName = 'Name must be 4 characters';
    }
    if (!values.email) {
        errors.email = 'Required';
    }
    else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    
    if (!values.password) {
        errors.password = 'Required';
    }
    if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Password dase not match';
    }
    console.log(JSON.stringify(errors));
    return errors;
}
const onSubmit = (values, { setSubmitting }) => {

    console.log('Alif is not Ba');
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);

}
const form = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    /* and other goodies */
}) => (
    <div className="w-full h-full flex mt-20 mb-56 bg-sky-200 hover:bg-sky-100">
        <div className="w-[20%] h-full"></div>

        <div className="w-[60%] h-full bg-gray-100 ">
            <p className="mt-5 mb-10 text-5xl text-red-700 font-bold font-serif text-left text-center">Create Account</p>
            <div className="flex w-full h-full justify-center divide-x-2 divide-slate-500">
                <div className="mt-1 flex flex-col w-full h-full">
                    <form onSubmit={handleSubmit}>
                        <div className={divClassLeft}>
                            <label className={lableClass}>First Name :</label>
                            <input
                                type="name"
                                name='name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                className={inputClass}
                            />
                            <span className='text-red-500'>
                            {errors.name && touched.name && errors.name}
                            </span>

                        </div>
                        <div className={divClassLeft}>
                            <label className={lableClass}>Last Name :</label>
                            <input
                                type="lastName"
                                name="lastName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                                className={inputClass}
                            />
                            {errors.lastName && touched.password && errors.lastName}
                        </div>
                        <div className={divClassLeft}>
                            <label className={lableClass}>E-mail :</label>
                            <input
                                type="email"
                                name='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className={inputClass}
                            />
                            {errors.email && touched.email && errors.email}
                        </div>
                        
                        <div className={divClassLeft}>
                            <label className={lableClass}> Password :</label>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className={inputClass}
                            />
                            {errors.password && touched.password && errors.password}
                        </div>
                        <div className={divClassLeft}>
                            <label className={lableClass}>Confirm Password :</label>
                            <input
                                type="password"
                                name='confirmPassword'
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={inputClass} />
                            {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}

                        </div>
                       
                        <div className={divClassRight}>
                            <button
                                type="button"
                                disabled={isSubmitting}
                                className="text-center text-2xl text-white font-bold h-[10%] w-[50%] p-4 border border-blue-300 rounded-md ml-32 mb-5 mr-3 mt-12 bg-yellow-600 hover:text-blue-300">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="w-[20%] h-full"></div>
    </div>

)
const iValue = { name: '', email: '', lastName: '', password: '', confirmPassword: '' }
const Sining = () => (
    <div>
        <Formik
            initialValues={iValue}
            validate={validate}
            onSubmit={onSubmit}
        >
            {form}
        </Formik>
    </div>
);

export default Sining;