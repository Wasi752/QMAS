import React from 'react';
import { Formik } from 'formik';

const inputClass = "h-[10%] w-[50%] p-4 border border-blue-300 rounded-md m-1";
const lableClass = "ml-0 pr-2 mt-5 text-2xl font-bold";
const divClassRight = "flex flex-col w-full h-full ml-40";
const divClassLeft = "flex flex-col w-full h-full ml-72 ";

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    }
    else if (values.name.length < 4) {
        errors.name = 'Name must be 4 characters';
    }
    if (!values.father) {
        errors.father = 'Required';
    }
    else if (values.father.length < 4) {
        errors.father = 'Name must be 4 characters';
    }
    if (!values.comment) {
        errors.comment = 'Required';
    }
    else if (values.comment.length < 10) {
        errors.comment = 'Comment must be 20 characters';
    }
    if (!values.email) {
        errors.email = 'Required';
    }
    else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }

    if (!values.nid) {
        errors.nid = 'Required';
    }
    else if (values.nid.length < 8) {
        errors.nid = 'Nid or Birth number must be 9/12/18 characters';
    }


    if (!values.mobile) {
        errors.mobile = 'Required';
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
    fetch('http://localhost:3001/studentsNew', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
})
    .then((response) => {
        window.alert("Your information is saved");
       
    });

    console.log('Alif is not Ba');
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
}

const Form = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    /* and other goodies */
}) => (
    <div className="w-full h-full flex mt-20 mb-56">
        <div className="w-[20%] h-full"></div>

        <div className="w-[60%] h-full bg-blue-50 hover:bg-fuchsia-100 ">
        <p className="mt-5 mb-10 text-5xl text-red-700 font-bold font-serif text-left text-center">Darul  Arqam Madrasha</p>
        <p className="mt-5 mb-10 text-2xl text-red-700 font-bold font-serif text-left text-center">8/E Jatrabari, Dhaka</p>

            <p className="mt-5 mb-10 text-4xl text-green-700 font-bold font-serif text-left text-center">Admission Student/2023</p>
            {/* <p className="mt-5 mb-10 text-5xl text-red-700 font-bold font-serif text-left text-center">2023</p> */}
            <div className="flex w-full h-full justify-center divide-x-2 divide-slate-500">
                <div className="mt-1 flex flex-col w-full h-full">
                    <form onSubmit={handleSubmit}>
                        <div className={divClassLeft}>
                            <label className={lableClass}> Name :</label>
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
                            <label className={lableClass}> Fathers'Name :</label>
                            <input
                                type="text"
                                name='father'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.father}
                                className={inputClass}
                            />
                            <span className='text-red-500'>
                                {errors.father && touched.father && errors.father}
                            </span>

                        </div>

                        <div className={divClassLeft}>
                            <label className={lableClass}> E-mail :</label>
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
                            <label className={lableClass}> Birth/Nid Number :</label>
                            <input
                                type="nid"
                                name='nid'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.nid}
                                className={inputClass}
                            />
                            {errors.nid && touched.nid && errors.nid}

                        </div>

                        <div className={divClassLeft}>
                            <label className={lableClass}> Blood Group :</label>
                            <input
                                type="text"
                                name='blood'
                                value={values.blood}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={inputClass} />
                            {errors.blood && touched.blood && errors.blood}

                        </div>

                        <div className={divClassLeft}>
                            <label className={lableClass}> Mobile Number :</label>
                            <input
                                type="text"
                                name='mobile'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.mobile}
                                className={inputClass}
                            />
                            {errors.mobile && touched.mobile && errors.mobile}

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
                            <label className={lableClass}> Confirm Password :</label>
                            <input
                                type="password"
                                name='confirmPassword'
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={inputClass} />
                            {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}

                        </div>
                        <div className={divClassLeft}>
                            <label className={lableClass}> Image :</label>
                            <input
                                type="file"
                                name='image'
                                onChange={handleChange}
                                className={inputClass} />
                        </div>
                        <div className={divClassLeft}>
                            <label className={lableClass}> E-Signature :</label>
                            <input
                                type="file"
                                name='sign'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sign}
                                className={inputClass}
                            />
                            {errors.adderess && touched.adderess && errors.adderess}

                        </div>

                        <div className={divClassLeft}>
                            <label className={lableClass}> adderess :</label>
                            <input
                                type="text"
                                name='adderess'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.adderess}
                                className={inputClass}
                            />
                            {errors.adderess && touched.adderess && errors.adderess}

                        </div>
                        <div className={divClassLeft}>
                            <label className={lableClass}> Comment :</label>
                            <input
                                type="text"
                                name='comment'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.comment}
                                className={inputClass}
                            />
                            {errors.comment && touched.comment && errors.comment}

                        </div>


                        <div className={divClassRight}>
                            <button
                                type="button"
                                disabled={isSubmitting}
                                className="text-center text-2xl text-white font-bold h-[10%] w-[50%] p-4 border border-blue-300 rounded-md ml-32 mb-5 mr-3 mt-12 bg-green-600 hover:text-blue-300">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="w-[20%] h-full bg-red-400"></div>
    </div>

)
const iValue = { name: '', father: '', email: '', nid: '', blood: '', mobile: '', password: '', confirmPassword: '', adderess: '', image: '', sign: '', comment: '' }
const Basic = () => (
    <div>
        <Formik
            initialValues={iValue}
            validate={validate}
            component={Form}
            onSubmit={onSubmit}
        >
        </Formik>
    </div>
);

export default Basic;