import axios from 'axios';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import favicon from '../../assets/images/favicon.png';
import { Link } from 'react-router-dom';

export default function ForgetPassword() {
  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Please provide your email address.')
      .email('The email you entered is not valid. Please check again.'),
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
    } catch (error) {
      console.log(error);
    }
  }
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: sendDataToLogin,
  });
  return (
    <>
      <section className="shadow-sm shadow-current rounded-lg  md:rounded-tr-[50px]  max-w-sm mx-auto p-5 ">
        <div className="p-3 flex flex-col justify-center rounded-md">
          <header className="text-center mb-6 space-y-2">
            <div className="size-24 mx-auto">
              <img src={favicon} className="mb-5" alt="" />
            </div>
            <h1 className="font-bold  text-3xl ">
              Forget Password?:
              {/* <span>
                <i className="fa-solid fa-hand-sparkles ml-2 text-primary-800 hover:text-primary-600"></i>
              </span> */}
            </h1>
            <p className="font-medium pb-6 text-sm text-slate-400 ">
              Enter your email address
            </p>
          </header>
          <form
            className="space-y-10  w-full mx-auto "
            onSubmit={formik.handleSubmit}
          >
            <div className="email space-y-1 bg-red-400">
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
                  <span className="mr-1 font-bold animate-pulse">*</span>
                  {formik.errors.email}
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
