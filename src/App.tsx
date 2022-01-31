import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartProvider from "./Components/Providers/CartProvider";
import routes from "./Routes/Routes";
import { routesType } from "./Routes/Routes.type";

function App() {
  return (
    <CartProvider>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </CartProvider>
  );
}

export default App;
