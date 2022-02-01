import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartProvider from "./Components/Providers/CartProvider";
import ToastProvider from "./Components/Providers/ToastProvider";
import routes from "./Routes/Routes";

function App() {
  return (
    <ToastProvider autoDisMiss position="top-right">
      <CartProvider>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </CartProvider>
    </ToastProvider>
  );
}

export default App;
