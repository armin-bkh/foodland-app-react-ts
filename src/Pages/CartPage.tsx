import CartList from "../Components/Cart/CartList/CartList";
import Layout from "../Layout/Layout";

const CartPage = () => {
  return (
    <Layout>
      <main className="main">
        <CartList />
      </main>
    </Layout>
  );
};

export default CartPage;
