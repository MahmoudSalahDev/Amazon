import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const hideNavbarAndFooter =
    location.pathname === "/register" || location.pathname === "/login";
  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}
      <div className="min-h-[80vh]">
        <Outlet />
      </div>
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}
