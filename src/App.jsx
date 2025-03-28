import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/index.jsx";
import { AllProducts } from "./pages/AllProducts/index.jsx";
import { MainPage } from "./pages/MainPage/index.jsx";
import "./styles/global.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/allProducts" element={<AllProducts />} />
          {/*<Route path={} element={<ViewProductPage />} />*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
