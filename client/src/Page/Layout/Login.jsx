import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
const navigate=useNavigate()
  
function handleLogin(e) {
        e.preventDefault();
        // Code to handle login goes here
        props.toggle();
        console.log(email, username, password);
    }
    const handleClose=(e)=>{
        props.toggle();
        navigate("/reset-password")
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-button" onClick={props.toggle}>
                    <AiOutlineClose />
                </button>
                <h2>Welcome Back!</h2>
                <p className="subtitle">Log in to continue to your account</p>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <div className="input-container">
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-container">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-container">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <button className="login-button" type="submit">
                        Login
                    </button>
                </form>
                <p className="forgot-password">
                    <Link to="/reset-password" onClick={handleClose}>Reset password?</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
