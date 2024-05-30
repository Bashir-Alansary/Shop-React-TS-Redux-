import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Cart} from './Components/Cart/Cart';
import { Navbar } from './Components/Navbar/Navbar';
import './App.scss';
import { RootState } from './Components/Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import {getItemTotals} from './Components/Redux/Slices/shopSlice';
import { useEffect } from 'react';
import { Home } from './Components/Home/Home';
import { Wishlist } from './Components/Wishlist/Wishlist';
import { Product } from './Components/Product/Product';
import { Compare } from './Components/Compare/Compare';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Shop from './Components/Shop/Shop';
import womenBanner from "./Components/Assets/images/women_banner.png";
import menBanner from "./Components/Assets/images/men_banner.png";
import kidsBanner from "./Components/Assets/images/kids_banner.png";
import shopBanner from "./Components/Assets/images/shop_banner.png";

function App() {
  
  const cart = useSelector((state:RootState) => state.shop.cart);
  const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getItemTotals());
    }, [cart]);

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className='inner'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path="/shop" element={<Shop category = "Shop" img = {shopBanner} />}  />
              <Route path="/men" element={<Shop category = "Men" img = {menBanner}/>} />
              <Route path="/women" element={<Shop category = "Women" img = {womenBanner}/>} />
              <Route path="/kids" element={<Shop category = "Kids" img = {kidsBanner} />} />
              <Route path='/wishlist' element={<Wishlist />} />
              <Route path='/compare' element={<Compare />} />
              <Route path='/login' element={<Login />} />
              <Route path='/product/:id' element={<Product />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
