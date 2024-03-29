import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../actions/auth";
import "./Signin.css";

const Signin = ({ login, isAuthenticated }) => {
  const [formdata, Setformdata] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formdata;
  const onChange = (e) =>
    Setformdata({ ...formdata, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    // console.log("login");
    // console.log(formdata)
  };
  if (isAuthenticated) {
    return <Redirect to="/" />
  }

  return (
    <div>
      {/* <h1>SignUp and Login</h1> */}
      <div className="sign-up">
        <div className="div-login">
          <div className="div-login-logo">
            Login &nbsp;
            <i class="fas fa-user" />
          </div>
          <div className="login-container">
            <form onSubmit={(e) => onSubmit(e)}>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email Address"
                required
                onChange={(e) => {
                  onChange(e);
                }}
              />
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                required
                onChange={(e) => {
                  onChange(e);
                }}
              />
              <button>Log In</button>
            </form>
          </div>
          <h6 className="mt-3">
            Forgot Password?{" "}
            <button>
              <Link to="/reset-password">Reset Password</Link>
            </button>
          </h6>
          <h6 className="mt-3">
            Don't have account?{" "}
            <button>
              <Link to="/sign-up">SignUp</Link>
            </button>
          </h6>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Signin);

// class SignUp extends React.Component {
//     state = {
//         email: '',
//         pwd: ''
//     }

//     handleChange = (e) => {
//         const { name, value } = e.target
//         this.setState({ [name]: value })
//     }

//     handleSubmit = (e) => {
//         e.preventDefault()
//         this.props.isLogin(true)
//     }
//     render() {
//         return (
//             <div className='sign-up'>
//                 <div className='div-login'>
//                     <div className='div-login-logo'>
//                         Login &nbsp;<i class="fas fa-user" />
//                     </div>
//                     <div className='login-container'>
//                         <form onSubmit={this.handleSubmit}>
//                             <input type='email' name='email' placeholder='Email Address' required onChange={this.handleChange} />
//                             <input type='password' name='pwd' placeholder='Password' required onChange={this.handleChange} />
//                             <button onSubmit={this.handleSubmit}>Log In</button>
//                         </form>
//                     </div>
//                 </div>
//                 <div className='div-login'>
//                     <div className='div-login-logo'>
//                         Register &nbsp;<i class="fas fa-users" />
//                     </div>
//                     <div className='register-container'>
//                         <form onSubmit={this.handleSubmit}>
//                             <input type='text' name='text' placeholder='First Name' required />
//                             <input type='text' name='text' placeholder='Last Name' required />
//                             <input type='email' name='email' placeholder='Email Address' required onChange={this.handleChange} />
//                             <input type='password' name='pwd' placeholder='Password' required onChange={this.handleChange} />
//                             <input type='password' name='cpwd' placeholder='Confirm Password' required onChange={this.handleChange} />
//                             <button onSubmit={this.handleSubmit}>Register</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
