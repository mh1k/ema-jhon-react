import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="login-section">
                <h2>Create Account</h2>
                <form onSubmit="">
                   <input type="email" name="" id="" placeholder="your email address" />
                   <br />
                   <input type="password" name="" id="" placeholder="enter password" />
                   <br />
                   <input type="password" name="" id="" placeholder="re-enter password" />
                   <br />
                   <input type="submit" value="Submit" />
                </form>
                <div>
                    <p>alredy account ?</p>
                    <Link to="login"><button className="order-buttonR">log in</button></Link>
                </div>
                <div>------------- or -------------</div>
                <button className="order-buttonR">google sign in</button>
            </div>
        </div>
    );
};

export default Register;