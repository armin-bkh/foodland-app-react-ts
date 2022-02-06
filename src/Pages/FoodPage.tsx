
import FoodDetail from "../Components/FoodDetail/FoodDetail";
import useScrollToTop from "../Hooks/scrollToTop";
import Layout from "../Layout/Layout";

const FoodPage = () => {
  useScrollToTop();
  return (
    <Layout>
      <main className="main">
        <FoodDetail />
      </main>
    </Layout>
  );
};

export default FoodPage;
