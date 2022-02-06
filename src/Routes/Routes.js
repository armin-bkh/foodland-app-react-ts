import CartPage from "../Pages/CartPage";
import FoodPage from "../Pages/FoodPage";
import FoodsPage from "../Pages/FoodsPage";
import HomePage from "../Pages/HomePage";
import NotFoundPage from "../Pages/NotFoundPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/foods", element: <FoodsPage /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/foods/food-:id", element: <FoodPage /> },
  { path: "*", element: <NotFoundPage /> },
];

export default routes;
