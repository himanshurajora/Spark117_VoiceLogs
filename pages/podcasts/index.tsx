import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import NewForm from '../../components/Form'
import app from '../../services/firebase'
import { getFirestore, collection, getDocs, orderBy, query } from 'firebase/firestore'

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
                const q = query(db, orderBy('createdAt', 'desc'));
                const docs = await getDocs(q);
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
                        </h2>
                        <h2 className='title is-3'>
                            Listen to My Voice, and Learn More About Me
                        </h2>
                        <p className='subtitle is-family-secondary'>
                            Here, I share my podcasts (I call them Voice Logs) and share my thoughts on various topics.
                        </p>
                        <br />
                        <Link href={"/blogs"}>
                            <a className='button is-success is-outlined'>
                                Read My Blogs
                            </a>
                        </Link>
                    </div>
                </div>
            </section>

            <section className='section section--gradient has-background-white'>
                <div className='container'>
                    <div className="">
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
                                                    <h2 className='title is-4 has-text-black'>{podcast.title}</h2>
                                                    <audio controls id='audio' src={podcast.audioUrl}></audio>
                                                    <div className="columns is-centered">
                                                        <div className="column is-12-mobile is-5">
                                                            <br />
                                                            <p className='subtitle is-5'>{podcast.discription}</p>
                                                        </div>
                                                    </div>
                                                    <hr className='devider' />
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
