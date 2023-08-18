import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

 import './Login.css'

 const Login = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const handleLogin = e => {
        if(formData.username === "admin" && formData.password === "admin") {
            setErrorMessage("")
            setSuccessMessage("Login successful :)")
            navigate('/home')
        }
        else {
            setSuccessMessage("")
            setErrorMessage("Username or Password incorrect!")
        }
    }

    const handleChange = e => {
        const { name, value } = e.target
        let formDum = formData
        formDum[name] = value
        setFormData(formDum)
    }

    return(
        <div className="login-wrapper">
            <h3>LOGIN PAGE</h3>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username</label><br />
                    <input type="text" className="form-control" id="username" name="username" placeholder="Enter Username" onChange={handleChange} />
                </div><br />
                <div className="form-group">
                    <label htmlFor="password">Password</label><br />
                    <input type="password" className="form-control" id="password" name="password" placeholder="Enter Password" onChange={handleChange} />
                </div><br />
                <button type="submit" className="btn btn-primary">Login</button><br />
                <span className="text text-danger">{errorMessage && errorMessage}</span>
                <span className="text text-success">{successMessage && successMessage}</span>
            </form>
        </div>
    )
}

export default Login;
