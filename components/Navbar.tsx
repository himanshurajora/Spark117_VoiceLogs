import { Fragment, useEffect } from "react";
import Link from 'next/link'
import { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth'
import app from '../services/firebase'
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth'
export default function Navbar(props) {

    const auth = getAuth(app)
    const [user, loading, error] = useAuthState(auth)

    const handleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider()
            await signInWithPopup(auth, provider)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSignOut = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Fragment>
            <nav>
                <ul>
                    <li>
                        <Link href={"/"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        {
                            user ?
                                <a onClick={handleSignOut}>SignOut</a>
                                :
                                <a onClick={handleSignIn}>SignIn</a>
                        }
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}