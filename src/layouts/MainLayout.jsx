import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthToast from "../components/AuthToast";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <AuthToast />
    </>
  );
}

export default MainLayout;