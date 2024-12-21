
import axios from 'axios';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { object, ref, string } from "yup"
import { Helmet } from 'react-helmet';




export default function SendCode() {

    const navigate = useNavigate()
    const validationSchema = object({
        email: string().required("Email is required").email("Email is invalid"),

    })



    async function handleForgotPassword() {
        const toastId = toast.loading(" please wait ...")
        try {
            const options = {
                url: "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
                method: "POST",
                data: {
                    "email": formik.values.email,
                }
            }
            let { data } = await axios.request(options)
            if (data.statusMsg == "success") {
                toast.success(data.message)
                navigate("/verify")
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)


        } finally {

            toast.dismiss(toastId)
        }


    }






    const formik = useFormik({
        initialValues: {

            "email": "",


        },
        validationSchema,
        onSubmit: handleForgotPassword
    })
    return (
        <>
            <Helmet>
                <title> forgot password page</title>
            </Helmet>
            <form onSubmit={formik.handleSubmit} className=' mt-10 flex-col flex gap-4'>
                <div className="email">
                    <input
                        onBlur={formik.handleBlur} className="form-control w-full" type="email" placeholder="Type your email" value={formik.values.email} name="email" onChange={formik.handleChange} />
                    {formik.errors.email && formik.touched.email && <p className="text-red-600 mt-2 text-sm"> *{formik.errors.email}</p>}
                </div>
                <button type="submit" className="btn w-full">Send Code</button>
            </form>
        </>
    )
}
