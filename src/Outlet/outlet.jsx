import { Outlet } from "react-router-dom";
import Navbar from "../Components/Home/Navbar.jsx";
import Footer from "../Components/Home/Footer.jsx";
import ScrollToTop from "../ScrollToTop.jsx";
import PageLoader from "../PageLoader.jsx";
import Seo from "../Seo.jsx";

export default function HomeLayout() {
  return (
    <>
      <ScrollToTop />
      <Seo />
      <PageLoader />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
