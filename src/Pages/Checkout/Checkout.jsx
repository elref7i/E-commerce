import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/User.context';
import axios from 'axios';
import { CartContext } from '../../context/Cart.context';
import toast from 'react-hot-toast';
// import * as Yup from 'yup';
export default function Checkout() {
  const { token } = useContext(UserContext);
  const { cartInfo, getProductToCart } = useContext(CartContext);
  const [paymentWay, setPaymentWay] = useState(null);
  const navigate = useNavigate();

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
  // const validationSchema = Yup.object({
  //   'shippingAddress.details': Yup.string()
  //     .required('please enter hte Details')
  //     .min(20, 'zawd taney')
  //     .max(40, 'bora7a ya 3am'),
  //   'shippingAddress.phone': Yup.string()
  //     .required('please enter hte Phone')
  //     .matches(/^(02)?01[0125][0-9]{8}/, 'error'),
  //   'shippingAddress.city': Yup.string()
  //     .required('please enter hte City')
  //     .min(3, 'error City')
  //     .max(15, 'error City'),
  // });
  const formik = useFormik({
    initialValues: {
      shippingAddress: {
        details: '',
        phone: '',
        city: '',
      },
    },
    // validationSchema,
    onSubmit: (values) => {
      if (paymentWay === 'cash') createCashOrder(values);
      else createOnlineOrder(values);
    },
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
            {/* {formik.errors['shippingAddress.city'] &&
            formik.touched.shippingAddress.city ? (
              <p className="text-red-600 font-medium">
                {formik.errors['shippingAddress.city']}
              </p>
            ) : (
              ''
            )} */}
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
            {/* {formik.errors['shippingAddress.phone'] &&
            formik.touched.shippingAddress.phone ? (
              <p className="text-red-600 font-medium">
                {formik.errors['shippingAddress.phone']}
              </p>
            ) : (
              ''
            )} */}
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
            {/* {formik.errors['shippingAddress.details'] &&
            formik.touched.shippingAddress.details ? (
              <p className="text-red-600 font-medium">
                {formik.errors['shippingAddress.details']}
              </p>
            ) : (
              ''
            )} */}
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
