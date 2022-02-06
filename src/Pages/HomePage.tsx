import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomeBg from "../Assets/Images/Hamburger-bro.png";
import useScrollToTop from "../Hooks/scrollToTop";
const HomePage = () => {
  useScrollToTop();
  return (
    <Layout>
      <main className="main grid grid-cols-3 grid-row-3">
        <h1 className="text-5xl lg:text-7xl col-start-1 col-end-3">
          Food Land
        </h1>
        <section className="col-start-1 col-end-4">
          <p className="my-16 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            fugiat consequatur, rerum, amet a animi dolorem excepturi fugit
            aperiam tempore quibusdam molestiae, eveniet nemo maxime! Beatae
            laborum eius placeat officiis!
          </p>
          <Link to={"/foods"} className="homePageButton">
            Menu...
          </Link>
        </section>
        <section className="flex col-start-3 col-end-4 row-start-1 items-start lg:items-end">
          <img className="w-full" src={HomeBg} alt="bakgroung" />
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
