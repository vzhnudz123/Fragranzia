import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Signup from './Signup';
import Home from './Home';
import ProductDetails from './ProductDetails';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Gift from './Gift';
import About from './About';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>

      
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/p' element={<ProductDetails></ProductDetails>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/product' element={<Products></Products>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/gifting' element={<Gift></Gift>}></Route>
      <Route path='about' element={<About></About>}></Route>

      
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
