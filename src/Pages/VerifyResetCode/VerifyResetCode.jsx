import axios from 'axios';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import favicon from '../../assets/images/favicon.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function VerifyResetCode() {
  const [errorResponse, setErrorResponse] = useState(null);
  const navigator = useNavigate();
  const validationSchema = Yup.object({
    resetCode: Yup.string()
      .required('* Please provide your resetCode.')
      .matches(/^\d{6}$/, '* Reset code must be exactly 6 digits.'),
  });
  async function sendGmailForeget(values) {
    //* بيرجع ID عشان اقدر اتحكم فيه اوقفو او اشغلو
    const loadingClose = toast.loading(
      'Please wait while we process your request...'
    );

    try {
      const options = {
        url: 'https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',
        method: 'POST',
        data: values,
      };
      let { data } = await axios.request(options);
      toast.success('Verification successful! Redirecting to login...');
      setTimeout(() => {
        navigator('/login');
      }, 2000);
      // ! console.log(data);
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message ||
          'An unexpected error occurred. Please try again.',
        {
          position: 'top-center',
        }
      );
      setErrorResponse('*' + error.response.data.message);
    } finally {
      toast.dismiss(loadingClose);
    }
  }
  const formik = useFormik({
    initialValues: {
      resetCode: '',
    },
    validationSchema,
    onSubmit: sendGmailForeget,
  });
  return (
    <>
      <Helmet>
        <title>Verify Reset Code - Freshcart</title>
        <meta
          name="description"
          content="Verify your reset code to create a new password for your Freshcart account."
        />
        <meta
          name="keywords"
          content="Verify Reset Code, Freshcart, Password Reset, Shopping, Online Store"
        />
        <meta property="og:title" content="Verify Reset Code - Freshcart" />
        <meta
          property="og:description"
          content="Enter your reset code to create a new password for your Freshcart account."
        />
      </Helmet>

      <section className="shadow-sm shadow-current rounded-lg  md:rounded-tr-[50px]  max-w-sm mx-auto p-5 ">
        <Link to="/foregetPassword">
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
            <h1 className="font-bold  text-3xl ">Check your Gmail</h1>
            <p className="font-medium pb-6 text-sm text-slate-400 ">
              We&apos;ve sent the code to your email
            </p>
          </header>
          <form
            className="space-y-10  w-full mx-auto "
            onSubmit={formik.handleSubmit}
          >
            <div className="reset-code space-y-1 ">
              <input
                type="text"
                className="form-control border-b-2 w-full"
                placeholder="Enter Code"
                name="resetCode"
                value={formik.values.resetCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.resetCode && formik.errors.resetCode ? (
                <p className="not-valid-value text-wrap break-words  text-red-600 font-medium">
                  {formik.errors.resetCode}
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
            <footer className="flex flex-wrap gap-6 text-nowrap ">
              <button
                type="submit"
                className="btn flex-1  mx-auto px-4 py-2 bg-primary-500 hover:bg-primary-600"
              >
                Verity
              </button>
            </footer>
          </form>
        </div>
      </section>
    </>
  );
}
