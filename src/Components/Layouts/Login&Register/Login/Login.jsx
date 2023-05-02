import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={show ? "text" : "password"} name="password" id="" required />
                    <p onClick={() => setShow(!show)}><small>
                        {
                            show ? <span>Hide Password</span>: <span>Show Password</span>
                        }
                        </small></p>
                </div>
                <input className='btn-submit mb-5 btn btn-primary' type="submit" value="Login" />
            </form>
            <p><small>New to Epicurious? <Link className='text-violet-500' to="/register">Create New Account</Link></small></p>
        </div>
        </div>
    );
};

export default Login;