import React from 'react';
import { BiX, BiTrash } from 'react-icons/bi';
import { useCart } from '../component/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { isCartOpen, closeCart, cartItems, removeFromCart } = useCart();
const handleClose = () => {
    closeCart(false); // Agar Offcanvas/Modal show state se control ho raha hai
};
  const items = cartItems || [];
  const totalPrice = items.reduce((acc, item) => acc + parseFloat(item.price) * item.qty, 0).toFixed(2);

  return (
    <>
      {isCartOpen && (
        <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" style={{ zIndex: 1040 }} onClick={closeCart} />
      )}

      <div 
        className="position-fixed top-0 end-0 h-100 bg-white shadow-lg d-flex flex-column"
        style={{
          width: '380px',
          maxWidth: '100%',
          zIndex: 1050,
          transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <div className="p-3 border-bottom d-flex align-items-center justify-content-between bg-light">
          <h6 className="fw-bold m-0 text-uppercase tracking-wider">Shopping Cart ({items.length})</h6>
          <button className="btn p-1 border-0" onClick={closeCart}>
            <BiX size={24} className="text-dark" />
          </button>
        </div>

        <div className="flex-grow-1 overflow-y-auto p-3">
          {items.length === 0 ? (
            <div className="text-center py-5 text-muted">
              <p className="mb-0 fs-6">Your cart is empty.</p>
            </div>
          ) : (
            <div className="d-flex flex-column gap-3">
              {items.map((item) => (
                <div key={item.id} className="d-flex gap-3 border-bottom pb-3 align-items-center">
                  <div className="border p-1 bg-light text-center" style={{ width: '60px', height: '60px' }}>
                    <img src={item.img} alt={item.title} className="w-100 h-100 object-fit-contain" />
                  </div>
                  <div className="flex-grow-1 text-start" style={{ fontSize: '13px' }}>
                    <div className="fw-bold text-dark text-truncate" style={{ maxWidth: '180px' }}>{item.title}</div>
                    <div className="text-muted my-1">Qty: {item.qty}</div>
                    <div className="fw-bold text-danger">₹{item.price}</div>
                  </div>
            
                  <button className="btn btn-link text-muted p-1" onClick={() => removeFromCart(item.id, item.title)}>
                    <BiTrash size={18} className="text-secondary" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-3 border-top bg-light">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="fw-bold text-uppercase small">Subtotal:</span>
              <span className="fw-bold text-danger fs-5">₹{totalPrice}</span>
            </div>
           <Link to="/checkout" className="text-decoration-none">
    <button
        className="btn btn-orange rounded-0 w-100 text-uppercase fw-bold py-2 mb-2"
        onClick={handleClose}   // Modal/Offcanvas close karega
        style={{ fontSize: '13px' }}
    >
        Proceed To Checkout
    </button>
</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;