import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import favicon from "../../assets/images/favicon.png";
import { Helmet } from "react-helmet";

export default function Signup() {
  const [checkEmailExist, setCheckEmailExist] = useState(null);
  const passwordRegx = /^[a-zA-Z0-9!@#$%^&*]{6,20}$/;
  const emailRegx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  const phoneRegx = /^(02)?01[0125][0-9]{8}/;
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("* Name is required.")
      .min(3, "* Minimum 3 characters.")
      .max(20, "* Maximum 20 characters."),
    email: Yup.string()
      .required("* Email is required.")
      .matches(emailRegx, "* Invalid email address."),
    password: Yup.string()
      .required("* Password is required.")
      .matches(passwordRegx, "* Invalid password format."),
    rePassword: Yup.string()
      .required("* Please confirm your password.")
      .oneOf([Yup.ref("password")], "* Passwords must match."),
    phone: Yup.string()
      .required("* Phone number is required.")
      .matches(phoneRegx, "* Invalid phone number."),
  });

  async function sendDataToRegister(values) {
    //* بيرجع ID عشان اقدر اتحكم فيه اوقفو او اشغلو
    const loadingClose = toast.loading(
      "Registering your account... Please wait."
    );
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/auth/signup",
        method: "POST",
        data: values,
      };
      let { data } = await axios.request(options);
      if (data.message === "success") {
        //!   console.log(data);
        toast.success(
          "Account registered successfully! Redirecting to login page..."
        );
        setCheckEmailExist(null);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to register your account. Please try again later.";
      toast.error(errorMessage);
      setCheckEmailExist("*" + error.response.data.message);
    } finally {
      toast.dismiss(loadingClose);
    }
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema,
    onSubmit: sendDataToRegister,
  });
  return (
    <>
      <Helmet>
        <title>Signup - Freshcart</title>
        <meta
          name="description"
          content="Create a new account on Freshcart to start shopping and track your orders."
        />
        <meta
          name="keywords"
          content="Signup, Freshcart, Create Account, Shopping, Online Store"
        />
        <meta
          property="og:title"
          content="Signup - Freshcart"
        />
        <meta
          property="og:description"
          content="Create a new account on Freshcart and start shopping today!"
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
                    Join the FreshCart Family
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Create your account and unlock a world of amazing products,
                    exclusive deals, and personalized shopping experiences.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-gift text-primary-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Welcome Bonus
                      </h3>
                      <p className="text-gray-600">
                        Get exclusive discounts on your first order
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-heart text-primary-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Wishlist</h3>
                      <p className="text-gray-600">
                        Save your favorite items for later
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-bell text-primary-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Smart Notifications
                      </h3>
                      <p className="text-gray-600">
                        Get updates on orders and special offers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="w-full max-w-lg mx-auto lg:mx-0">
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
                    Create Account
                    <span className="ml-2">
                      <i className="fa-solid fa-user-plus text-primary-600"></i>
                    </span>
                  </h1>
                  <p className="text-gray-600">
                    Join FreshCart and start shopping today
                  </p>
                </div>

                <form
                  onSubmit={formik.handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i className="fa-solid fa-user text-gray-400"></i>
                        </div>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                          className={`form-control w-full pl-10 pr-4 py-3 ${
                            formik.touched.name && formik.errors.name
                              ? "form-control-error"
                              : ""
                          }`}
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      {formik.touched.name && formik.errors.name && (
                        <p className="mt-2 text-sm text-red-600 flex items-center">
                          <i className="fa-solid fa-exclamation-circle mr-1"></i>
                          {formik.errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i className="fa-solid fa-phone text-gray-400"></i>
                        </div>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          placeholder="Enter your phone number"
                          className={`form-control w-full pl-10 pr-4 py-3 ${
                            formik.touched.phone && formik.errors.phone
                              ? "form-control-error"
                              : ""
                          }`}
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      {formik.touched.phone && formik.errors.phone && (
                        <p className="mt-2 text-sm text-red-600 flex items-center">
                          <i className="fa-solid fa-exclamation-circle mr-1"></i>
                          {formik.errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

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
                          checkEmailExist
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
                    {checkEmailExist && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <i className="fa-solid fa-exclamation-circle mr-1"></i>
                        {checkEmailExist}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                          placeholder="Create a password"
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

                    <div>
                      <label
                        htmlFor="rePassword"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Confirm Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i className="fa-solid fa-lock text-gray-400"></i>
                        </div>
                        <input
                          id="rePassword"
                          type="password"
                          name="rePassword"
                          placeholder="Confirm your password"
                          className={`form-control w-full pl-10 pr-4 py-3 ${
                            formik.touched.rePassword &&
                            formik.errors.rePassword
                              ? "form-control-error"
                              : ""
                          }`}
                          value={formik.values.rePassword}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      {formik.touched.rePassword &&
                        formik.errors.rePassword && (
                          <p className="mt-2 text-sm text-red-600 flex items-center">
                            <i className="fa-solid fa-exclamation-circle mr-1"></i>
                            {formik.errors.rePassword}
                          </p>
                        )}
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      id="terms"
                      type="checkbox"
                      className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2 mt-1"
                      required
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-gray-600"
                    >
                      I agree to the{" "}
                      <a
                        href="#"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        Privacy Policy
                      </a>
                    </label>
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
                          Creating Account...
                        </>
                      ) : (
                        <>
                          <i className="fa-solid fa-user-plus mr-2"></i>
                          Create Account
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
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        Sign in
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
