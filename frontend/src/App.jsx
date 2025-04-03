import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminHomePage from "./pages/AdminHomePage";
import UserManagement from "./components/Admin/UserManagement";
import ProductManagement from "./components/Admin/ProductManagement";
import EditProductPage from "./components/Admin/EditProductPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          {/* User Layout */}
          <Route path="/" element={<UserLayout />}>
            {/*<Home />*/}
            <Route index element={<Home />}></Route>
            {/* Login  */}
            <Route path="login" element={<Login />}></Route>
            {/* Register */}
            <Route path="register" element={<Register />}></Route>
            {/* Profile Page */}
            <Route path="profile" element={<Profile />}></Route>
            {/* Collection Page */}
            <Route
              path="collections/:collection"
              element={<CollectionPage />}
            ></Route>
            {/* Product Details */}
            <Route path="product/:id" element={<ProductDetails />}></Route>
            {/* Checkout Page */}
            <Route path="checkout" element={<Checkout />}></Route>
            {/* Order Confirmation Page */}
            <Route
              path="order-confirmation"
              element={<OrderConfirmationPage />}
            ></Route>
            <Route path="order/:id" element={<OrderDetailsPage />}></Route>
            <Route path="/my-orders" element={<MyOrdersPage />}></Route>
          </Route>

          {/* Admin Layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHomePage />}></Route>
            <Route path="users" element={<UserManagement />}></Route>
            <Route path="products" element={<ProductManagement />}></Route>
            <Route path="products/:id/edit" element={<EditProductPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
