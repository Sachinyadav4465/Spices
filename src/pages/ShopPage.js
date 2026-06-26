import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiCart, BiSolidZap, BiFilterAlt } from 'react-icons/bi';
import { useCart } from '../component/CartContext';

// Aapka existing data + extra unique products code ko bada dikhane ke liye
const initialProductsData = [
    { id: 1, title: 'Excepteur sint occaecat', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.', price: '58.96', oldPrice: null, img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400' },
    { id: 2, title: 'Lorem ipsum dolor', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.', price: '120.50', oldPrice: null, img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400' },
    { id: 3, title: 'Sit amet conse ctetur', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.', price: '89.89', oldPrice: '110.00', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400' },
    { id: 4, title: 'Lorem sint occaecat', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.', price: '45.00', oldPrice: null, img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=400' },
    { id: 5, title: 'Sint occaecat', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.', price: '75.30', oldPrice: '89.89', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400' },
    { id: 6, title: 'Adipisicing elit', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.', price: '62.00', oldPrice: null, img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400' },
    // Best Sellers Data Merged Here
    { id: 101, title: 'Organic Turmeric Powder', desc: 'Excepteur sint occaecat cupidatat.', price: '35.99', oldPrice: null, img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=200' },
    { id: 102, title: 'Voluptate velit esse cillum', desc: 'Excepteur sint occaecat cupidatat.', price: '150.00', oldPrice: '189.89', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=200' },
    { id: 103, title: 'Lorem set fugiat nulla', desc: 'Excepteur sint occaecat cupidatat.', price: '55.00', oldPrice: '79.89', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=200' },
    { id: 104, title: 'Premium Garam Masala', desc: 'Excepteur sint occaecat cupidatat.', price: '95.40', oldPrice: null, img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=200' },
    { id: 105, title: 'Occaecat cupidatat non', desc: 'Excepteur sint occaecat cupidatat.', price: '28.50', oldPrice: null, img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=200' },
    // Extra Products Added
    { id: 201, title: 'Spicy Chili Flakes', desc: 'Freshly crushed premium red chili flakes for perfect seasoning.', price: '42.00', oldPrice: '50.00', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400' },
    { id: 202, title: 'Pure Saffron Strands', desc: 'Handpicked premium Kashmiri saffron for exotic aroma.', price: '299.00', oldPrice: null, img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400' },
    { id: 203, title: 'Whole Black Pepper', desc: 'Bold and aromatic whole black peppercorns from South India.', price: '68.00', oldPrice: '80.00', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400' }
];

const ShopPage = () => {
    const { addToCart } = useCart();
    const [sortBy, setSortBy] = useState('default');

    // Sorting Logic
    const getSortedProducts = () => {
        let sortedList = [...initialProductsData];

        if (sortBy === 'price-low') {
            sortedList.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        } else if (sortBy === 'price-high') {
            sortedList.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        } else if (sortBy === 'name-az') {
            sortedList.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortBy === 'name-za') {
            sortedList.sort((a, b) => b.title.localeCompare(a.title));
        }
        return sortedList;
    };

    const sortedProducts = getSortedProducts();

    return (
        <section className="bg-spices-light py-5 text-start">
            <div className="container">
                <div className="row g-4">

                    {/* LEFT COLUMN: FILTERS */}
                    <div className="col-lg-3 col-md-4">
                        <div className="bg-white p-4 border border-light shadow-sm sticky-top" style={{ top: '20px', zIndex: 10 }}>
                            <div className="d-flex align-items-center gap-2 border-bottom pb-3 mb-3">
                                <BiFilterAlt size={20} className="text-dark" />
                                <h5 className="fw-bold m-0 text-uppercase" style={{ fontSize: '16px', letterSpacing: '0.5px' }}>Filters & Sort</h5>
                            </div>

                            {/* Sorting Radio Options */}
                            <div className="mb-4">
                                <label className="fw-bold text-muted text-uppercase mb-2 d-block" style={{ fontSize: '12px' }}>Sort By</label>

                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="sortOptions" id="default" value="default" checked={sortBy === 'default'} onChange={(e) => setSortBy(e.target.value)} />
                                    <label className="form-check-label text-dark" htmlFor="default" style={{ fontSize: '14px' }}>Default</label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="sortOptions" id="priceLow" value="price-low" checked={sortBy === 'price-low'} onChange={(e) => setSortBy(e.target.value)} />
                                    <label className="form-check-label text-dark" htmlFor="priceLow" style={{ fontSize: '14px' }}>Price: Low to High</label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="sortOptions" id="priceHigh" value="price-high" checked={sortBy === 'price-high'} onChange={(e) => setSortBy(e.target.value)} />
                                    <label className="form-check-label text-dark" htmlFor="priceHigh" style={{ fontSize: '14px' }}>Price: High to Low</label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="sortOptions" id="nameAZ" value="name-az" checked={sortBy === 'name-az'} onChange={(e) => setSortBy(e.target.value)} />
                                    <label className="form-check-label text-dark" htmlFor="nameAZ" style={{ fontSize: '14px' }}>Name: A to Z</label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="sortOptions" id="nameZA" value="name-za" checked={sortBy === 'name-za'} onChange={(e) => setSortBy(e.target.value)} />
                                    <label className="form-check-label text-dark" htmlFor="nameZA" style={{ fontSize: '14px' }}>Name: Z to A</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: PRODUCTS GRID */}
                    <div className="col-lg-9 col-md-8">
                        <div className="d-flex justify-content-between align-items-center border-bottom border-secondary-subtle mb-4 pb-2">
                            <h5 className="fw-bold text-dark text-uppercase m-0 tracking-wide" style={{ fontSize: '16px' }}>All Products ({sortedProducts.length})</h5>
                        </div>

                        <div className="row g-3">
                            {sortedProducts.map((product) => (
                                <div key={product.id} className="col-lg-4 col-sm-6">
                                    <div className="card text-center p-3 h-100 border-0 shadow-sm rounded-0 bg-white d-flex flex-column">

                                        {/* Image Box Container (Clicking opens details page) */}
                                        <Link to={`/product/${product.id}`} className="text-decoration-none d-block">
                                            <div className="border mb-3 p-0 overflow-hidden position-relative" style={{ height: '220px', background: '#fdfbf7', cursor: 'pointer' }}>
                                                <img
                                                    src={product.img}
                                                    alt={product.title}
                                                    className="w-100 h-100 object-fit-cover"
                                                />
                                            </div>
                                        </Link>

                                        {/* Product Title (Clickable) */}
                                        <h6 className="fw-bold text-dark text-truncate mb-1" style={{ fontSize: '14px' }}>
                                            <Link to={`/product/${product.id}`} className="text-decoration-none text-dark hover-gold">
                                                {product.title}
                                            </Link>
                                        </h6>

                                        <p className="text-muted mb-2 text-wrap-3-lines" style={{ fontSize: '11px', lineHeight: '1.4' }}>{product.desc}</p>

                                        {/* Price Box */}
                                        <div className="mb-3 mt-auto">
                                            {product.oldPrice ? (
                                                <div className="d-flex justify-content-center align-items-center gap-2">
                                                    <span className="text-danger fw-bold">₹{product.price}</span>
                                                    <span className="text-muted text-decoration-line-through small">₹{product.oldPrice}</span>
                                                </div>
                                            ) : (
                                                <span className="text-dark fw-bold">₹{product.price}</span>
                                            )}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <button
                                                    className="btn btn-orange rounded-0 w-100 text-uppercase fw-bold py-2 d-flex align-items-center justify-content-center gap-1"
                                                    style={{ fontSize: '11px' }}
                                                    onClick={() => addToCart(product)}
                                                >
                                                    <BiCart size={14} /> Cart
                                                </button>
                                            </div>
                                            <div className="col-6">
                                                <Link to="/checkout" className="text-decoration-none">
                                                    <button
                                                        className="btn btn-buy-now rounded-0 w-100 text-uppercase fw-bold py-2 d-flex align-items-center justify-content-center gap-1"
                                                        style={{ fontSize: "11px" }}
                                                    >
                                                        <BiSolidZap size={14} /> Buy
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ShopPage;