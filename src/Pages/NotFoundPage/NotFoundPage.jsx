import { Link } from 'react-router-dom';
import notFoundImage from '../../assets/images/Oops! 404 Error with a broken robot-pana.png';
import { Helmet } from 'react-helmet';
export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Not Fouud Page </title>
        <meta
          name="Not Fouud Page Page Website"
          content="Freshcart | Not Fouud Page Page"
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
