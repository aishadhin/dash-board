import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import Loading from '../Alerts/Loading';
import auth from './firebase.init';


const AuthVerification = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loading />
    }

    if (!user) {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'You need to login first',
            showConfirmButton: false,
            timer: 2000
        })
    }

    if (user) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default AuthVerification;