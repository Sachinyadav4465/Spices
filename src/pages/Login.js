import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiLogInCircle, BiEnvelope, BiLockAlt } from 'react-icons/bi';
import toast from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error('Please fill in all fields.');
            return;
        }
        // Fake success message authentication ke liye
        toast.success('Successfully Logged In!', {
            style: { background: '#3E2723', color: '#fff', borderRadius: '0px' }
        });
    };

    return (
        <section className="py-5 bg-spices-light d-flex align-items-center" style={{ minHeight: '80vh' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card border-0 shadow-lg rounded-0 bg-white p-4 p-sm-5">
                            
                            {/* Heading */}
                            <div className="text-center mb-4">
                                <span className="text-uppercase tracking-wider fw-bold text-success small" style={{ fontSize: '12px' }}>Welcome Back</span>
                                <h3 className="fw-black text-dark mt-1" style={{ fontWeight: '900', letterSpacing: '-0.5px' }}>ACCOUNT LOGIN</h3>
                                <div className="mx-auto bg-spices-red mt-2" style={{ width: '50px', height: '3px' }}></div>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleLogin} className="text-start">
                                <div className="mb-3">
                                    <label className="form-label small fw-bold text-muted text-uppercase">Email Address</label>
                                    <div className="input-group">
                                        <span className="input-group-text rounded-0 bg-light border-end-0 text-muted"><BiEnvelope size={18} /></span>
                                        <input 
                                            type="email" 
                                            className="form-control rounded-0 border-start-0 px-2" 
                                            placeholder="yourname@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            style={{ boxShadow: 'none', height: '42px', fontSize: '14px' }}
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                        <label className="form-label small m-0 fw-bold text-muted text-uppercase">Password</label>
                                        <a href="#forgot" className="text-danger text-decoration-none small" style={{ fontSize: '12px' }}>Forgot?</a>
                                    </div>
                                    <div className="input-group">
                                        <span className="input-group-text rounded-0 bg-light border-end-0 text-muted"><BiLockAlt size={18} /></span>
                                        <input 
                                            type="password" 
                                            className="form-control rounded-0 border-start-0 px-2" 
                                            placeholder="••••••••"
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
                                    <BiLogInCircle size={20} /> Sign In
                                </button>
                            </form>

                            {/* Footer links */}
                            <div className="text-center mt-3 pt-3 border-top border-light">
                                <p className="text-muted small mb-0">
                                    Don't have an account?{' '}
                                    <Link to="/signup" className="text-danger fw-bold text-decoration-none hover-gold">
                                        Create Account
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

export default Login;