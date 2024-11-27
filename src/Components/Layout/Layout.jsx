import NavbarWebsite from '../Navbar/NavbarWebsite';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <NavbarWebsite />
      <div className="container py-5">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
