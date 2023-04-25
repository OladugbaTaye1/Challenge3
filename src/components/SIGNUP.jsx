import React from "react"
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
const login =() => {
    const SignupSchema = Yup.object().shape({
        first_name: Yup.string()
            .min(8, "Too Short!")
            .max(20, "Too Long!")
            .required("Required"),
        last_name: Yup.string()
            .min(8, "Too Short!")
            .max(20, "Too Long!")
            .required("Required"),
        password: Yup.string()
          .min(8, "Too Short!")
          .max(20, "Too Long!")
          .required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
      });
    return(
        <div className="bg-[#F4F8FC] md:flex sm:grid justify-center py-[35px]">
            <div className="pr-[20px] pt-[100px]">
                <h1 className="font-bold text-[#022B69] text-5xl pb-[25px]">Welcome,</h1>
                <p className="font-bold text-[#B2BED0] text-5xl sm: pb-[20px]">Register in to continue.</p>
            </div>

            <div className="bg-[#FFFFFF] px-[50px] py-[40px] rounded-r-lg">
                <h1 className="font-bold text-3xl text-[#022B69] px-[50px] pb-[20px]">Login to your account</h1>
                <Formik
       initialValues={{
         first_name: "",
         last_name: "",
         email: "",
         passwordConfirmation: "",
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
                <Form action="">
                <div className="md:flex sm:grid">
                    <div className="grid">
                        <label className="text-[#B2BED0] pb-[5px]">Full Name</label>
                        <Field className="border-solid bg-[#F4F8FC] py-[5px] pl-[5px] mb-[20px] mr-[10px] rounded-lg" type="text" placeholder="First Name"/>
                    </div>
                    {errors.first_name && touched.first_name ? (
                  <div className="text-[#dd4a4a]">{errors.first_name}</div>
                ) : null}
                    <div>
                        <Field className="border-solid bg-[#F4F8FC] py-[5px] pl-[10px] mt-[30px] rounded-lg" type="text" placeholder="Last Name" />
                    </div>
                    {errors.last_name && touched.last_name ? (
                  <div className="text-[#dd4a4a]">{errors.last_name}</div>
                ) : null}
                </div>
                <div className="grid">
                    <label className="text-[#B2BED0] pb-[5px]">Email</label>
                    <Field className="border-solid bg-[#F4F8FC] py-[5px] pl-[10px] mb-[20px] rounded-lg" type="text"/>
                </div>
                {errors.email && touched.email ? (
                  <div className="text-[#dd4a4a]">{errors.email}</div>
                ) : null}
                <div className="grid">
                    <label className="text-[#B2BED0] pb-[5px]">Password</label>
                    <Field className="border-solid bg-[#F4F8FC] py-[5px] pl-[10px] mb-[20px] rounded-lg" type="text"/>
                </div>
                {errors.password && touched.password ? (
                  <div className="text-[#dd4a4a]">{errors.password}</div>
                ) : null}
                <div className="grid">
                    <label className="text-[#B2BED0] pb-[5px]">Confirm Password</label>
                    <Field className="border-solid bg-[#F4F8FC] py-[5px] pl-[10px] mb-[5px] rounded-lg" type="text"/>
                    {errors.passwordConfirmation && touched.passwordConfirmation ? (
                  <div className="text-[#dd4a4a]">{errors.passwordConfirmation}</div>
                ) : null}
                    <div className="flex text-lg justify-end cursor-pointer text-[#0066F5] pb-[15px]">
                        <p className="t">Old user?</p>
                        <p>Log in</p>
                    </div>
                </div>
                <button className="bg-[#022B69] font-bold text-white ml-[130px] px-[60px] py-[5px] rounded-r-lg hover:bg-[#1AD5FE]">Log in</button>
                </Form>)}
                </Formik>
            </div>

        </div>
    )
}


export default login