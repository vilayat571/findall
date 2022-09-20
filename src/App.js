import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Singleproductpage from "./pages/Main/[id]";
import Categoriespage from "./pages/Main/[slug]";
import Result from "./pages/Result";
import Signin from "./pages/Login/Signin";
import About from "./pages/About/About";
import Myaccount from "./pages/Account/Myaccount";
import Mycart from "./pages/Cart/Mycart";
import Aboutcontact from './pages/About/Aboutcontact';
import Signup from "./pages/Signup/Signup";
import Userdetails from "./pages/Account/Userdetails";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/categories/:slug" element={<Categoriespage />} />
        <Route path="/product/:id" element={<Singleproductpage />} />
        <Route path="/about/contact" element={<Aboutcontact />} />
        <Route path="/result" element={<Result />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/myacount" element={<Myaccount />} />
        <Route path="/myaccount" element={<Myaccount />} />
        <Route path="/mycart" element={<Mycart />} />
        <Route path="/account/details" element={<Userdetails />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
