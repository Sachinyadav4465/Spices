import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BiCart, BiArrowBack, BiCheckShield } from 'react-icons/bi';
import { useCart } from '../component/CartContext';

const ProductDetails = () => {
    const { id } = useParams(); 
    const { products, addToCart } = useCart();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="container py-5 text-center">
                <h4 className="text-muted">Product Not Found!</h4>
                <Link to="/" className="btn btn-orange rounded-0 mt-3 text-white text-decoration-none px-4 py-2">
                    <BiArrowBack /> Back To Shop
                </Link>
            </div>
        );
    }

    return (
        <section className="py-5 bg-white text-start">
            <div className="container">
                <div className="mb-4">
                    <Link to="/" className="text-decoration-none text-muted small d-flex align-items-center gap-1 hover-gold">
                        <BiArrowBack /> Back to products
                    </Link>
                </div>

                <div className="row g-5">
                    <div className="col-md-6">
                        <div className="border p-5 text-center shadow-sm" style={{ background: '#fdfbf7' }}>
                            <img src={product.img} alt={product.title} className="img-fluid object-fit-contain" style={{ maxHeight: '350px' }} />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <span className="text-uppercase tracking-wider fw-bold text-success small" style={{ fontSize: '12px' }}>Premium Quality Spice</span>
                        <h2 className="fw-bold text-dark mt-1 mb-3" style={{ fontSize: '28px' }}>{product.title}</h2>
                        
                        <div className="d-flex align-items-center gap-3 mb-4 py-2 border-top border-bottom border-light">
                            <span className="text-dark fw-bold fs-3">${product.price}</span>
                        </div>

                        <h6 className="fw-bold text-dark text-uppercase small tracking-wider mb-2">Description</h6>
                        <p className="text-muted mb-4" style={{ fontSize: '14px', lineHeight: '1.6' }}>{product.desc}</p>

                        <div className="d-flex gap-3 mb-4">
                            <button 
                                className="btn btn-orange rounded-0 px-5 py-3 text-uppercase fw-bold d-flex align-items-center gap-2 shadow-sm"
                                onClick={() => addToCart(product)}
                            >
                                <BiCart size={20} /> Add To Cart
                            </button>
                        </div>

                        <div className="p-3 bg-light border border-secondary-subtle rounded-0 d-flex align-items-center gap-2 text-muted" style={{ fontSize: '12px' }}>
                            <BiCheckShield size={18} className="text-success" />
                            <span>100% Authentic & Natural Spices Guarantee.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;