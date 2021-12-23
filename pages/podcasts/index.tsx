import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import NewForm from '../../components/Form'
import app from '../../services/firebase'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

export default function Home() {

    const firestore = getFirestore(app);
    const db = collection(firestore, 'podcasts');
    const [podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                var chunks = []
                const docs = await getDocs(db);
                docs.forEach(doc => {
                    chunks.push(doc.data())
                })

                setPodcasts(chunks);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, []);



    return (
        <Fragment>
            <section
                className='hero is-light is-medium is-family-secondary'>
                <div className='hero-body'>
                    <div className='container has-text-centered'>
                        <h2 className='title is-1'>
                            My Podcasts
                            {/* &lt;p&gt; Hello World!&lt;/p&gt;  */}
                        </h2>
                        <h2 className='title is-3'>
                            Listen to My Voice, and Learn More About Me
                        </h2>
                        <p className='subtitle is-family-secondary'>
                            Here, I share my podcasts (I call them Voice Logs) and share my thoughts on various topics.
                        </p>
                        <br />
                        <Link href={"/blogs"}>
                            <a href="#Blogs" className='button is-success is-outlined'>
                                Read My Blogs
                            </a>
                        </Link>
                    </div>
                </div>
            </section>

            <section className='section section--gradient'>
                <div className='container'>
                    <div className="box notification is-light">
                        <p className="title is-2 has-text-centered">🎤🎙️</p>

                        <div className="has-text-centered">
                            <p><strong>{error}</strong></p>
                            {
                                loading ?
                                    <button className='button is-large is-white is-loading'>&sp;</button>
                                    :
                                    <ul>
                                        {
                                            podcasts.map(podcast => (
                                                <li key={podcast.title}>
                                                    <h2 className='title is-4'>{podcast.title}</h2>
                                                    <audio controls id='audio' src={podcast.audioUrl}></audio>
                                                    <p className='subtitle is-5'>{podcast.discription}</p>
                                                    <hr className='devider'/>
                                                </li>
                                            ))
                                        }
                                    </ul>
                            }
                        </div>

                    </div>
                </div>
            </section>
        </Fragment >
    )
}
