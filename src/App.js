import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './component/CartContext';
import Navbar from './component/Navbar';
import { Homepages } from './pages/Homepages';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';  // Login Import kiya
import Signup from './pages/Signup'; // Signup Import kiya
// import CustomBlocks from './pages/CustomBlocks';
import Footer from './component/Footer';
import CartDrawer from './component/CartDrawer';

const App = () => {
  return (
    <CartProvider>
      <Toaster /> 
      <Router>
        <div className="min-vh-100 bg-spices-light d-flex flex-column position-relative">
          
          <Navbar />
          <CartDrawer />

          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Homepages />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/login" element={<Login />} />   {/* Path 1 */}
              <Route path="/signup" element={<Signup />} /> {/* Path 2 */}
            </Routes>
          </main>

          
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;