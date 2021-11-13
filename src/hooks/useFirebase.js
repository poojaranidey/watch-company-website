import { useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
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
    const [admin, setAdmin] = useState(false)


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
                saveUser(email, name);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });

                history.push('/home')

            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => {
                setLoading(false)
            })
    }


    // const signUpp = (email, password, name, history) => {
    //     setLoading(true);
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((result) => {
    //             setError('');
    //             const newUser = { email, displayName: name };
    //             setUser(newUser);
    //             // send name to firebase after creation
    //             saveUser(email, name);
    //             updateProfile(auth.currentUser, {
    //                 displayName: name
    //             }).then(() => {
    //             }).catch((error) => {
    //             });
    //             history.replace('/');
    //         })
    //         .catch((error) => {
    //             setError(error.message);
    //             console.log(error);
    //         })
    //         .finally(() => setLoading(false));
    // }

    const loggIn = (history, location) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, pass)
            .then((result) => {
                setUser(result.user)
                history.push(location.state?.from || '/dashboard')
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => {
                setLoading(false)
            })
    }


    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
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
        signInUsingGoogle, user, error, signOutt, handleName, handleEmail, handlePass, signUpp, loggIn, loading, admin
    }
};

export default useFirebase;