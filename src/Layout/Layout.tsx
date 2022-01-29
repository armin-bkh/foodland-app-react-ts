import Header from "../Components/Header/Header";

interface layoutProps {
  children: React.ReactChild;
}

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default Layout;
