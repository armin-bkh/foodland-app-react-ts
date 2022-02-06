import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <main className="main flex-center flex-col">
        <p className="text-3xl lg:text-5xl mb-10">not found page...</p>
        <p className="text-5xl lg:text-7xl text-red-400">404!</p>
        <Link className="homePageButton mr-0 mt-10" to="/">
          back to home page
        </Link>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
