import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/User.context';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import Loading from '../../Components/Loading/Loading';

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
      {orders ? (
        <section className="space-y-5">
          {orders.map((order) => (
            <div
              key={order.id}
              className="order p-5 border-2 border-solid border-slate-200 rounded-lg"
            >
              <header className="flex items-center justify-between mb-8 bg-slate-50 p-2 shadow-md">
                <h3 className="text-xl pl-2 text-slate-500">
                  order ID{' '}
                  <span className="font-bold text-black">#{order.id}</span>
                </h3>
                <div className="status text-white flex gap-2 items-center *:font-cairo">
                  {order.isPaid ? (
                    <h4 className="bg-primary-600 flex items-center p-2 rounded-md w-fit">
                      <i className="fa-solid fa-check  mr-2"></i>
                      تم الدفع <span></span>
                    </h4>
                  ) : (
                    <h4 className="bg-red-600 p-2 rounded-md w-fit">
                      غير مدفوع
                    </h4>
                  )}
                  {order.isDelivered ? (
                    <h4 className="bg-blue-600 p-2 rounded-md w-fit flex items-center">
                      <i className="fa-solid fa-truck-fast mr-2 animate-pulse"></i>
                      تم التوصيل
                    </h4>
                  ) : (
                    <h4 className="bg-blue-600 p-2 rounded-md w-fit flex items-center ">
                      <i className="fa-solid fa-hourglass-start mr-2"></i>
                      قيد التوصيل
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
                      className="w-full h-48 lg:h-60 object-contain lg:object-cover   mb-3 "
                      src={cart.product.imageCover}
                      alt={cart.product.title}
                    />
                    <div className="body-card px-3 py-1 space-y-[1px]">
                      <h2 className="font-bold">{cart.product.title} </h2>
                      <h3 className="price text-primary-500">
                        {cart.price} L.E
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="total-price pl-2 text-lg">
                Total order Price is{' '}
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
