"use client";

import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SignInSchema } from "@/schema/SignInSchema";
import { useRouter } from "next/navigation";

const initialValues = {
  email: "",
  password: "",
};
// console.log(initialValues);

const SignInForm = () => {
  const router = useRouter();

  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues,
      validationSchema: SignInSchema,
      onSubmit: async (values, action) => {
        try {
          console.log(values);
          const response = await axios.post(
            "http://127.0.0.1:8000/api/user/login",
            values
          );

          if (response.status === 200) {
            console.log("response", response);
            console.log("token", response.data.token);

            console.log("Login successful!");
            localStorage.setItem("tokens", response.data.token);
            router.push("/profile");
          } else {
            console.error("Login failed:", response.data);
          }
        } catch (error) {
          console.error("Error during login:", error);
        }
      },
    });
  // console.log(formik)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-screen">
      <div className="w-full sm:w-96">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4"
        >
          <h1 className="text-center text-3xl font-bold mb-6">Login</h1>
          <div className="mb-6">
            <input
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight h-12 focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
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
              name="password"
              type="password"
              placeholder="Passsword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              required
            />
            {errors.password && touched.password ? (
              <p className="text-red-600">{errors.password}</p>
            ) : null}
          </div>
          <div className="mb-6">
            <input
              type="submit"
              className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              value="Login"
            />
          </div>
          <div className="mb-6 text-center">
            <p className="text-gray-500">
              Don't have an account ?{" "}
              <Link href="/sign-up" className="text-blue-500 font-semibold">
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
    </div>
  );
};

export default SignInForm;
