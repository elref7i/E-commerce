import amzonePay from "../../assets/images/amazon-pay.png";
import masrerCard from "../../assets/images/mastercard.webp";
import payPal from "../../assets/images/paypal.png";
import americanExpress from "../../assets/images/American-Express-Color.png";
import getGooglePlay from "../../assets/images/get-google-play.png";
import getAppleStore from "../../assets/images/get-apple-store.png";
import imageloadin from "../../assets/images/Animation - 1734929967700.gif";
import freshcCartLogo from "../../assets/images/freshcart-logo.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src={freshcCartLogo}
                className="h-8 w-auto mb-4 filter brightness-0 invert"
                alt="FreshCart Logo"
              />
              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                Your trusted online shopping destination. We bring you quality
                products with fast delivery and excellent customer service.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">
                Get the FreshCart App
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                We&apos;ll send you a link to download the app on your phone.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control flex-1 px-4 py-2 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-primary-500"
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-md whitespace-nowrap"
                >
                  Send Link
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/help"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/electronics"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Electronics
                </a>
              </li>
              <li>
                <a
                  href="/clothing"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Clothing
                </a>
              </li>
              <li>
                <a
                  href="/home"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home & Garden
                </a>
              </li>
              <li>
                <a
                  href="/sports"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sports
                </a>
              </li>
              <li>
                <a
                  href="/books"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Books
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods & App Download */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Payment Methods */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Payment Partners</h4>
              <div className="flex flex-wrap gap-4 items-center">
                <img
                  src={amzonePay}
                  alt="Amazon Pay"
                  className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
                <img
                  src={americanExpress}
                  alt="American Express"
                  className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
                <img
                  src={masrerCard}
                  alt="Mastercard"
                  className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
                <img
                  src={payPal}
                  alt="PayPal"
                  className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* App Download */}
            <div>
              <h4 className="text-lg font-semibold mb-4">
                Get deliveries with FreshCart
              </h4>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="block"
                >
                  <img
                    src={getAppleStore}
                    alt="Download on App Store"
                    className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </a>
                <a
                  href="#"
                  className="block"
                >
                  <img
                    src={getGooglePlay}
                    alt="Get it on Google Play"
                    className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <h3 className="text-xl font-bold text-primary-400">
                  Follow Us
                </h3>
                <img
                  src={imageloadin}
                  className="w-6 h-6"
                  alt="Animation"
                />
              </div>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300"
                >
                  <i className="fab fa-facebook-f text-lg"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500 transition-all duration-300"
                >
                  <i className="fab fa-instagram text-lg"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-black transition-colors duration-300"
                >
                  <i className="fa-brands fa-x-twitter text-lg"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-700 transition-colors duration-300"
                >
                  <i className="fab fa-linkedin-in text-lg"></i>
                </a>
              </div>
            </div>

            <div className="text-center text-gray-400 text-sm">
              <p>&copy; 2024 FreshCart. All rights reserved.</p>
              <p className="mt-1">Made with ❤️ for our customers</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
