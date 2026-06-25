import React from 'react';

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Hero = () => {
    return (
        <section className="bg-spices-light py-4">
            <div className="container">
        
                <div className="position-relative bg-white border shadow-sm p-2 mb-4" style={{ minHeight: '350px' }}>
                    <div className="w-100 h-100 d-flex align-items-center p-5" style={{ 
                        backgroundImage: `url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000')`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center',
                        minHeight: '340px'
                    }}>
                        <div className="bg-white bg-opacity-75 p-4 m-3" style={{ maxWidth: '450px' }}>
                            <h5 className="text-muted text-uppercase mb-1">The only place to</h5>
                            <h1 className="fw-bold text-dark mb-3">GO FOR SPICES</h1>
                            <p className="text-muted small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className="btn btn-orange px-4 py-2 mt-2 rounded-0 text-uppercase fw-bold">Shop Now!</button>
                        </div>
                    </div>
                    <button className="btn btn-light position-absolute top-50 start-0 translate-middle-y rounded-0 ms-3 shadow-sm d-flex align-items-center justify-content-center p-2" type="button">
                        <BiChevronLeft size={24} />
                    </button>
                    <button className="btn btn-light position-absolute top-50 end-0 translate-middle-y rounded-0 me-3 shadow-sm d-flex align-items-center justify-content-center p-2" type="button">
                        <BiChevronRight size={24} />
                    </button>
                </div>
                <div className="row g-3">
                    {/* Card 1 */}
                    <div className="col-md-4">
                        <div className="card category-card bg-dark position-relative overflow-hidden" style={{ height: '160px' }}>
                            <img src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=500" className="card-img w-100 h-100 object-cover opacity-75" alt="Spices" />
                            <div className="card-img-overlay d-flex flex-column justify-content-end p-3 bg-spices-dark bg-opacity-50">
                                <h5 className="card-title mb-0 fw-bold text-white">SPICES & HERBS</h5>
                                <div className="d-flex justify-content-between align-items-center mt-1">
                                    <small className="text-gold">GET UP TO 50% OFF</small>
                                    <a href="#shop" className="text-white text-decoration-none small border-bottom">SHOP NOW!</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4">
                        <div className="card category-card bg-dark position-relative overflow-hidden" style={{ height: '160px' }}>
                            <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=500" className="card-img w-100 h-100 object-cover opacity-75" alt="Seasonings" />
                            <div className="card-img-overlay d-flex flex-column justify-content-end p-3 bg-success bg-opacity-50">
                                <h5 className="card-title mb-0 fw-bold text-white">SEASONINGS</h5>
                                <div className="d-flex justify-content-between align-items-center mt-1">
                                    <small className="text-warning">GET UP TO 50% OFF</small>
                                    <a href="#shop" className="text-white text-decoration-none small border-bottom">SHOP NOW!</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4">
                        <div className="card category-card bg-dark position-relative overflow-hidden" style={{ height: '160px' }}>
                            <img src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=500" className="card-img w-100 h-100 object-cover opacity-75" alt="Chili" />
                            <div className="card-img-overlay d-flex flex-column justify-content-end p-3 bg-danger bg-opacity-50">
                                <h5 className="card-title mb-0 fw-bold text-white">CHILI POWDER</h5>
                                <div className="d-flex justify-content-between align-items-center mt-1">
                                    <small className="text-warning">GET UP TO 50% OFF</small>
                                    <a href="#shop" className="text-white text-decoration-none small border-bottom">SHOP NOW!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;