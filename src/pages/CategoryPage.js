import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BiCart, BiSolidZap } from 'react-icons/bi';
import { useCart } from '../component/CartContext';

// SAARA PRODUCTS DATA CATEGORY KE HISAB SE (Har ek me 7-8 items)
const categoryProductsData = {
    "spices-herbs": [
        { id: 301, title: 'Pure Turmeric Powder', price: '45.00', desc: 'High curcumin organic turmeric powder.', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400' },
        { id: 302, title: 'Whole Black Pepper', price: '75.00', desc: 'Aromatic bold black peppercorns.', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400' },
        { id: 303, title: 'Green Cardamom', price: '190.00', desc: 'Premium handpicked green cardamom pods.', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400' },
        { id: 304, title: 'Cumin Seeds', price: '50.00', desc: 'Fresh and earthy whole cumin seeds.', img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=400' },
        { id: 305, title: 'Coriander Powder', price: '40.00', desc: 'Perfectly grounded aromatic coriander.', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400' },
        { id: 306, title: 'Cloves Whole', price: '120.00', desc: 'Strong and authentic whole cloves.', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400' },
        { id: 307, title: 'Cinnamon Sticks', price: '85.00', desc: 'Sweet and woody premium cinnamon.', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400' },
        { id: 308, title: 'Mustard Seeds', price: '35.00', desc: 'Organic black mustard seeds.', img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=400' }
    ],
    "seasonings": [
        { id: 401, title: 'Peri Peri Seasoning', price: '65.00', desc: 'Spicy and tangy African peri peri mix.', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400' },
        { id: 402, title: 'Italian Seasoning', price: '80.00', desc: 'Perfect blend for pizzas and pastas.', img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=400' },
        { id: 403, title: 'Garlic Powder', price: '55.00', desc: 'Dehydrated pure garlic powder spice.', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400' },
        { id: 404, title: 'Onion Powder', price: '55.00', desc: 'Sweet and savory grounded onion.', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400' },
        { id: 405, title: 'Barbeque Masala', price: '70.00', desc: 'Smoky seasoning for tikkas and grills.', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400' },
        { id: 406, title: 'Lemon Pepper Seasoning', price: '75.00', desc: 'Zesty lemon combined with cracked pepper.', img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=400' },
        { id: 407, title: 'Mexican Taco Spice', price: '90.00', desc: 'Authentic spice blend for tacos and nachos.', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400' }
    ],
    "chili-powder": [
        { id: 501, title: 'Kashmiri Chili Powder', price: '95.00', desc: 'Gives rich red color without intense heat.', img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=400' },
        { id: 502, title: 'Teja Hot Chili Powder', price: '60.00', desc: 'Super spicy grounded red chilies.', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400' },
        { id: 503, title: 'Guntur Chili Powder', price: '70.00', desc: 'Famous high heat Andhra red chili.', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400' },
        { id: 504, title: 'Crushed Red Chili Flakes', price: '50.00', desc: 'Premium crushed flakes for seasoning.', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400' },
        { id: 505, title: 'Smoked Paprika', price: '110.00', desc: 'Imported sweet and smoky paprika powder.', img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=400' },
        { id: 506, title: 'Deggi Mirch', price: '80.00', desc: 'Blend of hot and colorful red chilies.', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400' },
        { id: 507, title: 'Bird Eye Chili Powder', price: '140.00', desc: 'Extremely hot gourmet chili powder.', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400' }
    ],
    "curry-powder": [
        { id: 601, title: 'Madras Curry Powder', price: '85.00', desc: 'Traditional South Indian style curry powder.', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400' },
        { id: 602, title: 'Premium Garam Masala', price: '95.00', desc: 'Royal blend of rich aromatic spices.', img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=400' },
        { id: 603, title: 'Kitchen King Masala', price: '75.00', desc: 'All-purpose flavorful Indian curry spice.', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400' },
        { id: 604, title: 'Chicken Curry Masala', price: '80.00', desc: 'Authentic non-veg style curry mix.', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400' },
        { id: 605, title: 'Shahi Paneer Masala', price: '80.00', desc: 'Rich spice mix for creamy North Indian curries.', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400' },
        { id: 606, title: 'Sambhar Powder', price: '65.00', desc: 'Aromatic roasted spice mix for lentil stews.', img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=400' },
        { id: 607, title: 'Chole Masala', price: '70.00', desc: 'Tangy and dark spice mix for chickpeas.', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400' }
    ],
    "herb-blends": [
        { id: 701, title: 'Mixed Herbs Extra', price: '75.00', desc: 'Oregano, basil, thyme and rosemary blend.', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400' },
        { id: 702, title: 'Pure Oregano Leaves', price: '85.00', desc: 'Premium rubbed aromatic oregano.', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400' },
        { id: 703, title: 'Dried Basil Rubbed', price: '60.00', desc: 'Sweet herb flavor perfect for Mediterranean food.', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400' },
        { id: 704, title: 'Rosemary Whole Leaves', price: '90.00', desc: 'Strong pine-like fragrance for roasting.', img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=400' },
        { id: 705, title: 'Thyme Leaves', price: '85.00', desc: 'Earthy subtle herb for soups and sauces.', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400' },
        { id: 706, title: 'Parsley Flakes', price: '65.00', desc: 'Bright green flakes for beautiful garnishing.', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400' },
        { id: 707, title: 'Provencal Herb Mix', price: '120.00', desc: 'Classic French style blended dry herbs.', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400' }
    ]
};

const CategoryPage = () => {
    const { categoryName } = useParams(); // URL se category name uthayega
    const { addToCart } = useCart();

    // Agar galat URL ho toh fallback empty array
    const products = categoryProductsData[categoryName] || [];

    // Title ko format karne ke liye (e.g., "chili-powder" becomes "CHILI POWDER")
    const displayTitle = categoryName ? categoryName.replace('-', ' ').toUpperCase() : "PRODUCTS";

    return (
        <section className="bg-spices-light py-5 text-start">
            <div className="container">
                
                {/* Heading Area */}
                <div className="border-bottom border-secondary-subtle mb-4 pb-2">
                    <h3 className="fw-bold text-dark m-0 tracking-wide">{displayTitle}</h3>
                    <p className="text-muted small m-0 mt-1">Showing {products.length} organic items</p>
                </div>

                {/* Products Grid */}
                <div className="row g-4">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card text-center p-3 h-100 border-0 shadow-sm rounded-0 bg-white d-flex flex-column">
                                    
                                    {/* Image Container -> Click karne pe Product Details Page */}
                                    <Link to={`/product/${product.id}`} className="text-decoration-none d-block">
                                        <div className="border mb-3 p-0 overflow-hidden position-relative" style={{ height: '220px', background: '#fdfbf7', cursor: 'pointer' }}>
                                            <img 
                                                src={product.img} 
                                                alt={product.title} 
                                                className="w-100 h-100 object-fit-cover hover-zoom" 
                                            />
                                        </div>
                                    </Link>

                                    {/* Title -> Click karne pe Details Page */}
                                    <h6 className="fw-bold text-dark text-truncate mb-1" style={{ fontSize: '15px' }}>
                                        <Link to={`/product/${product.id}`} className="text-decoration-none text-dark hover-gold">
                                            {product.title}
                                        </Link>
                                    </h6>
                                    
                                    <p className="text-muted mb-2 text-wrap-2-lines" style={{ fontSize: '12px', lineHeight: '1.4' }}>{product.desc}</p>

                                    {/* Price */}
                                    <div className="mb-3 mt-auto">
                                        <span className="text-dark fw-bold" style={{ fontSize: '16px' }}>₹{product.price}</span>
                                    </div>

                                    {/* Buttons */}
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
                                            <Link to={`/product/${product.id}`} className="w-100 text-decoration-none">
                                                <button className="btn btn-buy-now rounded-0 w-100 text-uppercase fw-bold py-2 d-flex align-items-center justify-content-center gap-1" style={{ fontSize: '11px' }}>
                                                    <BiSolidZap size={14} /> View
                                                </button>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            <h5 className="text-muted">No products found in this category.</h5>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default CategoryPage;