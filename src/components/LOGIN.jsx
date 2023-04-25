import React from "react"
import logo from '../assets/Logo.png'
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
const login =() => {
    const LoginSchema = Yup.object().shape({
        password: Yup.string()
          .min(8, "Too Short!")
          .max(20, "Too Long!")
          .required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
      });
    return(
        <div className="bg-[#F4F8FC] md:flex sm:grid justify-center py-[80px]">
            <div className="pr-[60px]">
                <img src={logo} alt="" className="pb-[30px]"/>
                <h1 className="font-bold text-[#022B69] text-5xl pb-[25px]">Welcome Back,</h1>
                <p className="font-bold text-[#B2BED0] text-5xl sm: pb-[20px]">Log in to continue.</p>
            </div>

            <div className="bg-[#FFFFFF] px-[50px] py-[50px] rounded-r-lg">
                <h1 className="font-bold text-3xl text-[#022B69] px-[50px] pb-[20px]">Login to your account</h1>
                <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
                <Form action="">
                <div className="grid">
                    <label className="text-[#B2BED0] pb-[5px]">Email</label>
                    <Field className="border-solid bg-[#F4F8FC] py-[5px] pl-[10px] mb-[10px] rounded-lg" name="email" type="text"/>
                </div>
                {errors.email && touched.email ? (
                  <div className="text-[#dd4a4a]">{errors.email}</div>
                ) : null}
                <div className="grid">
                <label className="text-[#B2BED0] pt-[10px] pb-[5px]">Password</label>
                    <Field className="border-solid bg-[#F4F8FC] py-[5px] pl-[10px] mb-[15px] rounded-lg" name="password" type="text"/>
                    {errors.password && touched.password ? (
                  <div className="text-[#dd4a4a]">{errors.password}</div>
                ) : null}
                    <div className="flex justify-between text-lg cursor-pointer text-[#0066F5] pb-[25px]">
                        <p>Forgot password?</p>
                        <p>New user? Register</p>
                    </div>
                </div>
                <button className="bg-[#022B69] font-bold text-white ml-[130px] px-[60px] py-[8px] rounded-r-lg hover:bg-[#1AD5FE]">Log in</button>
                </Form>)}
                </Formik>
            </div>

        </div>
    )
}


export default login