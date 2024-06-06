import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

// Context
export const AuthContext = createContext(null);
// Social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider(); 

const FirebaseProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // Create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Update user profile with name and imageURL
    const updateUserProfile =(name, imageURL) =>{
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: imageURL,
        })
    }

    // Login Process

    // User sign in (Log in with email and password)
    const singInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google pop up log in
    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // Github pop up log in
    const githubLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // Logout Process
    const logout =()=>{
        setLoading(true);
        setUser(null);
        return signOut(auth);
    }

    // Observer 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } 
            setLoading(false);
        });

        return () => unsubscribe();
    })

    const authInfo ={
        createUser,
        updateUserProfile,
        singInUser,
        googleLogin,
        githubLogin,
        logout,
        loading,
        user,
    }


    return (
        
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

FirebaseProvider.propTypes = {
    children: PropTypes.node,
}
export default FirebaseProvider;