import { useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')


    const signInUsingGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    }



    const signOutt = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        }).finally(() => {
            setLoading(false)
        })
    }



    const handleName = e => {
        setName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePass = e => {
        setPass(e.target.value)
    }





    const signUpp = history => {
        setLoading(true)

        createUserWithEmailAndPassword(auth, email, pass)
            .then((result) => {
                const newUser = result.user
                newUser.displayName = name
                setUser(newUser)
                history.push('/home')

            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => {
                setLoading(false)
            })
    }


    const loggIn = history => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, pass)
            .then((result) => {
                setUser(result.user)
                history.push('/home')
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        const changeAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
            }
            setLoading(false)
        });
        return changeAuth;
    }, [])



    return {
        signInUsingGoogle, user, error, signOutt, handleName, handleEmail, handlePass, signUpp, loggIn, loading
    }
};

export default useFirebase;