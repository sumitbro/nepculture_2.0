import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { signup } from "../../actions/auth";
import "./Signin.css";


const SignUp = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        re_password: ''
    });

    const { username, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup(username, email, password, re_password);
            setAccountCreated(true);
        }
    };

    // if (isAuthenticated) {
    //     return <Redirect to='/' />
    // }
    if (accountCreated) {
        return <Redirect to='/sign-in' />
    }
    return (
        <div>
            {/* <h1>SignUp and Login</h1> */}
            <div className="sign-up">
                <div className="div-login">

                    <div className='div-login-logo'>
                        Register &nbsp;<i class="fas fa-users" />
                    </div>
                    <div className='register-container'>
                        <form onSubmit={e => onSubmit(e)}>
                            <input type='text' name='username' value={username} placeholder=' Name' onChange={e => onChange(e)} required />
                            <input type='email' name='email' value={email} placeholder='Email Address' required onChange={e => onChange(e)} />
                            <input type='password' name='password' value={password} placeholder='Password' minLength='6' required onChange={e => onChange(e)} />
                            <input type='password' name='re_password' value={re_password} placeholder='Confirm Password' minLength='6' required onChange={e => onChange(e)} />
                            <button >Register</button>
                        </form>
                    </div>
                    <h6 className="mt-3">
                        Already have account?{" "}
                        <button>
                            <Link to="/sign-in">SignIn</Link>
                        </button>
                    </h6>
                </div>
            </div>
        </div>





    )
}



const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(SignUp);