import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../component/CartContext';
import { BiChevronRight, BiCreditCard, BiShieldQuarter } from 'react-icons/bi';
import toast from 'react-hot-toast';

const CheckoutPage = () => {
    const { cartItems } = useCart();
    const navigate = useNavigate();

    // Form states
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '',
        address: '', city: '', state: '', zip: '', paymentMethod: 'cod'
    });

    // Totals calculation
    const totalItemsCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
    const subtotal = cartItems.reduce((acc, item) => acc + parseFloat(item.price) * item.qty, 0);
    const shipping = subtotal > 50 || subtotal === 0 ? 0.00 : 5.00; // $50 se upar free shipping
    const total = (subtotal + shipping).toFixed(2);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        
        if (cartItems.length === 0) {
            toast.error('Aapka cart khali hai bhai!');
            return;
        }

        // Simple Validation Check
        if (!formData.firstName || !formData.address || !formData.email || !formData.phone) {
            toast.error('Kripya saari jaroori details bharein.');
            return;
        }

        toast.success('🎉 Order Place Ho Gaya Bhai! Thank you.');
        // Real project me yahan order api call hogi
        navigate('/profile'); 
    };

    return (
        <div className="bg-spices-light py-5 text-start">
            <div className="container">
                
                {/* Breadcrumb Navigation */}
                <div className="d-flex align-items-center gap-1 small text-muted mb-4" style={{ fontSize: '13px' }}>
                    <span className="cursor-pointer" onClick={() => navigate('/')}>Home</span>
                    <BiChevronRight />
                    <span className="cursor-pointer" onClick={() => navigate('/shop')}>Shop</span>
                    <BiChevronRight />
                    <span className="text-dark fw-bold">Checkout</span>
                </div>

                <h2 className="fw-bold text-dark text-uppercase mb-4" style={{ fontSize: '24px', letterSpacing: '0.5px' }}>Checkout</h2>

                <div className="row g-4">
                    {/* LEFT COLUMN: BILLING DETAILS FORM */}
                    <div className="col-lg-7">
                        <div className="card border-0 shadow-sm rounded-0 p-4 bg-white">
                            <h5 className="fw-bold text-dark border-bottom pb-3 mb-4 text-uppercase" style={{ fontSize: '16px' }}>Billing Details</h5>
                            
                            <form onSubmit={handlePlaceOrder}>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <label className="form-label small fw-bold text-muted text-uppercase">First Name *</label>
                                        <input type="text" name="firstName" required className="form-control rounded-0 p-2.5 bg-light border-0" onChange={handleInputChange} style={{ fontSize: '14px' }} />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label small fw-bold text-muted text-uppercase">Last Name</label>
                                        <input type="text" name="lastName" className="form-control rounded-0 p-2.5 bg-light border-0" onChange={handleInputChange} style={{ fontSize: '14px' }} />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label small fw-bold text-muted text-uppercase">Email Address *</label>
                                        <input type="email" name="email" required className="form-control rounded-0 p-2.5 bg-light border-0" onChange={handleInputChange} style={{ fontSize: '14px' }} />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label small fw-bold text-muted text-uppercase">Phone Number *</label>
                                        <input type="tel" name="phone" required className="form-control rounded-0 p-2.5 bg-light border-0" onChange={handleInputChange} style={{ fontSize: '14px' }} />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label small fw-bold text-muted text-uppercase">Street Address *</label>
                                        <input type="text" name="address" required placeholder="House number and street name" className="form-control rounded-0 p-2.5 bg-light border-0 mb-2" onChange={handleInputChange} style={{ fontSize: '14px' }} />
                                    </div>
                                    <div className="col-sm-4">
                                        <label className="form-label small fw-bold text-muted text-uppercase">Town / City *</label>
                                        <input type="text" name="city" required className="form-control rounded-0 p-2.5 bg-light border-0" onChange={handleInputChange} style={{ fontSize: '14px' }} />
                                    </div>
                                    <div className="col-sm-4">
                                        <label className="form-label small fw-bold text-muted text-uppercase">State *</label>
                                        <input type="text" name="state" required className="form-control rounded-0 p-2.5 bg-light border-0" onChange={handleInputChange} style={{ fontSize: '14px' }} />
                                    </div>
                                    <div className="col-sm-4">
                                        <label className="form-label small fw-bold text-muted text-uppercase">Postcode / ZIP *</label>
                                        <input type="text" name="zip" required className="form-control rounded-0 p-2.5 bg-light border-0" onChange={handleInputChange} style={{ fontSize: '14px' }} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: ORDER SUMMARY & PAYMENT */}
                    <div className="col-lg-5">
                        <div className="card border-0 shadow-sm rounded-0 p-4 bg-white sticky-top" style={{ top: '20px', zIndex: 10 }}>
                            <h5 className="fw-bold text-dark border-bottom pb-3 mb-3 text-uppercase" style={{ fontSize: '16px' }}>Your Order ({totalItemsCount})</h5>
                            
                            {/* Product mini list row scrollable if large */}
                            <div className="overflow-auto mb-3" style={{ maxHeight: '200px' }}>
                                {cartItems.length === 0 ? (
                                    <p className="text-muted small py-2">Aapka cart bilkul khali hai.</p>
                                ) : (
                                    cartItems.map((item) => (
                                        <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom border-light py-2 pe-1">
                                            <div className="d-flex align-items-center gap-2 text-wrap-1-line" style={{ maxWidth: '75%' }}>
                                                <img src={item.img} alt={item.title} className="object-fit-cover border" style={{ width: '40px', height: '40px' }} />
                                                <span className="text-dark fw-medium small">{item.title} <b className="text-muted">x{item.qty}</b></span>
                                            </div>
                                            <span className="text-dark fw-bold small">₹{(parseFloat(item.price) * item.qty).toFixed(2)}</span>
                                        </div>
                                    ))
                                )}
                            </div>

                            {/* Calculation Area */}
                            <div className="bg-light p-3 border mb-4">
                                <div className="d-flex justify-content-between mb-2 small">
                                    <span className="text-muted">Subtotal</span>
                                    <span className="text-dark fw-semibold">₹{subtotal.toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2 small">
                                    <span className="text-muted">Shipping Charges</span>
                                    <span className="text-dark fw-semibold">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                                </div>
                                <div className="d-flex justify-content-between pt-2 border-top fw-bold text-dark">
                                    <span>Total Amount</span>
                                    <span className="text-danger fs-5">₹{total}</span>
                                </div>
                            </div>

                            {/* Payment Options */}
                            <h5 className="fw-bold text-dark mb-3 text-uppercase" style={{ fontSize: '14px' }}>Payment Method</h5>
                            <div className="mb-4">
                                <div className="form-check p-3 border mb-2 bg-light d-flex align-items-center justify-content-between">
                                    <div>
                                        <input className="form-check-input ms-0 me-2" type="radio" name="paymentMethod" id="cod" value="cod" checked={formData.paymentMethod === 'cod'} onChange={handleInputChange} />
                                        <label className="form-check-label fw-bold text-dark cursor-pointer" htmlFor="cod" style={{ fontSize: '14px' }}>Cash On Delivery (COD)</label>
                                    </div>
                                </div>
                                <div className="form-check p-3 border bg-light d-flex align-items-center justify-content-between opacity-75">
                                    <div>
                                        <input className="form-check-input ms-0 me-2" type="radio" name="paymentMethod" id="online" value="online" checked={formData.paymentMethod === 'online'} onChange={handleInputChange} />
                                        <label className="form-check-label fw-bold text-dark cursor-pointer" htmlFor="online" style={{ fontSize: '14px' }}>Online Payment (Cards / UPI)</label>
                                    </div>
                                    <BiCreditCard size={20} className="text-muted" />
                                </div>
                            </div>

                            {/* Final Submit Button */}
                            <button 
                                type="submit" 
                                className="btn btn-orange rounded-0 w-100 py-3 text-uppercase fw-bold shadow-sm mb-3" 
                                style={{ fontSize: '13px', letterSpacing: '0.5px' }}
                                onClick={handlePlaceOrder}
                            >
                                Place Order Now
                            </button>

                            <div className="d-flex align-items-center justify-content-center gap-1 text-muted small" style={{ fontSize: '11px' }}>
                                <BiShieldQuarter size={14} className="text-success" />
                                <span>Your transaction is 100% secure and encrypted.</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CheckoutPage;