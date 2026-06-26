import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { BiCart, BiSolidZap } from 'react-icons/bi';
import { useCart } from '../component/CartContext';

// SAARE PAGES KA MERGED MASTER DATA (ShopPage + CategoryPages)
const allProductsMasterList = [
    // === SHOP PAGE WALE UNIQUE PRODUCTS (IDs: 1 to 6) ===
    { id: 1, title: 'Excepteur sint occaecat', price: '58.96', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400' },
    { id: 2, title: 'Lorem ipsum dolor', price: '120.50', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400' },
    { id: 3, title: 'Sit amet conse ctetur', price: '89.89', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400' },
    { id: 4, title: 'Lorem sint occaecat', price: '45.00', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.', img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=400' },
    { id: 5, title: 'Sint occaecat', price: '75.30', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400' },
    { id: 6, title: 'Adipisicing elit', price: '62.00', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400' },

    // === SHOP PAGE BEST SELLERS / EXTRA (IDs: 101-105, 201-203) ===
    { id: 101, title: 'Organic Turmeric Powder', price: '35.99', desc: 'Excepteur sint occaecat cupidatat.', img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=200' },
    { id: 102, title: 'Voluptate velit esse cillum', price: '150.00', desc: 'Excepteur sint occaecat cupidatat.', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=200' },
    { id: 103, title: 'Lorem set fugiat nulla', price: '55.00', desc: 'Excepteur sint occaecat cupidatat.', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=200' },
    { id: 104, title: 'Premium Garam Masala', price: '95.40', desc: 'Excepteur sint occaecat cupidatat.', img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=200' },
    { id: 105, title: 'Occaecat cupidatat non', price: '28.50', desc: 'Excepteur sint occaecat cupidatat.', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=200' },
    { id: 201, title: 'Spicy Chili Flakes', price: '42.00', desc: 'Freshly crushed premium red chili flakes for perfect seasoning.', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400' },
    { id: 202, title: 'Pure Saffron Strands', price: '299.00', desc: 'Handpicked premium Kashmiri saffron for exotic aroma.', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400' },
    { id: 203, title: 'Whole Black Pepper', price: '68.00', desc: 'Bold and aromatic whole black peppercorns from South India.', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400' },

    // === CATEGORY PAGES DATA (IDs: 301+) ===
    { id: 301, title: 'Pure Turmeric Powder', price: '45.00', desc: 'High curcumin organic turmeric powder.', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400' },
    { id: 302, title: 'Whole Black Pepper (Premium)', price: '75.00', desc: 'Aromatic bold black peppercorns.', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400' },
    { id: 303, title: 'Green Cardamom', price: '190.00', desc: 'Premium handpicked green cardamom pods.', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400' },
    { id: 304, title: 'Cumin Seeds', price: '50.00', desc: 'Fresh and earthy whole cumin seeds.', img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=400' },
    { id: 305, title: 'Coriander Powder', price: '40.00', desc: 'Perfectly grounded aromatic coriander.', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400' },
    { id: 306, title: 'Cloves Whole', price: '120.00', desc: 'Strong and authentic whole cloves.', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400' },
    { id: 307, title: 'Cinnamon Sticks', price: '85.00', desc: 'Sweet and woody premium cinnamon.', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400' },
    { id: 308, title: 'Mustard Seeds', price: '35.00', desc: 'Organic black mustard seeds.', img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=400' },
    { id: 401, title: 'Peri Peri Seasoning', price: '65.00', desc: 'Spicy and tangy African peri peri mix.', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400' },
    { id: 402, title: 'Italian Seasoning', price: '80.00', desc: 'Perfect blend for pizzas and pastas.', img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=400' },
    { id: 501, title: 'Kashmiri Chili Powder', price: '95.00', desc: 'Gives rich red color without intense heat.', img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=400' },
    { id: 502, title: 'Teja Hot Chili Powder', price: '60.00', desc: 'Super spicy grounded red chilies.', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400' },
    { id: 601, title: 'Madras Curry Powder', price: '85.00', desc: 'Traditional South Indian style curry powder.', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400' },
    { id: 602, title: 'Premium Garam Masala', price: '95.00', desc: 'Royal blend of rich aromatic spices.', img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=400' },
    { id: 701, title: 'Mixed Herbs Extra', price: '75.00', desc: 'Oregano, basil, thyme and rosemary blend.', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400' }
];

const ProductDetails = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const { addToCart } = useCart();

    // ID matching handler
    const product = allProductsMasterList.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="container py-5 text-center">
                <h4 className="text-danger fw-bold">Product Not Found!</h4>
                <p className="text-muted">ID {id} ka koi product master data list me nahi mila.</p>
                <button className="btn btn-dark rounded-0 mt-3" onClick={() => navigate('/shop')}>Go to Shop</button>
            </div>
        );
    }

    return (
        <div className="container py-5 text-start">
            <button className="btn btn-sm btn-outline-dark rounded-0 mb-4 fw-bold" onClick={() => navigate(-1)}>
                ← Back
            </button>
            
            <div className="row g-5">
                <div className="col-md-5">
                    <div className="border p-3 bg-white text-center shadow-sm">
                        <img src={product.img} alt={product.title} className="img-fluid object-fit-cover w-100" style={{ maxHeight: '400px' }} />
                    </div>
                </div>

                <div className="col-md-7 d-flex flex-column justify-content-center">
                    <span className="text-success text-uppercase small fw-bold tracking-wider">100% Organic Spices</span>
                    <h2 className="fw-bold text-dark my-2 display-6">{product.title}</h2>
                    <p className="text-muted fs-6 my-3">{product.desc} Premium quality rich flavor direct from the organic farms.</p>
                    <h3 className="text-dark fw-bold my-3 display-6">₹{product.price}</h3>
                    
                    <div className="d-flex gap-3 mt-3">
                        <button className="btn btn-orange rounded-0 px-4 py-3 fw-bold text-uppercase d-flex align-items-center gap-2" style={{ fontSize: '13px' }} onClick={() => addToCart(product)}>
                            <BiCart size={20} /> Add To Cart
                        </button>
                    <Link to="/checkout" className="text-decoration-none">
    <button className="btn btn-buy-now rounded-0 px-4 py-3 fw-bold text-uppercase d-flex align-items-center gap-2" style={{ fontSize: '13px' }}>
        <BiSolidZap size={20} /> Buy Now
    </button>
</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;