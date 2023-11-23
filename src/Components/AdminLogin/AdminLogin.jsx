import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Logo from '../image/Logo.png';
import Ludo from '../image/Ludo.png';
import googleicon from '../icons/google.png';

function SignInForm() {
    const navigate = useNavigate();
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async evt => {
    evt.preventDefault();

    const { email, password } = state;

    try {
      const response = await axios.post("https://ludo-project-backend.vercel.app/api/v1/admin/signin", {
        email: email,
        password: password
      });

      // Assuming your API returns a success status
      if (response.status === 201) {
        // Handle successful login, e.g., redirect or set user stat
        navigate('/home')
      } else {
        // Handle other cases, e.g., display an error message
        console.error("Failed to sign in");
      }

    } catch (error) {
      console.error("Error signing in:", error.message);
    }

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

    return (
        <div className="form-container sign-in-container">
            <div className="leftcontainer">
            <div className='Logocontainer'>
                <img src={Logo}></img>
            </div>
            <div className="Ludocontainer">
            <img src={Ludo} alt="" />
            </div>
            <div className="contentcontainer">
                <h3>Welcome !</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quaerat laborum necessitatibus earum magni dolorem.</p>
            </div>
            </div>
            <div className="formcontainer">
            <form onSubmit={handleOnSubmit}>
                <p>Welcome Back !!</p>
                <h1>Sign-in</h1>
                <div className="social-container">
                    <button>
                        <img src={googleicon} alt=""  width="20px"/>
                         sing in with google
                    </button>
                </div>
                {/* <span>or use your account</span> */}
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={handleChange}
                />
                <a href="#">Forgot your password?</a>
                <button onClick={handleOnSubmit}>Sign In</button>
            </form>
            </div>
        </div>
    );
}

export default SignInForm;
