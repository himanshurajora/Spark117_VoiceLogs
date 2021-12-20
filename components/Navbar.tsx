import { Fragment, useEffect } from "react";
import Link from 'next/link'
import { useState } from "react";
import { useRouter } from "next/router";
import { useAuthState } from 'react-firebase-hooks/auth'
import app from '../services/firebase'
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth'
export default function Navbar(props) {

    const auth = getAuth(app)
    const [user, loading, error] = useAuthState(auth)
    const router = useRouter()
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
            router.push('/')
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
                    <li>
                        {
                        user?
                            <Link href={"/upload"}>
                                Upload
                            </Link>
                            :
              
                              <h4>
                                  Welcome! Dear User
                              </h4>
                          

                            
                        }
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}