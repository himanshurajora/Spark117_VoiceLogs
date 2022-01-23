import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import NewForm from '../../components/Form'
import app from '../../services/firebase'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import {useRouter} from 'next/router'

export default function Home() {

    const firestore = getFirestore(app);
    const db = collection(firestore, 'blogs');
    const [podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter()


    useEffect(() => {
        const fetchData = async () => {
            try {
                var chunks = []
                const q = query(db, where('_id', '==', parseInt(router.query.id.toString())))
                const docs = await getDocs(q);
                console.log(docs)
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
    }, [router.query.id]);



    return (
        <Fragment>
            <section
                className='hero is-light is-medium is-family-secondary'>
                <div className='hero-body'>
                    <div className='container'>
                        <div className="">
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
                                                        <h2 className='title is-4 has-text-black'>{podcast.title ? podcast.title : ""}</h2>
                                                        <p className='subtitle is-6 has-text-dark'>{podcast.createdAt.toDate() ? podcast.createdAt.toDate().toLocaleString() : ""}</p>
                                                        <hr />
                                                        <pre className='subtitle is-6-mobile is-5-tablet' style={{textAlign: 'left', overflow: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word', padding: 0}}>{podcast.discription ? podcast.discription : ""}</pre>
                                                        <hr className='devider' />
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}
