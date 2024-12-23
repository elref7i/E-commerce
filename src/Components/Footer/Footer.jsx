import amzonePay from '../../assets/images/amazon-pay.png';
import masrerCard from '../../assets/images/mastercard.webp';
import payPal from '../../assets/images/paypal.png';
import americanExpress from '../../assets/images/American-Express-Color.png';
import getGooglePlay from '../../assets/images/get-google-play.png';
import getAppleStore from '../../assets/images/get-apple-store.png';
import imageloadin from '../../assets/images/Animation - 1734929967700.gif';

export default function Footer() {
  return (
    <>
      <footer className="py-8 shadow-md shadow-current bg-gray-100">
        <div className="container">
          <header className="mb-6 space-y-2">
            <h3 className="text-xl">Get the FreshCart app</h3>
            <p className="text-slate-400">
              We will send you a link, open it on Your phone to download the
              app.
            </p>
          </header>
          <form className="contact-email flex flex-wrap gap-4 flex-wra justify-center  items-center relative before:absolute before:w-full before:h-[2px] before:bg-gray-200 before:-bottom-8  mb-5 ">
            <div className="email-input flex-1">
              <input
                type="email"
                className="form-control w-full border-2 rounded-md min-w-48"
                placeholder="Email.."
              />
            </div>
            <button
              className="btn  px-4 py-2 bg-primary-500 hover:bg-primary-600"
              type="submit"
            >
              Share App Link
            </button>
          </form>
          <div className="py-12 flex flex-col lg:flex-row gap-5  items-center justify-between">
            <div className="payment flex-wrap justify-center flex gap-3 items-center">
              <h4>Payment Pathers</h4>
              <ul className="payment-way flex gap-3 items-center">
                <li className="w-8">
                  <a href="#" target="_blank" alt="">
                    <img className="w-full" src={amzonePay} alt="" />
                  </a>
                </li>
                <li className="w-8">
                  <a href="#" target="_blank" alt="">
                    <img src={americanExpress} alt="" />
                  </a>
                </li>
                <li className="w-8">
                  <a href="#" target="_blank" alt="">
                    <img src={masrerCard} alt="" />
                  </a>
                </li>
                <li className="w-8">
                  <a href="#" target="_blank" alt="">
                    <img src={payPal} alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="download-way flex gap-3 flex-wrap justify-center items-center">
              <h4>Get devliveries with FreshCart</h4>
              <ul className="payment-way flex gap-3 items-center  ">
                <li className="w-24">
                  <a href="#" target="_blank" alt="">
                    <img className="w-full" src={getAppleStore} alt="" />
                  </a>
                </li>
                <li className="w-24">
                  <a href="#" target="_blank" alt="">
                    <img className="w-full" src={getGooglePlay} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <section className="social-media text-center  space-y-3">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-center text-primary-500 font-extrabold text-3xl">
                Follow Us
              </h2>
              <img src={imageloadin} className="w-8" alt="" />
            </div>
            <div className="social-icons flex gap-4 *:text-xl  w-fit mx-auto">
              <a
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
                className="size-9 flex items-center justify-center rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400  hover:text-white duration-300 transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
                className="size-9 flex items-center justify-center rounded-full bg-slate-200  hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500  hover:text-white duration-300 transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                aria-label="Twitter"
                className="size-9 flex items-center justify-center rounded-full bg-slate-200 hover:bg-black hover:text-white duration-300 transition-colors"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
