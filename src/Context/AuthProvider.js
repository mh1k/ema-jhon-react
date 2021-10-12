import React, { createContext } from 'react';
import useFirebase from '../component/Hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => { /* shortcut destructuring children */
    // const {children}=props;
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;