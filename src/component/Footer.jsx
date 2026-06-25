import React from 'react';
import { FiTruck, FiPhone } from 'react-icons/fi';


const Footer = () => {
   
    const footerColumns = [
        {
            id: 1,
            title: 'Categories',
            bgClass: 'footer-col-1',
            links: ['Spice & herbs', 'Seasonings', 'Chili powder', 'Curry powder', 'Herb blends']
        },
        {
            id: 2,
            title: 'Information',
            bgClass: 'footer-col-2',
            links: ['Specials', 'New products', 'Best sellers', 'Our stores', 'Contact us']
        },
        {
            id: 3,
            title: 'My Account',
            bgClass: 'footer-col-3', 
            links: ['My orders', 'My credit slips', 'My addresses', 'My personal info', 'My favorite products']
        },
        {
            id: 4,
            title: 'Follow Us',
            bgClass: 'footer-col-4', 
            links: ['Facebook', 'Twitter', 'RSS']
        }
    ];

    return (
        <footer className="main-footer pt-5 pb-3 mt-4 border-top py-0">
            <div className="container">
                <div className="row g-4 text-start">
                
                    {footerColumns.map((col) => (
                        <div key={col.id} className={`col-xl-2 col-md-4 col-6 ${col.bgClass} p-3`}>
                            <h6 className="fw-bold text-dark text-uppercase mb-3" style={{ fontSize: '13px', letterSpacing: '0.5px' }}>
                                {col.title}
                            </h6>
                            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '12px' }}>
                                {col.links.map((link, index) => (
                                    <li key={index}>
                                        <a href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-muted text-decoration-none footer-link">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="col-xl-4 col-md-8 col-12 ps-xl-4 footer-right-box p-3">
                        <div className="d-flex flex-column gap-4">
                            <div className="d-flex gap-3 align-items-start">
                                <div className="text-muted mt-1">
                                    <FiTruck size={28} />
                                </div>
                                <div style={{ fontSize: '12px' }}>
                                    <h6 className="fw-bold m-0 text-uppercase text-dark" style={{ fontSize: '13px' }}>
                                        Free Shipping <span className="text-danger">on orders over $99</span>
                                    </h6>
                                    <p className="text-muted m-0 mt-1 lh-base">
                                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex gap-3 align-items-start">
                                <div className="text-muted mt-1">
                                    <FiPhone size={26} />
                                </div>
                                <div style={{ fontSize: '12px' }}>
                                    <h6 className="fw-bold m-0 text-uppercase text-muted" style={{ fontSize: '13px' }}>
                                        Tel: <span className="text-danger fs-5 ms-1">1(234) 567-9842</span>
                                    </h6>
                                    <p className="text-muted m-0 mt-1 lh-base">
                                        Dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="border-top mt-5 pt-3 text-start text-muted footer-copyright" style={{ fontSize: '11px' }}>
                    &copy; 2014 Powered by PrestaShop&trade;
                </div>
            </div>
        </footer>
    );
};

export default Footer;