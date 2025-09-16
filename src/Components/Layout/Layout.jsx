import NavbarWebsite from "../Navbar/NavbarWebsite";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavbarWebsite />
      <main className="flex-1 container-custom pt-20 sm:pt-24 pb-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
