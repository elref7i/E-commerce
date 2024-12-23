import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/User.context';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import Loading from '../../Components/Loading/Loading';
import { Helmet } from 'react-helmet';

export default function Orders() {
  const { token } = useContext(UserContext);
  const [orders, setOrders] = useState(null);
  //* return payload
  let { id } = jwtDecode(token);

  async function getUserOrder() {
    //! User ID => Token
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
        method: 'GET',
      };
      let { data } = await axios.request(options);
      setOrders(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUserOrder();
  }, []);
  return (
    <>
      <Helmet>
        <title>Orders - Freshcart</title>
        <meta
          name="description"
          content="Track your orders and manage your purchases with ease at Freshcart."
        />
        <meta
          name="keywords"
          content="Orders, Freshcart, Shopping, Order History, Online Store"
        />
        <meta property="og:title" content="Orders - Freshcart" />
        <meta
          property="og:description"
          content="View and manage all your orders in one place. Check your order status and history on Freshcart."
        />
      </Helmet>
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-primary-600 border-b-4  pb-4 ">
        <i className="fa-solid fa-box text-4xl animate-bounce"></i> &nbsp; Order
        History
      </h1>
      {orders ? (
        <section className="space-y-5">
          {orders.map((order) => (
            <div
              key={order.id}
              className="order p-5 border-2 border-solid border-primary-200 rounded-lg"
            >
              <header className="flex flex-wrap gap-4 sm:gap-0 items-center justify-between mb-8 bg-slate-50 p-2 shadow-md">
                <h3 className="text-xl font-bold pl-2 text-primary-500">
                  Order ID :{' '}
                  <span className="font-bold text-black bg-gray-200 px-2 py-1 rounded-md">
                    {' '}
                    #{order.id}
                  </span>
                </h3>
                <div className="status text-white flex gap-2 items-center font-cairo">
                  {order.isPaid ? (
                    <h4 className="bg-primary-600 flex items-center p-2 rounded-md w-fit">
                      <i className="fa-solid fa-circle-check mr-2"></i>
                      Paid
                    </h4>
                  ) : (
                    <h4 className="bg-red-600 p-2 rounded-md w-fit flex items-center">
                      <i className="fa-solid fa-circle-xmark mr-2"></i>
                      Not Paid
                    </h4>
                  )}
                  {order.isDelivered ? (
                    <h4 className="bg-blue-600 p-2 rounded-md w-fit flex items-center">
                      <i className="fa-solid fa-truck mr-2 animate-pulse"></i>
                      Delivered
                    </h4>
                  ) : (
                    <h4 className="bg-blue-400 p-2 rounded-md w-fit flex items-center">
                      <i className="fa-solid fa-hourglass-half mr-2"></i>
                      In Transit
                    </h4>
                  )}
                </div>
              </header>
              <div className="all-product-order gap-3 grid grid-cols-12 mb-5">
                {order.cartItems.map((cart) => (
                  <div
                    key={cart._id}
                    className="card shadow-md rounded-md overflow-hidden col-span-12 md:col-span-6 lg:col-span-2"
                  >
                    <img
                      className="w-full  h-48 lg:h-60 object-contain lg:object-cover   mb-3 "
                      src={cart.product.imageCover}
                      alt={cart.product.title}
                    />
                    <div className="body-card px-3 py-2 space-y-[2px]">
                      <h2 className="font-bold line-clamp-1">
                        {cart.product.title}{' '}
                      </h2>
                      <h3 className="price text-lg font-bold text-primary-500">
                        {cart.price} L.E
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="total-price pl-2 text-lg">
                Total Order Price :{' '}
                <span className="text-primary-500 font-bold">
                  {order.totalOrderPrice}
                </span>{' '}
                L.E
              </div>
            </div>
          ))}
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}
