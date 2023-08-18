import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate()

    return(
        <div>
            SIGN-UP<br />
            <button onClick={() => navigate('/login')}>Go to Login</button>
        </div>
    )
}

export default SignUp;
