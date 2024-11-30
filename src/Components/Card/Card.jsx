import { Link } from 'react-router-dom';
import testImage from '../../assets/images/grocery-banner-2.jpeg';
export default function Card({ productInfo, key }) {
  console.log(productInfo);
  console.log(key);

  return (
    <>
      <div className="card bg-white shadow-md rounded-md overflow-hidden  col-span-12 sm:col-span-6 md:col-span-4  lg:col-span-2  ">
        <div className="group/parent image-card relative cursor-pointer  ">
          <img src={testImage} className="w-full h-48 object-cover" alt="" />
          <ul className="hidden pl-3 justify-center gap-5 flex-col absolute group-hover/parent:flex transition-all duration-500 inset-0 bg-black top-50 ">
            <li>
              <Link to="cart">
                <i className="fa-regular fa-heart text-primary-500 hover:text-primary-600"></i>
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fa-solid fa-cart-shopping text-primary-500 hover:text-primary-600 hover:duration-500 transition-colors"></i>
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fa-regular fa-eye text-primary-500 hover:text-primary-600 duration-500 transition-colors"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="card-body py-5 px-2 space-y-3">
          <header className="header-body ">
            <h2 className="Category text-lg text-primary-500 mb-1">Category</h2>
            <h3 className="namec-category text-xl ">Eos M50</h3>
          </header>
          <footer className="footer-body flex justify-between items-center">
            <p>
              1699 <span className="">EGP</span>
            </p>
            <div className="star">
              <i className="fa-solid fa-star  text-yellow-300"></i>
              <span className="text-slate-500">4.5</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
