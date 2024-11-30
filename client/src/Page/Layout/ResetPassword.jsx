import { useState } from "react";
import Login from "./Login";
import "./ResetPassword.css"
import { Link } from "react-router-dom";
const ResetPassword = () => {
    const [seen, setSeen] = useState(false)

    function togglePop() {
        setSeen(!seen);
    };
    return (
        <>
            <div className="reset-password">
                <h1>Reset Password</h1>
                <form>
                    <div className="input-container-reset">
                        <input type="email" placeholder="Enter Email" />

                    </div>
                    <div className="input-container-reset">
                        <input type="password" placeholder="Enter Your Old Password" />
                    </div>
                    <div className="input-container-reset">
                        <input type="password" placeholder="Enter New Password" />
                    </div>
                    <button type="submit">Reset Password</button>
                </form>
                <p><Link to="/">
                    {seen ? <Login toggle={togglePop} /> : "Back to Login Page"}
                </Link></p>
            </div>
        </>
    )
}
export default ResetPassword