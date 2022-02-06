import Filter from "../Components/FIlter/Filter";
import FoodsList from "../Components/Menu/FoodsList/FoodsList";
import Menu from "../Components/Menu/Menu";
import useScrollToTop from "../Hooks/scrollToTop";
import Layout from "../Layout/Layout";

const FoodsPage = () => {
  useScrollToTop();
  return (
    <Layout>
      <main className="main grid grid-cols-1 md:grid-cols-5 gap-5">
        <Menu />
      </main>
    </Layout>
  );
};

export default FoodsPage;
