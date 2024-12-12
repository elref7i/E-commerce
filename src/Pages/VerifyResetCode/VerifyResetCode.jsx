import axios from 'axios';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import favicon from '../../assets/images/favicon.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function VerifyResetCode() {
  const [errorResponse, setErrorResponse] = useState(null);
  const navigator = useNavigate();
  const validationSchema = Yup.object({
    resetCode: Yup.string()
      .required('Please provide your resetCode.')
      .matches(/^\d{6}$/, 'Reset code must be exactly 6 digits.'),
  });
  async function sendGmailForeget(values) {
    //* بيرجع ID عشان اقدر اتحكم فيه اوقفو او اشغلو
    const loadingClose = toast.loading('Watting ... ', {
      position: 'top-center',
    });
    try {
      const options = {
        url: 'https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',
        method: 'POST',
        data: values,
      };
      let { data } = await axios.request(options);
      toast.success(data.message);
      setTimeout(() => {
        navigator('/login');
      }, 2000);
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setErrorResponse(error.response.data.message);
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
        <title>Verify Reset Code </title>
        <meta
          name="Verify Reset Code  Page Website"
          content="Freshcart | Verify Reset Code  Page"
        />
      </Helmet>
      <section className="shadow-sm shadow-current rounded-lg  md:rounded-tr-[50px]  max-w-sm mx-auto p-5 ">
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
                  <span className="mr-1 font-bold animate-pulse">*</span>
                  {formik.errors.resetCode}
                </p>
              ) : (
                ''
              )}
              {errorResponse ? (
                <p className="not-valid-value text-red-600 font-medium">
                  <span className="mr-1 font-bold animate-pulse">*</span>
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
              <button
                type="submit"
                className="outline-btn flex-1 px-4 py-2 hover:text-white hover:bg-primary-400 hover:border-primary-400"
              >
                Send Again
              </button>
            </footer>
          </form>
        </div>
      </section>
    </>
  );
}
