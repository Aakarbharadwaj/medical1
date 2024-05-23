import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {

    // const navigate = useNavigate();

    let login = localStorage.getItem('login') !== null;
    if (!login) {
        return <Navigate to="/login" />;
    }


    return children;
}

export default Protected;