import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Auth Context
export const AuthContext = createContext();

// AuthProvider Component
export default function AuthProvider({ children }) {
    // Get user data from localStorage
    const initialAuthUser = localStorage.getItem('Users');
    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    );

    // Debugging Log


    // Provide Auth State to Children
    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom Hook to Use Auth Context
export const useAuth = () => useContext(AuthContext);
