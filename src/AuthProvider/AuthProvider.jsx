import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext =createContext(null)
const auth =getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const axiosPublic =useAxiosPublic()
    const [loading,setLoading]=useState(true)
    const provider = new GoogleAuthProvider();
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const handleUpdateProfile = (name, photo) => {
        const user = auth.currentUser;
        if (user) {
            return updateProfile(user, {
                displayName: name,
                photoURL: photo
            });
        } 
    }
    const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            if(currentUser){
                const userInfo={
                   email:currentUser.email 
                }
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token)
                    }
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return ()=>{
            return unsubscribe
        }
    },[])
    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        signOut,
        logOut,
        googleLogin,handleUpdateProfile

    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;