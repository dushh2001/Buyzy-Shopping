import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<UserLayout/>}>
            {/*<Home />*/}
            <Route index element={<Home />}></Route>
          </Route>
          <Route>{/*AdminLayout*/}</Route>

        </Routes>

      </BrowserRouter>
     
    </div>
  );
};

export default App;
