import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProductListPage from "./pages/ProductListPage";
import Productsdetail from "./pages/Productsdetail";
import AxiosAPI from "./pages/Axios";

import "./App.css"

function App() {
  return(
      <div>
    <nav className="p-4 bg-gray-500 text-white">
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products" className="ml-4">Products</Link>
      <Link to="/axios" className="ml-4">Axios</Link>
    </nav>
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="*" element={<div>404 Not Found</div>}/>
        <Route path="/products" element={<ProductListPage/>}/>
        <Route path="/products/:productId" element={<Productsdetail/>}/>
        <Route path="/axios" element={<AxiosAPI/>}/>
      </Routes>
    </main>
  </div>
  )
}

export default App;