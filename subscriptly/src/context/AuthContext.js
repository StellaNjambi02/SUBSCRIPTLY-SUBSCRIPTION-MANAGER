import React, { useState, createContext, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const authenticate = () => {
        setIsAuthenticated(true);
    };

    const deauthenticate = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, authenticate, deauthenticate }}>
            {children} {/* Use lowercase 'children' here */}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
