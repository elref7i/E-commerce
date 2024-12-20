import { Link } from 'react-router-dom';
import notFoundImage from '../../assets/images/Oops! 404 Error with a broken robot-pana.png';
import { Helmet } from 'react-helmet';
export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Freshcart</title>
        <meta
          name="description"
          content="The page you are looking for does not exist. Please check the URL or go back to the homepage."
        />
        <meta
          name="keywords"
          content="Not Found, Page Not Found, Freshcart, 404, Error Page"
        />
        <meta property="og:title" content="Page Not Found - Freshcart" />
        <meta
          property="og:description"
          content="The page you are looking for is not available. Check the URL or return to Freshcart's homepage."
        />
      </Helmet>
      <div className="container flex flex-col items-center justify-center">
        <img src={notFoundImage} className="size-[450px]" alt="" />
        <Link
          to="/"
          className="text-primary-500 hover:underline w-fit block mx-auto"
        >
          Back To Home
          <span>
            <i className="fa-solid ml-2 fa-arrow-right"></i>
          </span>
        </Link>
      </div>
    </>
  );
}
