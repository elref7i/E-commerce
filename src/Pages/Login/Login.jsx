import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import favicon from "../../assets/images/favicon.png";
import { UserContext } from "../../context/User.context";
import { Helmet } from "react-helmet";

export default function Login() {
  const passwordRegx = /^[a-zA-Z0-9!@#$%^&*]{6,20}$/;
  const [incorrectData, setIncorrectData] = useState(null);
  const emailRegx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  const navigator = useNavigate();
  const { setToken } = useContext(UserContext);
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("* Email is required.")
      .matches(emailRegx, "* Invalid email address."),
    password: Yup.string()
      .required("* Password is required.")
      .matches(passwordRegx, "* Invalid password."),
  });
  async function sendDataToLogin(values) {
    //* بيرجع ID عشان اقدر اتحكم فيه اوقفو او اشغلو
    const loadingClose = toast.loading("Logging in... Please wait.");
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/auth/signin",
        method: "POST",
        data: values,
      };
      let { data } = await axios.request(options);
      if (data.message === "success") {
        //!  console.log(data);
        toast.success("Login successful! Redirecting to home page...");
        setToken(data.token);
        localStorage.setItem("token", data.token);
        setIncorrectData(null);
        setTimeout(() => {
          navigator("/");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response?.data?.message ||
        "* Login failed. Please try again later.";
      toast.error(errorMessage, {
        position: "top-center",
      });
      setIncorrectData("*" + error.response.data.message);
    } finally {
      toast.dismiss(loadingClose);
    }
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
        <meta
          property="og:title"
          content="Login - Freshcart"
        />
        <meta
          property="og:description"
          content="Login to your Freshcart account to access your shopping cart and more!"
        />
      </Helmet>

      {/* Background Pattern */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 -z-10">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230aad0a' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          ></div>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Branding */}
            <div className="hidden lg:block">
              <div className="max-w-lg">
                <div className="mb-8">
                  <div className="flex items-center mb-6">
                    <img
                      src={favicon}
                      className="w-12 h-12 object-contain mr-4"
                      alt="FreshCart Logo"
                    />
                    <h1 className="text-3xl font-bold text-gray-900">
                      FreshCart
                    </h1>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Welcome Back to Your Shopping Journey
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Sign in to access your personalized shopping experience,
                    track orders, manage your wishlist, and enjoy exclusive
                    deals.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-shopping-cart text-primary-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Easy Shopping
                      </h3>
                      <p className="text-gray-600">
                        Browse thousands of products with ease
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-shipping-fast text-primary-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Fast Delivery
                      </h3>
                      <p className="text-gray-600">
                        Get your orders delivered quickly and safely
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-shield-halved text-primary-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Secure & Safe
                      </h3>
                      <p className="text-gray-600">
                        Your data and payments are protected
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <div className="card p-8 shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <div className="lg:hidden mx-auto w-16 h-16 mb-6">
                    <img
                      src={favicon}
                      className="w-full h-full object-contain"
                      alt="FreshCart Logo"
                    />
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Welcome Back
                    <span className="ml-2">
                      <i className="fa-solid fa-hand-sparkles text-primary-600"></i>
                    </span>
                  </h1>
                  <p className="text-gray-600">
                    Sign in to your account to continue shopping
                  </p>
                </div>

                <form
                  onSubmit={formik.handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fa-solid fa-envelope text-gray-400"></i>
                      </div>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        className={`form-control w-full pl-10 pr-4 py-3 ${
                          (formik.touched.email && formik.errors.email) ||
                          incorrectData
                            ? "form-control-error"
                            : ""
                        }`}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    {formik.touched.email && formik.errors.email && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <i className="fa-solid fa-exclamation-circle mr-1"></i>
                        {formik.errors.email}
                      </p>
                    )}
                    {incorrectData && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <i className="fa-solid fa-exclamation-circle mr-1"></i>
                        {incorrectData}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fa-solid fa-lock text-gray-400"></i>
                      </div>
                      <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className={`form-control w-full pl-10 pr-4 py-3 ${
                          formik.touched.password && formik.errors.password
                            ? "form-control-error"
                            : ""
                        }`}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    {formik.touched.password && formik.errors.password && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <i className="fa-solid fa-exclamation-circle mr-1"></i>
                        {formik.errors.password}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        Remember me
                      </span>
                    </label>
                    <Link
                      to="/foregetPassword"
                      className="text-sm text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-full btn-lg relative overflow-hidden group"
                    disabled={formik.isSubmitting}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {formik.isSubmitting ? (
                        <>
                          <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                          Signing In...
                        </>
                      ) : (
                        <>
                          <i className="fa-solid fa-arrow-right mr-2"></i>
                          Sign In
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  </button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      className="btn btn-outline btn-md flex items-center justify-center"
                    >
                      <i className="fab fa-google mr-2"></i>
                      Google
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline btn-md flex items-center justify-center"
                    >
                      <i className="fab fa-facebook mr-2"></i>
                      Facebook
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-600">
                      Don&apos;t have an account?{" "}
                      <Link
                        to="/register"
                        className="font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        Create account
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
