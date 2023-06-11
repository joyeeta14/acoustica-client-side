// import React from 'react';

import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile   } from "firebase/auth";

export const  AuthContext = createContext();
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const userRegister=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const userLogin =(email,password)=>{
        return signInWithEmailAndPassword (auth, email, password);
    }




    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('logged in uther',currentUser);
            setUser(currentUser);
            setLoading(false);
    
        })
        return ()=>unSubscribe();
    } ,[])


    const authInfo = {userRegister, userLogin, user, loading};
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;