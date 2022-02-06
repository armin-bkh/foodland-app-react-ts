import CartList from "../Components/Cart/CartList/CartList";
import useScrollToTop from "../Hooks/scrollToTop";
import Layout from "../Layout/Layout";

const CartPage = () => {
  useScrollToTop();
  return (
    <Layout>
      <main className="main">
        <CartList />
      </main>
    </Layout>
  );
};

export default CartPage;
