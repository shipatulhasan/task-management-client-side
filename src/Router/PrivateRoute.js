import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../component/Shared/Spinner/Loader';

const PrivateRoute = ({children}) => {
    const {userInfo,isLoading} = useSelector(state=>state.auth)
    
    let location = useLocation();
    if(isLoading){
        return <Loader />
    }
    if(userInfo?.uid){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;