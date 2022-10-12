import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Components/Home/Home';
import DogsPage from './Components/Dogs/DogsPage';
import Cart from './Components/Cart/Cart';
import Navbar from './Navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from "axios";
import { CartContext } from "./Contexts/CartContext";

function App() {
  const [allDogs, setAllDogs] = useState([]);
  const [myCart, addToCart] = useState([{}]);
  const [total, setTotal] = useState(false);
  useEffect(() => {
    async function getData() {
      const res = await axios.get("/v1/dogs")
      return res;
    }
    getData().then((res) => setAllDogs(res.data));
    getData().catch((err) => console.log(err));
  }, [])
  return (
    <CartContext.Provider value={{ myCart, addToCart, total, setTotal }}>
      <Router>
        <Navbar />
        <div className="page-container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dogs' element={<DogsPage allDogs={allDogs} />} />
            <Route path='/checkout' element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
