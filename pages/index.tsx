import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import NewForm from '../components/Form'
import app from '../services/firebase'
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
      <div className={styles.container}>
        <h1 className='title'>My Podcasts - Spark117</h1>
        <div>
          <h2>Here Are My Podcasts</h2>
          <p><strong>{error}</strong></p>
          {
            loading ?
              <p>Loading...</p>
              :
              <ul>
                {
                  podcasts.map(podcast => (
                    <li key={podcast.title}>
                      <h2 >{podcast.title}</h2>
                      <p >{podcast.discription}</p>
                      <audio controls src={podcast.audioUrl}></audio>
                    </li>
                  ))
                }
              </ul>
          }
        </div>
      </div>
    </Fragment>
  )
}
