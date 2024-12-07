import React, {useState, createContext, useEffect, useContext} from 'react'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword} from "firebase/auth";
import {app} from '../firebase/firebase.config'


// 1. creating one authentication context for each user
//  2.use AuthProvider hook to create a new auth context

export const AuthContext = createContext()
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const useAuthentication = () => {
return useContext(AuthContext)
}
const AuthProvider = ({children}) =>{
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState("")

    const createUser = async (email, password) =>{
      await createUserWithEmailAndPassword(auth, email, password).then(value => setUser(value))
    }

    const loginWithGoogle = async() =>{
        setLoading(true)
        await signInWithPopup(auth, googleProvider)       
    }

    const login = async() =>{
        await signInWithEmailAndPassword(auth , email, password)
    }
    

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return ()=> unsubscribe; // unsubscribe when component unmounts
    },[])

    const authInfo = { user, createUser, loginWithGoogle, login}

    return <AuthContext.Provider value={{ user, loading, createUser, loginWithGoogle, login}} >
        {children}
    </AuthContext.Provider>
}

export default AuthProvider