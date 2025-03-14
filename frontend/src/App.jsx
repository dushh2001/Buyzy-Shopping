import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from 'sonner';
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Toaster position="top-right" />
        <Routes>
          <Route path="/" element = {<UserLayout/>}>
            {/*<Home />*/}
            <Route index element={<Home />}></Route>
            {/* Login  */}
            <Route path="login" element={<Login />}></Route>
            {/* Register */}
            <Route path="register" element={<Register />}></Route>
            {/* Product Details */}

          </Route>
          <Route>{/*AdminLayout*/}</Route>

        </Routes>

      </BrowserRouter>
     
    </div>
  );
};

export default App;
