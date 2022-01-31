import CheckoutPage from "../Pages/CheckoutPage";
import FoodPage from "../Pages/FoodPage";
import FoodsPage from "../Pages/FoodsPage";
import HomePage from "../Pages/HomePage";
import NotFoundPage from "../Pages/NotFoundPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/foods", element: <FoodsPage /> },
  { path: "/checkout", element: <CheckoutPage /> },
  { path: "/foods/food-:id", element: <FoodPage /> },
  { path: "*", element: <NotFoundPage /> },
];

export default routes;
