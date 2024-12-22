import axios from 'axios';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import favicon from '../../assets/images/favicon.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function ForgetPassword() {
  const emailRegx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  const [errorResponse, setErrorResponse] = useState(null);
  const navigator = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string()
      .required('* Email is required.')
      .matches(emailRegx, '* Invalid email.'),
  });

  async function sendGmailForeget(values) {
    //* بيرجع ID عشان اقدر اتحكم فيه اوقفو او اشغلو
    const loadingClose = toast.loading('Sending reset email... Please wait.');
    try {
      const options = {
        url: 'https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',
        method: 'POST',
        data: values,
      };
      let { data } = await axios.request(options);
      if (data.statusMsg === 'success') {
        //! console.log(data);
        toast.success(
          'Reset email sent successfully! Redirecting to verification page...',
          {
            position: 'top-center',
          }
        );
        setTimeout(() => {
          navigator('/verifyResetCode');
        }, 2000);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        'Failed to send reset email. Please try again later.';
      toast.error(errorMessage);
      setErrorResponse('*' + error.response.data.message);
    } finally {
      toast.dismiss(loadingClose);
    }
  }
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: sendGmailForeget,
  });
  return (
    <>
      <Helmet>
        <title>Forgot Password - Freshcart</title>
        <meta
          name="description"
          content="Forgot your password? Reset it here and get back to shopping on Freshcart."
        />
        <meta
          name="keywords"
          content="Forgot Password, Freshcart, Reset Password, Shopping, Online Store"
        />
        <meta property="og:title" content="Forgot Password - Freshcart" />
        <meta
          property="og:description"
          content="Reset your Freshcart account password and continue your shopping experience."
        />
      </Helmet>
      <section className="shadow-sm shadow-current rounded-lg  md:rounded-tr-[50px]  max-w-sm mx-auto p-5 ">
        <Link to="/login">
          <i
            className=" fa-solid fa-chevron-left size-8 flex items-center rounded-full justify-center bg-slate-100 hover:bg-slate-200 hover:text-primary-300 mb-4 cursor-pointer "
            title="back To Home"
          ></i>
        </Link>
        <div className="p-3 flex flex-col justify-center rounded-md">
          <header className="text-center mb-6 space-y-2">
            <div className="size-24 mx-auto">
              <img src={favicon} className="mb-5" alt="" />
            </div>
            <h1 className="font-bold  text-xl sm:text-3xl ">
              Forget Password?:
            </h1>
            <p className="font-medium pb-6 text-sm text-slate-400 ">
              Enter your email address
            </p>
          </header>
          <form
            className="space-y-10  w-full mx-auto "
            onSubmit={formik.handleSubmit}
          >
            <div className="email space-y-1 ">
              <input
                type="email"
                className="form-control border-b-2 w-full"
                placeholder="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="not-valid-value text-wrap break-words  text-red-600 font-medium">
                  {formik.errors.email}
                </p>
              ) : (
                ''
              )}
              {errorResponse ? (
                <p className="not-valid-value text-red-600 font-medium">
                  {errorResponse}
                </p>
              ) : (
                ''
              )}
            </div>
            <footer>
              <button
                type="submit"
                className="btn w-3/4 mx-auto block mb-2 px-4 py-2 bg-primary-500 hover:bg-primary-600"
              >
                Send
              </button>
            </footer>
          </form>
        </div>
      </section>
    </>
  );
}
