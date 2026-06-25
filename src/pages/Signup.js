import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiUserPlus, BiEnvelope, BiLockAlt, BiUser } from 'react-icons/bi';
import toast from 'react-hot-toast';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            toast.error('All fields are mandatory.');
            return;
        }
        toast.success('Account Created Successfully!', {
            style: { background: '#2e7d32', color: '#fff', borderRadius: '0px' }
        });
    };

    return (
        <section className="py-5 bg-spices-light d-flex align-items-center" style={{ minHeight: '85vh' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card border-0 shadow-lg rounded-0 bg-white p-4 p-sm-5">
                            
                            {/* Heading */}
                            <div className="text-center mb-4">
                                <span className="text-uppercase tracking-wider fw-bold text-success small" style={{ fontSize: '12px' }}>Join Spices Hub</span>
                                <h3 className="fw-black text-dark mt-1" style={{ fontWeight: '900', letterSpacing: '-0.5px' }}>CREATE ACCOUNT</h3>
                                <div className="mx-auto bg-spices-red mt-2" style={{ width: '50px', height: '3px' }}></div>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSignup} className="text-start">
                                <div className="mb-3">
                                    <label className="form-label small fw-bold text-muted text-uppercase">Full Name</label>
                                    <div className="input-group">
                                        <span className="input-group-text rounded-0 bg-light border-end-0 text-muted"><BiUser size={18} /></span>
                                        <input 
                                            type="text" 
                                            className="form-control rounded-0 border-start-0 px-2" 
                                            placeholder="John Doe"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            style={{ boxShadow: 'none', height: '42px', fontSize: '14px' }}
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label small fw-bold text-muted text-uppercase">Email Address</label>
                                    <div className="input-group">
                                        <span className="input-group-text rounded-0 bg-light border-end-0 text-muted"><BiEnvelope size={18} /></span>
                                        <input 
                                            type="email" 
                                            className="form-control rounded-0 border-start-0 px-2" 
                                            placeholder="john@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            style={{ boxShadow: 'none', height: '42px', fontSize: '14px' }}
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label small fw-bold text-muted text-uppercase">Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text rounded-0 bg-light border-end-0 text-muted"><BiLockAlt size={18} /></span>
                                        <input 
                                            type="password" 
                                            className="form-control rounded-0 border-start-0 px-2" 
                                            placeholder="Create a strong password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            style={{ boxShadow: 'none', height: '42px', fontSize: '14px' }}
                                        />
                                    </div>
                                </div>

                                <button 
                                    type="submit" 
                                    className="btn btn-orange rounded-0 w-100 text-uppercase fw-bold py-2.5 d-flex align-items-center justify-content-center gap-2 mb-3 shadow-sm"
                                    style={{ height: '45px', letterSpacing: '0.5px' }}
                                >
                                    <BiUserPlus size={20} /> Register Now
                                </button>
                            </form>

                            {/* Footer links */}
                            <div className="text-center mt-3 pt-3 border-top border-light">
                                <p className="text-muted small mb-0">
                                    Already have an account?{' '}
                                    <Link to="/login" className="text-danger fw-bold text-decoration-none hover-gold">
                                        Login Here
                                    </Link>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;