import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initAuthentication from "../Firebase/firebase.init";

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState();

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
            
    }
   /*  const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result);
                setUser(result.user);
            })
    } */
    
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log("inside", user);
                setUser(user)
            }
        })
    }, []);

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    return {
        user,
        googleSignIn,
        logOut
    }
}
export default useFirebase;