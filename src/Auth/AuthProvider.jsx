// import React from 'react';

import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged   } from "firebase/auth";

export const  AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const userRegister=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const userLogin =(email,password)=>{
        return signInWithEmailAndPassword (auth, email, password);
    }

    const [user, setUser] = useState(null);
    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, loggedInUser=>{
            console.log('logged in uther',loggedInUser);
            setUser(loggedInUser);
    
        })
        return ()=>unSubscribe();
    } ,[])

    const authInfos = {userRegister, userLogin, user};

    return (
        <AuthContext.Provider value={authInfos}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;