import { Route, Routes, useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./Routes/Routes";
import { routesType } from './Routes/Routes.type';

function App() {
  // const routes = useRoutes(routes);
  return (
    <div>
      <Routes>{routes.map(route => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}</Routes>
    </div>
  );
}

export default App;
