import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
    if(loading){
        return <span className="loading loading-spinner text-error"></span>
    }

    if (user) {
        return children
    }
    return <Navigate state={location?.pathname} to='/login'></Navigate>;
};

export default PrivetRoute;