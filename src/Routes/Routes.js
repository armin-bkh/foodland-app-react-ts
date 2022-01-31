import CheckoutPage from "../Pages/CheckoutPage";
import FoodsPage from "../Pages/FoodsPage";
import HomePage from "../Pages/HomePage";
import NotFoundPage from "../Pages/NotFoundPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/foods", element: <FoodsPage /> },
  { path: "/checkout", element: <CheckoutPage /> },
  { path: "*", element: <NotFoundPage /> },
];

export default routes;
