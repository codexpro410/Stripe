import NavBar from './components/NavBar';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route, BrowserRouter} from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import Sucess from './components/Sucess';
import Cancel from './components/Cancel';
import { useState } from 'react';
import { Inspired } from './components/Inspired';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
      setCartItems([...cartItems, item]);
  };
  return (
    <>
     <BrowserRouter>
     <NavBar cartCount={cartItems.length}/>
     <Routes>
      <Route  path='/' element={<Home addToCart={addToCart}/>}/>
      <Route  path='/cart' element={<CartDetails cartItems={cartItems} setCartItems={setCartItems} />}/>
      <Route  path='/sucess' element={<Sucess />}/>
      <Route  path='/inspired' element={<Inspired />}/>
      <Route  path='/cancel' element={<Cancel />}/>
     </Routes>
     <Toaster />
     </BrowserRouter>
    </>
  );
}

export default App;
