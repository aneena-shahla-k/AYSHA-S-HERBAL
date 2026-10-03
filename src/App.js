import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CartDrawer from "./components/CartDrawer/CartDrawer";
import SearchModal from "./components/SearchModal/SearchModal";
import Toast from "./components/Toast/Toast";

import Home from "./pages/Home";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";

// Scroll to top automatically on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/product/:slug" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>

          <Footer />

          {/* Interactive Global Overlays & Notifications */}
          <CartDrawer />
          <SearchModal />
          <Toast />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;