import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from 'sonner';
import Login from "./pages/Login";

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
          </Route>
          <Route>{/*AdminLayout*/}</Route>

        </Routes>

      </BrowserRouter>
     
    </div>
  );
};

export default App;
