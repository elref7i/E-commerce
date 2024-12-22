import axios from 'axios';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import favicon from '../../assets/images/favicon.png';
import { UserContext } from '../../context/User.context';
import { Helmet } from 'react-helmet';

export default function Login() {
  const passwordRegx = /^[a-zA-Z0-9!@#$%^&*]{6,20}$/;
  const [incorrectData, setIncorrectData] = useState(null);
  const emailRegx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  const navigator = useNavigate();
  const { setToken } = useContext(UserContext);
  const validationSchema = Yup.object({
    email: Yup.string()
      .required('* Email is required.')
      .matches(emailRegx, '* Invalid email address.'),
    password: Yup.string()
      .required('* Password is required.')
      .matches(passwordRegx, '* Invalid password.'),
  });
  async function sendDataToLogin(values) {
    //* بيرجع ID عشان اقدر اتحكم فيه اوقفو او اشغلو
    const loadingClose = toast.loading('Logging in... Please wait.');
    try {
      const options = {
        url: 'https://ecommerce.routemisr.com/api/v1/auth/signin',
        method: 'POST',
        data: values,
      };
      let { data } = await axios.request(options);
      if (data.message === 'success') {
        //!  console.log(data);
        toast.success('Login successful! Redirecting to home page...');
        setToken(data.token);
        localStorage.setItem('token', data.token);
        setIncorrectData(null);
        setTimeout(() => {
          navigator('/');
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response?.data?.message ||
        '* Login failed. Please try again later.';
      toast.error(errorMessage, {
        position: 'top-center',
      });
      setIncorrectData('*' + error.response.data.message);
    } finally {
      toast.dismiss(loadingClose);
    }
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: sendDataToLogin,
  });
  return (
    <>
      <Helmet>
        <title>Login - Freshcart</title>
        <meta
          name="description"
          content="Login to your Freshcart account to access your shopping cart, wishlist, and order history."
        />
        <meta
          name="keywords"
          content="Login, Freshcart, User Account, Shopping, Online Store"
        />
        <meta property="og:title" content="Login - Freshcart" />
        <meta
          property="og:description"
          content="Login to your Freshcart account to access your shopping cart and more!"
        />
      </Helmet>
      <section className="mx-auto min-h-[500px] w-full sm:w-3/4  shadow-lg lg:w-1/3 bg-slate-50 p-3 rounded-lg ">
        <div className="p-3 flex flex-col justify-center rounded-md">
          <header className="text-center mb-6 space-y-2">
            <div className="size-[90px] mx-auto">
              <img src={favicon} className="mb-5" alt="" />
            </div>
            <h1 className="font-bold  text-xl sm:text-3xl ">
              Welcome Back:
              <span>
                <i className="fa-solid fa-hand-sparkles ml-2 text-primary-800 hover:text-primary-600"></i>
              </span>
            </h1>
            <p className="font-medium pb-6 text-sm text-slate-400 ">
              Please enter your details
            </p>
          </header>
          <form
            className="space-y-5  w-full mx-auto "
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
                <p className={`not-valid-value text-red-600 font-medium`}>
                  {formik.errors.email}
                </p>
              ) : (
                ''
              )}
              {incorrectData ? (
                <p className={`not-valid-value text-red-600 font-medium`}>
                  {incorrectData}
                </p>
              ) : (
                ''
              )}
            </div>
            <div className="password  space-y-1">
              <input
                type="password"
                className="form-control  border-b-2 w-full"
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className={`not-valid-value text-red-600 font-medium`}>
                  {formik.errors.password}
                </p>
              ) : (
                ''
              )}
              <Link
                to="/foregetPassword"
                className="block pt-2 ml-auto w-fit text-end text-sm italic text-red-500 hover:text-red-700 duration-300 transition-colors "
              >
                Forget Password?
              </Link>
            </div>

            <footer>
              <button
                type="submit"
                className="btn w-3/4 mx-auto block mb-2 px-4 py-2 bg-primary-500 hover:bg-primary-600"
              >
                Login
              </button>
              <div className="flex gap-1 items-center justify-center">
                <span className="text-slate-400">
                  Don&apos;t havean account?
                </span>
                <Link
                  to="/register"
                  className="text-lg text-primary-300 hover:text-primary-600 duration-300  transition-colors"
                >
                  Sign up
                </Link>
              </div>
            </footer>
          </form>
        </div>
      </section>
    </>
  );
}
