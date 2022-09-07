import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Brandpage from "./pages/Brandspage";
import Allcategories from "./pages/Categoriespage";
import Main from "./pages/Main/Main";
import Singleproductpage from "./pages/Main/[id]";
import Categoriespage from "./pages/Main/[slug]";
import Result from "./pages/Result";
import Head from "./parts/Head";

function App() {
  return (
    <BrowserRouter>
      <Head />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/categories/:slug" element={<Categoriespage />} />
        <Route exact path="/product/:id" element={<Singleproductpage />} />
        <Route exact path="/categoriespage" element={<Allcategories />} />
        <Route exact path="/brandspage" element={<Brandpage />} />
        <Route exact path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
