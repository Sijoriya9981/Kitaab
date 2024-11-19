import React from 'react';
import { useAuth } from '/src/context/AuthProvider.jsx';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

const Logout = () => {
    const [authUser, setauthUser] = useAuth();
    const [redirect, setRedirect] = React.useState(false);

    const handlelogout = () => {
        try {
            setauthUser({
                ...authUser, user: null
            });
            localStorage.removeItem('Users');
            toast.success("Logout Successfully");

            setRedirect(true);
        } catch (err) {
            toast.error("Error: ", err.message);
        }
    }

    if (redirect) {
        setTimeout(() => {
            window.location.reload();
        }, 1000);
        return <Navigate to="/" />;
    }

    return (
        <>
            <button
                onClick={handlelogout}
                className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'>
                Logout
            </button>
        </>
    );
}

export default Logout;
