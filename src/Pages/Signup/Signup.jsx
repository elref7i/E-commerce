import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import imageLogin from '../../assets/images/fun-3d-cartoon-shopping-bag-dancing.jpg';
import favicon from '../../assets/images/favicon.png';
import { Helmet } from 'react-helmet';

export default function Signup() {
  const [checkEmailExist, setCheckEmailExist] = useState(null);
  const passwordRegx = /^[a-zA-Z0-9!@#$%^&*]{6,20}$/;
  const phoneRegx = /^(02)?01[0125][0-9]{8}/;
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Please enter your name. This field cannot be empty.')
      .min(3, 'Your name should be at least 4 characters long.')
      .max(20, 'Your name should not exceed 20 characters.'),

    email: Yup.string()
      .required('Please provide your email address.')
      .email('The email you entered is not valid. Please check again.'),

    password: Yup.string()
      .required('Please set a password.')
      .matches(
        passwordRegx,
        'Your password must be 6-20 characters and can include letters, numbers, and special characters.'
      ),

    rePassword: Yup.string()
      .required('Please confirm your password.')
      .oneOf(
        [Yup.ref('password')],
        'The passwords do not match. Please try again.'
      ),

    phone: Yup.string()
      .required('Please provide your phone number.')
      .matches(phoneRegx, 'The phone number you entered is not valid'),
  });
  async function sendDataToRegister(values) {
    //* بيرجع ID عشان اقدر اتحكم فيه اوقفو او اشغلو
    const loadingClose = toast.loading(
      'Registering your account... Please wait.'
    );
    try {
      const options = {
        url: 'https://ecommerce.routemisr.com/api/v1/auth/signup',
        method: 'POST',
        data: values,
      };
      let { data } = await axios.request(options);
      if (data.message === 'success') {
        //!   console.log(data);
        toast.success(
          'Account registered successfully! Redirecting to login page...'
        );
        setCheckEmailExist(null);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        'Failed to register your account. Please try again later.';
      toast.error(errorMessage);
      setCheckEmailExist(error.response.data.message);
    } finally {
      toast.dismiss(loadingClose);
    }
  }
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: '',
    },
    validationSchema,
    onSubmit: sendDataToRegister,
  });
  return (
    <>
      <Helmet>
        <title>Sign Up </title>
        <meta name="Sign Up Page Website" content="Freshcart | Sign Up Page" />
      </Helmet>
      <section className="shadow-sm shadow-current rounded-lg grid gap-6 md:rounded-tr-[50px]  md:max-w-[900px] mx-auto grid-cols-12 p-5 ">
        <div className="col-span-12 md:col-span-6 p-2 flex flex-col justify-center rounded-md">
          <header className="text-center mb-2 space-y-2">
            <div className="size-24  mx-auto ">
              <img src={favicon} alt="" />
            </div>
            <h1 className="font-bold text-3xl">Get Started:</h1>

            <p className="font-medium pb-6 text-sm text-slate-400">
              Welcome to FreshCart - let&apos;s create your account
            </p>
          </header>
          <form
            className="space-y-5  w-full mx-auto"
            onSubmit={formik.handleSubmit}
          >
            <div className="name space-y-1">
              <input
                type="text"
                className="form-control border-b-2 w-full"
                placeholder="Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="not-valid-value text-red-600 font-medium">
                  <span className="mr-1 font-bold animate-pulse">*</span>
                  {formik.errors.name}
                </p>
              ) : (
                ''
              )}
            </div>
            <div className="email space-y-1">
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
                <p className="not-valid-value text-red-600 font-medium">
                  <span className="mr-1 font-bold animate-pulse">*</span>
                  {formik.errors.email}
                </p>
              ) : (
                ''
              )}
              {checkEmailExist ? (
                <p className="not-valid-value text-red-600 font-medium">
                  <span className="mr-1 font-bold animate-pulse">*</span>
                  {checkEmailExist}
                </p>
              ) : (
                ''
              )}
            </div>
            <div className="password space-y-1">
              <input
                type="password"
                className="form-control border-b-2 w-full"
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="not-valid-value text-red-600 font-medium">
                  <span className="mr-1 font-bold animate-pulse">*</span>
                  {formik.errors.password}
                </p>
              ) : (
                ''
              )}
            </div>
            <div className="re-password space-y-1">
              <input
                type="password"
                className="form-control  w-full"
                placeholder="rePassword"
                name="rePassword"
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.rePassword && formik.errors.rePassword ? (
                <p className="not-valid-value text-red-600 font-medium">
                  <span className="mr-1 font-bold animate-pulse">*</span>
                  {formik.errors.rePassword}
                </p>
              ) : (
                ''
              )}
            </div>
            <div className="phone space-y-1">
              <input
                type="tel"
                className="form-control border-b-2 w-full"
                placeholder="Phone"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <p className="not-valid-value text-red-600 font-medium">
                  <span className="mr-1 font-bold animate-pulse">*</span>
                  {formik.errors.phone}
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
                Sign Up
              </button>
              <div className="flex gap-1 items-center justify-center">
                <span className="text-slate-400">
                  Don&apos;t havean account?
                </span>
                <Link
                  to="/login"
                  className="text-lg text-primary-300 hover:text-primary-600 duration-300  transition-colors"
                >
                  Login
                </Link>
              </div>
            </footer>
          </form>
        </div>
        <div className="image-login col-span-6  rounded-md bg-[#191A1E] py-8 rounded-tr-[50px] hidden md:flex items-center justify-center overflow-hidden  shadow-current ">
          <img
            src={imageLogin}
            className="block h-[400px]  object-contain"
            alt=""
          />
        </div>
      </section>
    </>
  );
}
