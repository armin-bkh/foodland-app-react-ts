import Filter from "../Components/FIlter/Filter";
import FoodsList from "../Components/FoodsList/FoodsList";
import useScrollToTop from "../Hooks/scrollToTop";
import Layout from "../Layout/Layout";

const FoodsPage = () => {
  useScrollToTop();
  return (
    <Layout>
      <main className="main grid grid-cols-1 md:grid-cols-5 gap-5">
        <section className="md:col-span-2 xl:col-span-1 sticky top-24">
          <Filter />
        </section>
        <section className="md:col-span-3 xl:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <FoodsList />
        </section>
      </main>
    </Layout>
  );
};

export default FoodsPage;
