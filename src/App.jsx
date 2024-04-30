import { useState } from "react";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Products from "./pages/products";
import Pending from "./pages/pending";
import AuthRequiredRoute from "./protected_route/AuthRoute";
import Option from "./pages/option";
import ProductPage from "./pages/inprod";
import ProdList from "./pages/prodlist";
import DashBoard from "./pages/farmers_dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" relative  h-full   font-jakata w-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/signup" />
          <Route element={<ProdList />} path="/products" />
          <Route element={<Pending />} path="/pending" />
          <Route element={<AuthRequiredRoute />} path="/auth" />
          <Route element={<Option />} path="/option" />
          <Route element={<ProductPage />} path="/prodets" />
          <Route
            element={
              <AuthRequiredRoute>
                <DashBoard />
              </AuthRequiredRoute>
            }
            path="/user/dashboard"
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
