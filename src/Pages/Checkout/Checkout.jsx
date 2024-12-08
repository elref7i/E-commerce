import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
export default function Checkout() {
  function a7a(values) {
    console.log(values);
  }
  const validationSchema = Yup.object({
    shippingAddress: Yup.object({
      details: Yup.string()
        .required('please enter hte Details')
        .min(20, 'a7a da kolo')
        .max(40, 'bora7a ya 3am'),
      phone: Yup.string()
        .required('please enter hte Phone')
        .matches(/^(02)?01[0125][0-9]{8}/, 'error'),
      city: Yup.string()
        .required('please enter hte Details')
        .min(3, 'error City')
        .max(15, 'error City'),
    }),
  });
  const formik = useFormik({
    initialValues: {
      shippingAddress: {
        details: '',
        phone: '',
        city: '',
      },
    },
    validationSchema,
    onSubmit: a7a,
  });
  return (
    <>
      <section>
        <h1 className="font-bold text-2xl">Shipping Address</h1>
        <form className="py-5 space-y-5" onSubmit={formik.handleSubmit}>
          <div className="city">
            <input
              className="form-control border-b-2 w-full"
              type="text"
              name="shippingAddress.city"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.shippingAddress.city}
              placeholder="City"
            />
            {formik.errors.shippingAddress?.city &&
            formik.touched.shippingAddress.city ? (
              <p className="text-red-600 font-medium">
                {formik.errors.shippingAddress.city}
              </p>
            ) : (
              ''
            )}
          </div>
          <div className="phone">
            <input
              className="form-control border-b-2 w-full"
              type="tel"
              name="shippingAddress.phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.shippingAddress.phone}
              placeholder="Phone"
            />
            {formik.errors.shippingAddress?.phone &&
            formik.touched.shippingAddress.phone ? (
              <p className="text-red-600 font-medium">
                {formik.errors.shippingAddress.phone}
              </p>
            ) : (
              ''
            )}
          </div>

          <div className="details">
            <textarea
              className="form-control border-b-2 w-full"
              name="shippingAddress.details"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.shippingAddress.details}
              placeholder="Details"
            ></textarea>
            {formik.errors.shippingAddress?.details &&
            formik.touched.shippingAddress.details ? (
              <p className="text-red-600 font-medium">
                {formik.errors.shippingAddress.details}
              </p>
            ) : (
              ''
            )}
          </div>
          <div className="btns flex gap-3 items-center flex-wrap  ">
            <button
              type="submit"
              className="btn bg-blue-600 hover:bg-blue-700 duration-300 transition-colors px-3 py-2"
            >
              Cash Order
            </button>
            <Link
              type="submit"
              className="btn bg-primary-600 hover:bg-primary-700 duration-300 transition-colors px-3 py-2"
            >
              Online Payment
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}
