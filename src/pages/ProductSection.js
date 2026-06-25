import React from 'react';
import { Link } from 'react-router-dom';
import { BiCart, BiSolidZap } from 'react-icons/bi';
import { useCart } from '../component/CartContext'; // Path updated if needed

export const featuredProductsData = [
    { id: 1, title: 'Excepteur sint occaecat', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.', price: '58.96', oldPrice: null, img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400' },
    { id: 2, title: 'Lorem ipsum dolor', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.', price: '58.96', oldPrice: null, img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400' },
    { id: 3, title: 'Sit amet conse ctetur', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.', price: '58.96', oldPrice: '89.89', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400' },
    { id: 4, title: 'Lorem sint occaecat', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.', price: '58.96', oldPrice: null, img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=400' },
    { id: 5, title: 'Sint occaecat', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.', price: '58.96', oldPrice: '89.89', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400' },
    { id: 6, title: 'Adipisicing elit', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.', price: '58.96', oldPrice: null, img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400' },
];

export const bestSellersData = [
    { id: 101, title: 'Excepteur sint occaecat', desc: 'Excepteur sint occaecat cupidatat.', price: '58.96', oldPrice: null, img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=200' },
    { id: 102, title: 'Voluptate velit esse cillum dolore eu', desc: 'Excepteur sint occaecat cupidatat.', price: '58.96', oldPrice: '89.89', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=200' },
    { id: 103, title: 'Lorem set fugiat nulla pariatur', desc: 'Excepteur sint occaecat cupidatat.', price: '58.96', oldPrice: '89.89', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=200' },
    { id: 104, title: 'Excepteur sint occaecat', desc: 'Excepteur sint occaecat cupidatat.', price: '58.96', oldPrice: null, img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=200' },
    { id: 105, title: 'Occaecat cupidatat non proident', desc: 'Excepteur sint occaecat cupidatat.', price: '58.96', oldPrice: null, img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=200' },
];

const ProductSection = () => {
    const { addToCart } = useCart();

    return (
        <section className="bg-spices-light py-4 text-start">
            <div className="container">
                <div className="row g-4">
                    
                    {/* LEFT COLUMN: FEATURED PRODUCTS */}
                    <div className="col-lg-9 col-md-8">
                        <div className="border-bottom border-secondary-subtle mb-4 pb-2">
                            <h5 className="fw-bold text-dark text-uppercase m-0 tracking-wide" style={{ fontSize: '16px' }}>Featured Products</h5>
                        </div>

                        <div className="row g-3">
                            {featuredProductsData.map((product) => (
                                <div key={product.id} className="col-lg-4 col-sm-6">
                                    <div className="card text-center p-3 h-100 border-0 shadow-sm rounded-0 bg-white d-flex flex-column">
                                        
                                        {/* Image Box Container */}
                                        <Link to={`/product/${product.id}`} className="text-decoration-none d-block">
                                            <div className="border mb-3 p-0 overflow-hidden position-relative" style={{ height: '220px', background: '#fdfbf7', cursor: 'pointer' }}>
                                                {/* FIXED RULE: w-100 h-100 object-fit-cover lagane se poore box me fit ho jayega */}
                                                <img 
                                                    src={product.img} 
                                                    alt={product.title} 
                                                    className="w-100 h-100 object-fit-cover" 
                                                />
                                            </div>
                                        </Link>

                                        <h6 className="fw-bold text-dark text-truncate mb-1" style={{ fontSize: '14px' }}>
                                            <Link to={`/product/${product.id}`} className="text-decoration-none text-dark hover-gold">
                                                {product.title}
                                            </Link>
                                        </h6>
                                        <p className="text-muted mb-2 text-wrap-3-lines" style={{ fontSize: '11px', lineHeight: '1.4' }}>{product.desc}</p>

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
                                                <button className="btn btn-buy-now rounded-0 w-100 text-uppercase fw-bold py-2 d-flex align-items-center justify-content-center gap-1" style={{ fontSize: '11px' }}>
                                                    <BiSolidZap size={14} /> Buy
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: BEST SELLERS */}
                    <div className="col-lg-3 col-md-4">
                        <div className="p-2 px-3 mb-3" style={{ backgroundColor: '#EFE5C9', borderLeft: '4px solid #3E2723' }}>
                            <h5 className="fw-bold text-dark text-uppercase m-0 small tracking-wider">Best Sellers</h5>
                        </div>

                        <div className="d-flex flex-column gap-3">
                            {bestSellersData.map((item) => (
                                <div key={item.id} className="d-flex gap-2 p-2 bg-white border border-light shadow-sm align-items-center">

                                    {/* Best Seller Small Image Container */}
                                    <div className="border p-0 overflow-hidden bg-light" style={{ width: '75px', minWidth: '75px', height: '75px', cursor: 'pointer' }}>
                                        <Link to={`/product/${item.id}`}>
                                            <img 
                                                src={item.img} 
                                                alt={item.title} 
                                                className="w-100 h-100 object-fit-cover" 
                                            />
                                        </Link>
                                    </div>

                                    <div className="lh-sm text-start" style={{ fontSize: '12px', width: '100%' }}>
                                        <div className="fw-bold text-dark text-truncate-2" style={{ maxHeight: '34px', overflow: 'hidden' }}>
                                            <Link to={`/product/${item.id}`} className="text-decoration-none text-dark hover-gold">
                                                {item.title}
                                            </Link>
                                        </div>
                                        <small className="text-muted text-truncate d-block my-1" style={{ fontSize: '10px' }}>{item.desc}</small>
                                        
                                        <div className="d-flex justify-content-between align-items-center mt-1">
                                            {item.oldPrice ? (
                                                <div className="d-flex gap-2 align-items-center">
                                                    <span className="text-danger fw-bold">₹{item.price}</span>
                                                    <span className="text-muted text-decoration-line-through" style={{ fontSize: '10px' }}>₹{item.oldPrice}</span>
                                                </div>
                                            ) : (
                                                <span className="text-dark fw-bold">₹{item.price}</span>
                                            )}
                                            <button
                                                className="btn btn-sm btn-orange rounded-0 p-1 py-0 px-2"
                                                onClick={() => addToCart(item)}
                                                style={{ fontSize: '10px' }}
                                            >
                                                + <BiCart size={12} />
                                            </button>
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

export default ProductSection;