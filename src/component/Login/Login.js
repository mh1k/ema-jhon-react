import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const { user, googleSignIn } = useAuth();
    const location = useLocation();
    console.log("came from", location.state?.from);
    const history = useHistory();
    const redirect_uri =  location.state?.from || '/';
    const handleGoogleLogin =()=>{
        googleSignIn()
        .then(result => {
            history.push(redirect_uri);
        })
    }
    return (
        <div>
            <div className="login-section">
                <h2>Login</h2>
                <form onSubmit=''>
                    <input type="email" name="" id="" placeholder="your email addres" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    <p>new to ema-jhon ?</p>
                    <Link to='/register'><button className="order-buttonR">create account</button></Link>
                </div>
                <div>------------- or -------------</div>
                <button onClick={handleGoogleLogin} className="order-buttonR">google sign in</button>
            </div>
        </div>
    );
};

export default Login;