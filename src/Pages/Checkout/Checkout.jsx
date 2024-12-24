import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/User.context';
import axios from 'axios';
import { CartContext } from '../../context/Cart.context';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
export default function Checkout() {
  const { token } = useContext(UserContext);
  const { cartInfo, getProductToCart } = useContext(CartContext);
  const [paymentWay, setPaymentWay] = useState(null);
  const navigate = useNavigate();

  const phoneRegx = /^(02)?01[0125][0-9]{8}/;
  async function createCashOrder(values) {
    let toastLoading = toast.loading('Watting');
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/orders/${cartInfo.cartId}`,
        method: 'POST',
        headers: {
          token,
        },
        data: values,
      };
      let { data } = await axios.request(options);
      console.log(data);

      if (data.status === 'success') {
        toast.success(data.status);
        getProductToCart();
        setTimeout(() => {
          navigate('/allorders');
        }, 2000);
      }
    } catch (error) {
      toast.success(error.response.data.message);
      console.log(error);
    } finally {
      toast.dismiss(toastLoading);
    }
  }
  async function createOnlineOrder(values) {
    let toastLoading = toast.loading('Watting');
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartInfo.cartId}?url=${location.origin}`,
        method: 'POST',
        headers: {
          token,
        },
        data: values,
      };
      let { data } = await axios.request(options);
      console.log(data);

      if (data.status === 'success') {
        toast.success('Go to stripe');
        getProductToCart();
        setTimeout(() => {
          location.href = data.session.url;
        }, 2000);
      }
    } catch (error) {
      toast.success(error.response.data.message);
      console.log(error);
    } finally {
      toast.dismiss(toastLoading);
    }
  }
  const validationSchema = Yup.object({
    shippingAddress: Yup.object().shape({
      city: Yup.string()
        .required('* City is required')
        .min(2, '* City must be at least 2 characters long'),
      phone: Yup.string()
        .matches(phoneRegx, '* Phone must be 10 digits')
        .required('* Phone is required'),
      details: Yup.string()
        .required('* Details are required')
        .min(10, '* Details must be at least 10 characters long'),
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
    onSubmit: (values) => {
      if (paymentWay === 'cash') createCashOrder(values);
      else createOnlineOrder(values);
    },
  });
  const isPhoneTouchedAndError =
    formik.touched.shippingAddress?.phone &&
    formik.errors.shippingAddress?.phone;
  const isCityTouchedAndError =
    formik.touched.shippingAddress?.city && formik.errors.shippingAddress?.city;
  const isDetailsTouchedAndError =
    formik.touched.shippingAddress?.details &&
    formik.errors.shippingAddress?.details;

  return (
    <>
      <Helmet>
        <title>Checkout - Freshcart</title>
        <meta
          name="description"
          content="Complete your purchase and choose between online payment or cash on delivery at Freshcart."
        />
        <meta
          name="keywords"
          content="Checkout, Freshcart, Online Payment, Cash on Delivery, Shopping"
        />
        <meta property="og:title" content="Checkout - Freshcart" />
        <meta
          property="og:description"
          content="Finish your shopping experience and choose your preferred payment method at Freshcart."
        />
      </Helmet>
      <section>
        <h1 className="font-bold text-2xl">Shipping Address</h1>
        <form className="py-5 space-y-5" onSubmit={formik.handleSubmit}>
          <div className="city">
            <input
              className="border-solid border-primary-600 focus:ring-0 focus:shadow-none focus:outline-none focus:border-primary-600 border-b-2 w-full"
              type="text"
              name="shippingAddress.city"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.shippingAddress.city}
              placeholder="City"
            />
            {isCityTouchedAndError && (
              <p className="text-red-600 font-medium">
                {formik.errors.shippingAddress.city}
              </p>
            )}
          </div>
          <div className="phone">
            <input
              className="border-solid border-primary-600 focus:ring-0 border-b-2 w-full focus:outline-none focus:border-primary-600 "
              type="tel"
              name="shippingAddress.phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.shippingAddress.phone}
              placeholder="Phone"
            />
            {isPhoneTouchedAndError && (
              <p className="text-red-600 font-medium">
                {formik.errors.shippingAddress.phone}
              </p>
            )}
          </div>

          <div className="details">
            <textarea
              className="border-solid border-primary-600 focus:ring-0 border-b-2 w-full focus:outline-none focus:border-primary-600 "
              name="shippingAddress.details"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.shippingAddress.details}
              placeholder="Details"
            ></textarea>
            {isDetailsTouchedAndError && (
              <p className="text-red-600 font-medium">
                {formik.errors.shippingAddress.details}
              </p>
            )}
          </div>
          <div className="btns flex gap-3 items-center flex-wrap  ">
            <button
              onClick={() => {
                setPaymentWay('cash');
                console.log(paymentWay);
              }}
              type="submit"
              className="btn bg-blue-600 hover:bg-blue-700 duration-300 transition-colors px-3 py-2"
            >
              Cash Order
            </button>
            <button
              onClick={() => {
                setPaymentWay('online');
                console.log(paymentWay);
              }}
              type="submit"
              className="btn bg-primary-600 hover:bg-primary-700 duration-300 transition-colors px-3 py-2"
            >
              Online Payment
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
