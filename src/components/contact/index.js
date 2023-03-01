import * as yup from "yup";

const basicSchema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^[\p{L} ]+$/u, "Please enter letters only")
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Please enter a proper name!"),
    lastName: yup
        .string()
        .matches(/^[\p{L} ]+$/u, "Please enter letters only")
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Please enter a proper name!"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    subject: yup.string().min(5, "To Short!").max(50, "Too Long!").required("Please enter a subject!"),
    message: yup.string().min(5, "To Short!").max(500, "Too Long!").required("Please enter a massage!"),
});

export default basicSchema;
