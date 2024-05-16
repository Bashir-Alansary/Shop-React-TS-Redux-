import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import { Shop } from './Components/Shop/Shop';
import { Navbar } from './Components/Navbar/Navbar';
import './App.scss';
import { RootState } from './Components/Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import {getItemTotals, getTotal} from './Components/Redux/Slices/shopSlice';
import { useEffect } from 'react';
import { Home } from './Components/Home/Home';
import { Wishlist } from './Components/Wishlist/Wishlist';
import { Product } from './Components/Product/Product';

function App() {
  
  const cart = useSelector((state:RootState) => state.shop.cart);
  const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getItemTotals());
        dispatch(getTotal());
    }, [cart]);

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className='inner'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/wishlist' element={<Wishlist />} />
              <Route path='/product/:id' element={<Product />} />
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
