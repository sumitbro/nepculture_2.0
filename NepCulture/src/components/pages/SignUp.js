import React from 'react';
import './SignUp.css';
class SignUp extends React.Component {
    state = {
        email: '',
        pwd: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.isLogin(true)
    }
    render() {
        return (
            <div className='sign-up'>
                <div className='div-login'>
                    <div className='div-login-logo'>
                        Login &nbsp;<i class="fas fa-user" />
                    </div>
                    <div className='login-container'>
                        <form onSubmit={this.handleSubmit}>
                            <input type='email' name='email' placeholder='Email Address' required onChange={this.handleChange} />
                            <input type='password' name='pwd' placeholder='Password' required onChange={this.handleChange} />
                            <button onSubmit={this.handleSubmit}>Log In</button>
                        </form>
                    </div>
                </div>
                <div className='div-login'>
                    <div className='div-login-logo'>
                        Register &nbsp;<i class="fas fa-users" />
                    </div>
                    <div className='register-container'>
                        <form onSubmit={this.handleSubmit}>
                            <input type='text' name='text' placeholder='First Name' required />
                            <input type='text' name='text' placeholder='Last Name' required />
                            <input type='email' name='email' placeholder='Email Address' required onChange={this.handleChange} />
                            <input type='password' name='pwd' placeholder='Password' required onChange={this.handleChange} />
                            <input type='password' name='cpwd' placeholder='Confirm Password' required onChange={this.handleChange} />
                            <button onSubmit={this.handleSubmit}>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;