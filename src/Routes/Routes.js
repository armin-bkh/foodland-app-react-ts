import CheckoutPage from "../Pages/CheckoutPage";
import FoodsPage from "../Pages/FoodsPage";
import HomePage from "../Pages/HomePage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/foods", element: <FoodsPage /> },
  { path: "/checkout", element: <CheckoutPage /> },
];

export default routes;
