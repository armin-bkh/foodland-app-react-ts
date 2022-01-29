import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

interface layoutProps {
  children: React.ReactChild;
}

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
