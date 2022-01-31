import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomeBg from "../Assets/SVG/hamburger-animate.svg";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <main className="main">
        <h1 className="text-5xl lg:text-7xl">Food Land</h1>
        <section>
          {/* <img src={HomeBg} alt="bakgroung" /> */}
        </section>
        <p className="my-16 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla fugiat
          consequatur, rerum, amet a animi dolorem excepturi fugit aperiam
          tempore quibusdam molestiae, eveniet nemo maxime! Beatae laborum eius
          placeat officiis!
        </p>
        <button
          type="button"
          onClick={() => navigate("/foods")}
          className="homePageButton"
        >
          Reserve...
        </button>
      </main>
    </Layout>
  );
};

export default HomePage;
