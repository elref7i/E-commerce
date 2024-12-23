import NavbarWebsite from '../Navbar/NavbarWebsite';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
export default function Layout() {
  return (
    <>
      <NavbarWebsite />
      <div className="container min-h-[60vh] pb-20 pt-36 sm:pt-28 ">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
