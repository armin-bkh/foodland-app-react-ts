import FoodsList from "../Components/FoodsList/FoodsList";
import Layout from "../Layout/Layout";

const FoodsPage = () => {
  return (
    <Layout>
      <main className="main">
        <FoodsList />
      </main>
    </Layout>
  );
};

export default FoodsPage;
