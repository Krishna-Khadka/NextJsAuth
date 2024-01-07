"use client";

import axios from "axios";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import { signUpSchema } from "@/schema";

const initialValues = {
  name: "",
  email: "",
  address: "",
  password: "",
  confirm_password: "",
};
console.log(initialValues);

const SignUpForm = () => {
  const { handleSubmit, handleBlur, handleChange, errors, values, touched } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: async(values, action) => {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/user/register', values);
          if(response.status == 200){
            console.log('user registered successfully !!');
          }
          else{
            console.error('Registration failed:', response.data);
          }
        } catch (error) {
          console.error('Error during registration: ', error);
        }
      },
    });
  // console.log(formik)
  return (
    <>
      <div className="w-[550px] mt-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4"
        >
          <h1 className="text-center text-3xl font-bold mb-6">Sign Up</h1>
          <div className="mb-6">
            <input
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight h-12 focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Full Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              required
            />
            {errors.name && touched.name ? (
              <p className="text-red-600">{errors.name}</p>
            ) : null}
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight h-12 focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              required
            />
            {errors.email && touched.email ? (
              <p className="text-red-600">{errors.email}</p>
            ) : null}
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight h-12 focus:outline-none focus:shadow-outline"
              name="address"
              type="text"
              placeholder="Address"
              required
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address}
            />
            {errors.address && touched.address ? (
              <p className="text-red-600">{errors.address}</p>
            ) : null}
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight h-12 focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="Passsword"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              required
            />
            {errors.password && touched.password ? (
              <p className="text-red-600">{errors.password}</p>
            ) : null}
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight h-12 focus:outline-none focus:shadow-outline"
              name="confirm_password"
              type="password"
              placeholder="Confirm Passsword"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.confirm_password}
              required
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="text-red-600">{errors.confirm_password}</p>
            ) : null}
          </div>
          <div className="mb-6">
            <input
              type="submit"
              className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              value="Register"
            />
          </div>
          <div className="mb-6 text-center">
            <p className="text-gray-500">
              Don't have an account ?{" "}
              <Link href="/sign-in" className="text-blue-500 font-semibold">
                Sign up
              </Link>
            </p>
          </div>
          <div className="mb-6 text-center text-gray-600 ">or</div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-5 justify-center"
            >
              <FaFacebook className="text-2xl" />
              Login With Facebook
            </button>
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full h-12 border border-gray-400 text-gray-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-5 justify-center"
            >
              <FcGoogle className="text-2xl" />
              Login With Google
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
