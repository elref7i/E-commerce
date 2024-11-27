import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

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
    const loadingClose = toast.loading('Watting ... ', {
      position: 'top-center',
    });
    try {
      const options = {
        url: 'https://ecommerce.routemisr.com/api/v1/auth/signup',
        method: 'POST',
        data: values,
      };
      let { data } = await axios.request(options);
      console.log(data);
      if (data.message === 'success') {
        toast.success(data.message);
        setCheckEmailExist(null);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (error) {
      toast.error(error.response.data.message);
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
      <h1 className="font-medium mb-5 text-2xl text-center">Regguster Now:</h1>
      <form className="space-y-5 w-1/2 mx-auto" onSubmit={formik.handleSubmit}>
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
            className="form-control border-b-2 w-full"
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
        <button
          type="submit"
          className="btn px-4 py-2 bg-primary-500 hover:bg-primary-600"
        >
          Register
        </button>
      </form>
    </>
  );
}
