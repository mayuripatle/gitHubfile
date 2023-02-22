import "./Login.scss"
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useState } from "react";

const Login = () => {
    const [uerror, setuserError] = useState({ usernameError: "" });
    const [perror, setpassError] = useState({ passwordError: "" })
    const onLogin = (event) => {
        event.preventDefault();
        // console.log("Inside Fuction")
        // console.log(event.target.username.value);
        // console.log(event.target.password.value);

        if (event.target.username.value == "") {
            setuserError({ ...uerror, usernameError: "Please enter Email" });
        } else {
            setuserError({ ...uerror, usernameError: "" });
        }

        if (event.target.password.value == "") {
            setpassError({ ...perror, passwordError: "Please enter Password" });
        } else {
            setpassError({ ...perror, passwordError: "" });
        }




    }
    return (
        <div className="login">
            <Sidebar />
            <div className="loginContainer">
                <Navbar />
                <div className="top">
                    <h1>Login</h1>
                </div>
                <div className="bottom">
                    <form onSubmit={onLogin} >
                        <div className="formInput">
                            <label>Username :</label>
                            <input type="text" name="username" placeholder="Enter Your Email" />
                            <span className="error">{uerror.usernameError}</span>
                        </div>
                        <div className="formInput">
                            <label>Password :</label>
                            <input type="password" name="password" placeholder="Enter password" />
                            <span className="error">{perror.passwordError}</span>
                        </div>
                        <input className="loginButton" type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;