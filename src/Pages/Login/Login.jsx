import axios from 'axios';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import imageLogin from '../../assets/images/fun-3d-cartoon-shopping-bag-dancing.jpg';
import favicon from '../../assets/images/favicon.png';
import { UserContext } from '../../context/User.context';

export default function Login() {
  const passwordRegx = /^[a-zA-Z0-9!@#$%^&*]{6,20}$/;
  const [incorrectData, setIncorrectData] = useState(null);
  const navigator = useNavigate();
  const { setToken } = useContext(UserContext);
  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Please provide your email address.')
      .email('The email you entered is not valid. Please check again.'),
    password: Yup.string()
      .required('Please set a password.')
      .matches(
        passwordRegx,
        'Your password must be 6-20 characters and can include letters, numbers, and special characters.'
      ),
  });
  async function sendDataToLogin(values) {
    //* بيرجع ID عشان اقدر اتحكم فيه اوقفو او اشغلو
    const loadingClose = toast.loading('Watting ... ', {
      position: 'top-center',
    });
    try {
      const options = {
        url: 'https://ecommerce.routemisr.com/api/v1/auth/signin',
        method: 'POST',
        data: values,
      };
      let { data } = await axios.request(options);
      console.log(data);
      if (data.message === 'success') {
        toast.success('True');
        setToken(data.token);
        localStorage.setItem('token', data.token);
        setIncorrectData(null);
        setTimeout(() => {
          navigator('/');
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setIncorrectData(error.response.data.message);
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
      <section className="shadow-sm shadow-current rounded-lg grid gap-6 md:rounded-tr-[50px]   md:max-w-[800px] mx-auto grid-cols-12 p-5 ">
        <div className="col-span-12 md:col-span-6 p-3 flex flex-col justify-center rounded-md">
          <header className="text-center mb-6 space-y-2">
            <div className="size-24 mx-auto">
              <img src={favicon} className="mb-5" alt="" />
            </div>
            <h1 className="font-bold  text-3xl ">
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
            className="space-y-10  w-full mx-auto "
            onSubmit={formik.handleSubmit}
          >
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
              {incorrectData ? (
                <p className="not-valid-value text-red-600 font-medium">
                  <span className="mr-1 font-bold animate-pulse">*</span>
                  {incorrectData}
                </p>
              ) : (
                ''
              )}
            </div>
            <div className="password space-y-1">
              <input
                type="password"
                className="form-control mb-2 border-b-2 w-full"
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="not-valid-value text-red-600 text-wrap font-medium">
                  <span className="mr-1 font-bold animate-pulse">*</span>
                  {formik.errors.password}
                </p>
              ) : (
                ''
              )}
              <Link
                to="/foregetPassword"
                className="block text-end text-sm italic text-red-500 hover:text-red-700 duration-300 transition-colors "
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
        <div className="image-login col-span-6 rounded-md  bg-[#191A1E] py-8 rounded-tr-[50px] hidden md:block overflow-hidden  shadow-current ">
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
