import React from 'react';
import { BiSearch, BiCartAlt, BiUserCircle } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';
import { useCart } from '../component/CartContext'; 
import { Link, useLocation } from 'react-router-dom'; 

const Navbar = () => {
    const { openCart, cartItems } = useCart();
    const location = useLocation(); 
    
    const totalItemsCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price) * item.qty, 0).toFixed(2);

    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-spices-light border-bottom text-start">
        
            {/* TOP BAR: LANGUAGE & CURRENCY */}
            <div className="container d-flex justify-content-between align-items-center py-2 small text-muted" style={{ fontSize: '12px' }}>
                <div className="d-flex gap-4">
                
                    {/* LANGUAGE DROPDOWN */}
                    <div className="dropdown">
                        <span 
                            className="cursor-pointer dropdown-toggle text-muted text-decoration-none" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false"
                            id="languageDropdown"
                        >
                            Language: <span className="text-dark fw-semibold">English</span>
                        </span>
                        <ul className="dropdown-menu rounded-0 shadow-sm border-light mt-2" style={{ fontSize: '13px' }}>
                            <li><button className="dropdown-item active bg-success" type="button">English</button></li>
                            <li><button className="dropdown-item" type="button">Hindi</button></li>
                            <li><button className="dropdown-item" type="button">Spanish</button></li>
                            <li><button className="dropdown-item" type="button">French</button></li>
                        </ul>
                    </div>

                    {/* CURRENCY DROPDOWN */}
                    <div className="dropdown">
                        <span 
                            className="cursor-pointer dropdown-toggle text-muted text-decoration-none" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false"
                            id="currencyDropdown"
                        >
                            Currency: <span className="text-dark fw-semibold">USD</span>
                        </span>
                        <ul className="dropdown-menu rounded-0 shadow-sm border-light mt-2" style={{ fontSize: '13px' }}>
                            <li><button className="dropdown-item active bg-success" type="button">USD ($)</button></li>
                            <li><button className="dropdown-item" type="button">INR (₹)</button></li>
                            <li><button className="dropdown-item" type="button">EUR (€)</button></li>
                            <li><button className="dropdown-item" type="button">GBP (£)</button></li>
                        </ul>
                    </div>
                </div>
            </div> 

            {/* MIDDLE BAR: LOGO, SEARCH, ACCOUNT, CART */}
            <div className="container my-3">
                <div className="row align-items-center g-3">

                    {/* Logo Box */}
                    <div className="col-lg-3 col-md-4">
                        <Link to="/" className="text-decoration-none">
                            <div className="bg-spices-red text-white p-3 text-center shadow-sm" style={{ letterSpacing: '0.5px' }}>
                                <h1 className="fw-black m-0 lh-1 display-6 tracking-tight" style={{ fontWeight: '900' }}>SPICES</h1>
                                <div className="fw-light mt-1" style={{ fontSize: '9px', opacity: '0.9', letterSpacing: '1px' }}>THE BIGGEST CHOICE ON THE WEB</div>
                            </div>
                        </Link>
                    </div>

                    {/* Search Bar */}
                    <div className="col-lg-6 col-md-5">
                        <div className="input-group" style={{ height: '42px' }}>
                            <input
                                type="text"
                                className="form-control rounded-0 border-end-0 border-secondary-subtle px-3"
                                placeholder="Search..."
                                style={{ boxShadow: 'none' }}
                            />
                            <button className="btn btn-orange rounded-0 px-3 d-flex align-items-center border-start-0" type="button">
                                <BiSearch size={22} className="text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Right Controls: Profile, Account & Red Cart Box */}
                    <div className="col-lg-3 col-md-3 d-flex justify-content-end align-items-center gap-3">
                        
                        {/* PROFILE ICON & USER LINKS */}
                        <div className="d-flex align-items-center gap-2 text-end">
                            <Link to="/profile" className="text-muted hover-orange" title="View Profile">
                                <BiUserCircle size={32} className="text-secondary" />
                            </Link>
                            <div className="lh-sm">
                                <Link to="/login" className="text-danger fw-bold text-decoration-none d-block small" style={{ fontSize: '13px' }}>
                                    Login
                                </Link>
                                <Link to="/profile" className="text-muted text-decoration-none d-block" style={{ fontSize: '12px' }}>
                                  
                                </Link>
                            </div>
                        </div>

                        {/* Red Cart Trigger Box */}
                        <div
                            className="bg-spices-red text-white p-2 px-3 d-flex align-items-center justify-content-between rounded-0 cursor-pointer shadow-sm position-relative"
                            style={{ minWidth: '150px', height: '45px' }}
                            onClick={openCart}
                        >
                            <div className="text-start lh-1 me-2">
                                <span className="fw-bold d-block" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>CART</span>
                                <small className="text-white-80" style={{ fontSize: '11px' }}>
                                    {totalItemsCount > 0 ? `${totalItemsCount} items - ₹${totalPrice}` : '(empty)'}
                                </small>
                            </div>
                            <div className="d-flex align-items-center border-start border-white-50 ps-2 h-100">
                                <BiCartAlt size={24} />
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>

            {/* LOWER BAR: CATEGORY NAV MENU */}
            <nav className="bg-spices-dark shadow-sm">
                <div className="container">
                    <ul className="nav align-items-center">
                        
                        {/* SPICES & HERBS */}
                        <li className="nav-item">
                            <Link 
                                to="/category/spices-herbs" 
                                className={`nav-link px-4 py-3 rounded-0 fw-bold transition-all ${isActive('/category/spices-herbs') ? 'bg-success text-white' : 'text-white-50 hover-white'}`}
                                style={{ fontSize: '14px', letterSpacing: '0.5px' }}
                            >
                                SPICES & HERBS
                            </Link>
                        </li>
                        
                        {/* SEASONINGS */}
                        <li className="nav-item">
                            <Link 
                                to="/category/seasonings" 
                                className={`nav-link px-4 py-3 rounded-0 fw-bold transition-all ${isActive('/category/seasonings') ? 'bg-success text-white' : 'text-white-50 hover-white'}`}
                                style={{ fontSize: '14px', letterSpacing: '0.5px' }}
                            >
                                SEASONINGS
                            </Link>
                        </li>
                        
                        {/* CHILI POWDER */}
                        <li className="nav-item">
                            <Link 
                                to="/category/chili-powder" 
                                className={`nav-link px-4 py-3 rounded-0 fw-bold transition-all ${isActive('/category/chili-powder') ? 'bg-success text-white' : 'text-white-50 hover-white'}`}
                                style={{ fontSize: '14px', letterSpacing: '0.5px' }}
                            >
                                CHILI POWDER
                            </Link>
                        </li>
                        
                        {/* CURRY POWDER */}
                        <li className="nav-item">
                            <Link 
                                to="/category/curry-powder" 
                                className={`nav-link px-4 py-3 rounded-0 fw-bold transition-all ${isActive('/category/curry-powder') ? 'bg-success text-white' : 'text-white-50 hover-white'}`}
                                style={{ fontSize: '14px', letterSpacing: '0.5px' }}
                            >
                                CURRY POWDER
                            </Link>
                        </li>
                        
                        {/* HERB BLENDS */}
                        <li className="nav-item">
                            <Link 
                                to="/category/herb-blends" 
                                className={`nav-link px-4 py-3 rounded-0 fw-bold transition-all ${isActive('/category/herb-blends') ? 'bg-success text-white' : 'text-white-50 hover-white'}`}
                                style={{ fontSize: '14px', letterSpacing: '0.5px' }}
                            >
                                HERB BLENDS
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;