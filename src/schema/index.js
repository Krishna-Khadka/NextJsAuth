import * as Yup from "yup"

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(30).required("Enter enter your name"),
    email: Yup.string().email().required("Please enter email address"),
    // address: Yup.string().min(2).max(30).required("Enter enter your address"),
    password: Yup.string().min(8).required("Please enter your password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password'), null], "password must be matched"),
})