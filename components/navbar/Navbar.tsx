import { Fragment, useEffect, useRef } from "react";
import Link from 'next/link'
import { useState } from "react";
import { useRouter } from "next/router";
import { useAuthState } from 'react-firebase-hooks/auth'
import app from '../../services/firebase'
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth'
import styles from './navbar.module.css'

export default function Navbar(props) {

    const auth = getAuth(app)
    const [user, loading, error] = useAuthState(auth)
    const router = useRouter()
    const navbarRef = useRef(null)
    const burgerRef = useRef(null)


    useEffect(() => {
        console.log("route event");
        router.events.on("routeChangeComplete", ()=> {
            navbarRef.current.classList.remove("is-active");
        burgerRef.current.classList.remove("is-active");
        })
    }, [router])

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


    const handleNavbarShow = () => {
        navbarRef.current.classList.toggle('is-active')
        burgerRef.current.classList.toggle('is-active')
    }

    return (
        <Fragment>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link href={"/"}>
                        <a className="navbar-item">
                            <p className="title is-4">Vedik Logs</p>
                        </a>
                    </Link>
                    <a role="button" onClick={handleNavbarShow}  ref={burgerRef} className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className={"navbar-menu"} ref={navbarRef}>
                    <div className="navbar-start">
                        <Link href="/">
                            <a className="navbar-item">
                                <strong>Home</strong>
                            </a>
                        </Link>
                        <Link href="/blogs">
                            <a className="navbar-item">
                                <strong>Blogs</strong>
                            </a>
                        </Link>
                        <Link href="/podcasts">
                            <a className="navbar-item">
                                <strong>Podcasts</strong>
                            </a>
                        </Link>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <div className="button is-warning is-outlined">
                                    <strong>
                                    {
                                        user?
                                        <Link href={"/upload"}>
                                            <p>
                                                Upload
                                            </p>
                                        </Link>
                                        :
                                        <Link href={"/love"}>
                                            <p >💖😀</p>
                                        </Link>
                                    }
                                    </strong>
                                </div>
                                {
                                    user ?
                                        <a onClick={handleSignOut} className="button is-danger"><strong style={{color:"white"}} >Sign Out</strong></a>
                                        :
                                    <a onClick={handleSignIn} className="button is-success"><strong style={{color: "white"}}>Sign In</strong></a>
                                }
                                </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

// <Fragment>
// <nav>
//     <ul>
//         <li>
//             <Link href={"/"}>
//                 Home
//             </Link>
//         </li>
//         <li>
            
//         </li>
//         <li>
           
//         </li>
//     </ul>
// </nav>
// </Fragment>