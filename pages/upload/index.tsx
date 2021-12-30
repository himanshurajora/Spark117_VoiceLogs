import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import app from '../../services/firebase'
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { getFirestore, collection } from 'firebase/firestore'

import Link from "next/link";
export default function Upload() {
    const router = useRouter();
    const auth = getAuth(app);
    const [user, loading, error] = useAuthState(auth);
    const firestore = getFirestore(app);
    const db = collection(firestore, 'podcasts');
    const [photoUrl, setphotoUrl] = useState('');
    const [displayName, setdisplayName] = useState('');
    const [email, setemail] = useState('');
  

    // wait for loading to be false and if user is not logged in, redirect to home
    useEffect(() => {
        if (loading) return;
        if (!user) router.push('/');
        else {
            setdisplayName(user.displayName);
            setemail(user.email);
            setphotoUrl(user.photoURL);
        }
    }, [loading, user, router]);




    return (
        <Fragment>
            <section
                className='hero is-light is-medium is-family-secondary'>
                <div className='hero-body'>
                    <div className='container has-text-centered'>
                        <div className="is-flex" style={{justifyContent: "center"}}>
                            <figure className="image is-128x128">
                              {
                                photoUrl ?
                                <img src={photoUrl} alt='profile' className="is-rounded" />
                                :
                                <button className="button is-light is-fullwidth is-large is-loading"></button>
                              }
                            </figure>
                        </div>
                        <h2 className='title is-1'>
                            <h1>{displayName}</h1>
                        </h2>
                        <h2 className='title is-3'>
                            <h3>{email}</h3>
                        </h2>
                        <p className='subtitle is-family-secondary'>
                            Welcome to Vedik Logs, My Personal Website for Portfolio, Blogs and Podcasts.
                        </p>
                        <br />
                        <div className="buttons is-centered">
                            <Link href={"/upload/blogs"}>
                                <a className='button is-danger is-outlined'>
                                    Upload Blogs    
                                </a>
                            </Link>
                            <Link href={"/upload/podcasts"}>
                                <a className='button is-info is-outlined'>
                                    Upload Podcast
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        
        </Fragment>
    )
}