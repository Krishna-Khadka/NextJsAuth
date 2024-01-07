import * as Yup from "yup"

export const SignInSchema = Yup.object({
    email: Yup.string().email().required("Please enter email address"),
    password: Yup.string().min(8).required("Please enter your password"),
})