import React, { createContext, useState, useContext } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();
const productsData = [
  { id: 1, title: 'Excepteur sint occaecat', desc: 'Premium quality spices from natural herbs.', price: '58.96', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400' },
  { id: 2, title: 'Lorem ipsum dolor', desc: 'Fresh and aromatic spice powder.', price: '45.50', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400' },
  { id: 3, title: 'Sit amet conse ctetur', desc: 'Pure traditional spice blend.', price: '62.00', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400' },
  { id: 4, title: 'Lorem sint occaecat', desc: 'Best picked organic herbs.', price: '38.90', img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=400' }
];

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products] = useState(productsData);
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const exist = prevItems.find((item) => item.id === product.id);
      if (exist) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevItems, { ...product, qty: 1 }];
    });
    toast.success(`${product.title} added to cart!`, {
      position: 'bottom-left',
      style: { background: '#3E2723', color: '#fff', borderRadius: '0px' }
    });
    
  };

  const removeFromCart = (id, title) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    
    toast.error(`${title || 'Item'} removed from cart.`, {
      position: 'bottom-left',
      style: { background: '#d9534f', color: '#fff', borderRadius: '0px' }
    });
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider value={{ products, cartItems, isCartOpen, addToCart, removeFromCart, openCart, closeCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);