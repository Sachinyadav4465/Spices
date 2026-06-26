import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiUser, BiEnvelope, BiMap, BiPackage, BiLogOut } from 'react-icons/bi';
import toast from 'react-hot-toast';

const ProfilePage = () => {
    const navigate = useNavigate();
    
    // Dummy user data (Real project me ye context ya backend se aayega)
    const [user, setUser] = useState({
        name: 'Rahul Kumar',
        email: 'rahul.kumar@example.com',
        phone: '+91 9876543210',
        address: '123, Spice Market, Chandni Chowk, Delhi - 110006'
    });

    const handleLogout = () => {
        toast.success('Logged out successfully!');
        navigate('/login');
    };

    return (
        <div className="container py-5 text-start">
            <div className="row g-4">
                {/* Left Side: Profile Sidebar */}
                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-0 p-4 text-center bg-white">
                        <div className="mx-auto bg-light rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '100px', height: '100px' }}>
                            <BiUser size={50} className="text-secondary" />
                        </div>
                        <h5 className="fw-bold text-dark mb-1">{user.name}</h5>
                        <p className="text-muted small mb-4">{user.email}</p>
                        
                        <div className="border-top pt-3 w-100">
                            <button className="btn btn-outline-dark rounded-0 w-100 d-flex align-items-center justify-content-center gap-2 mb-2">
                                <BiPackage size={18} /> My Orders
                            </button>
                            <button onClick={handleLogout} className="btn btn-danger rounded-0 w-100 d-flex align-items-center justify-content-center gap-2">
                                <BiLogOut size={18} /> Logout
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side: Account Details */}
                <div className="col-md-8">
                    <div className="card border-0 shadow-sm rounded-0 p-4 bg-white">
                        <h4 className="fw-bold text-dark border-bottom pb-3 mb-4 text-uppercase" style={{ fontSize: '18px', letterSpacing: '0.5px' }}>
                            Account Details
                        </h4>
                        
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label className="text-muted small fw-bold text-uppercase d-block mb-1">Full Name</label>
                                <div className="p-3 bg-light border d-flex align-items-center gap-2">
                                    <BiUser className="text-muted" />
                                    <span className="text-dark fw-medium">{user.name}</span>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="text-muted small fw-bold text-uppercase d-block mb-1">Email Address</label>
                                <div className="p-3 bg-light border d-flex align-items-center gap-2">
                                    <BiEnvelope className="text-muted" />
                                    <span className="text-dark fw-medium">{user.email}</span>
                                </div>
                            </div>

                            <div className="col-12">
                                <label className="text-muted small fw-bold text-uppercase d-block mb-1">Delivery Address</label>
                                <div className="p-3 bg-light border d-flex align-items-start gap-2">
                                    <BiMap className="text-muted mt-1" />
                                    <span className="text-dark fw-medium">{user.address}</span>
                                </div>
                            </div>
                        </div>

                        <button 
                            className="btn btn-orange rounded-0 px-4 py-2.5 fw-bold text-uppercase mt-4"
                            style={{ fontSize: '13px' }}
                            onClick={() => toast.success('Edit Profile option coming soon!')}
                        >
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;