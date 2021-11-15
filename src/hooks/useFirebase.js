import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,
    createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();


const useFirebase=()=>{

    const [user,setUser]=useState({});
    const [error, seterror] = useState('');
    const [isLoading,setIsLoading]=useState(true);
    const auth=getAuth();

    const signInUsingGoogle=()=>{
        setIsLoading(true);
        const googleprovider=new GoogleAuthProvider();
        signInWithPopup(auth,googleprovider)
        .then(result=>{
            setUser(result.user);
        })
        .finally(()=>setIsLoading(false));

    }
    //Sign Up & Log in Using Email 
    //sign up user
    const signUpUsingEmail = (email, password, name) => {

        if(password.length<6 ){
            seterror("Password Must At Least 6 Character Long");
            return ;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                setUser(res.user);
                displayName(name);
                seterror('');
            })
            .catch(error => seterror(error.message));
        
    }
    //update name
    const displayName = name => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(result => {
        }
    );
    }
    //sign in user
    const signInUsingEmail = (email, pass) => {
        signInWithEmailAndPassword(auth, email, pass)
            .then(res => {
                setUser(res.user);
            })
            .catch(error => seterror(error.message));
    }
    //observe user state change
    useEffect(()=>{
     const unsubscribed=onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return ()=>unsubscribed;
    },[auth])

    const logOut=()=>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{})
        .finally(()=>setIsLoading(false));
    }

    return{
        user,
        signInUsingGoogle,
        signInUsingEmail,
        signUpUsingEmail,
        error,
        displayName,
        isLoading,
        logOut
    }


}

export default useFirebase;
