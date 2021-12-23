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
      <section
        className='hero is-light is-medium is-family-secondary'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <h2 className='title is-1'>
              Hello World!
              {/* &lt;p&gt; Hello World!&lt;/p&gt;  */}
            </h2>
            <h2 className='title is-3'>
              I am Himanshu Jangid, The Founder of VCF
            </h2>
            <p className='subtitle is-family-secondary'>
              Welcome to Vedik Logs, My Personal Website for Portfolio, Blogs and Podcasts.
            </p>
            <br />
            <div className="buttons is-centered">
            <Link href={"/blogs"}>
              <a className='button is-danger is-outlined'>
                Read My Blogs 📖🥸
              </a>
            </Link>
            <Link href={"/podcasts"}>
              <a className='button is-info is-outlined'>
                Listen to My Podcasts 🎧😄
              </a>
            </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='section section--gradient'>
        <div className='container'>
          <div className="box notification is-white">
            <p className="title is-2 has-text-centered">About Me</p>
            <p className="subtitle has-text-centered">
              Diligent web developer and software engineer with
              over 2 years of experience. Eager to get new
              opportunities and work on large scale projects.
              Skilled in developing plans, managing projects, and
              code documentation. currently working on NodeJS
              and React.
            </p>
            <div className="box notification is-light">
              <p className="title is-4">
                More About Me😁
              </p>
              <p className="subtitle">
                I like to explore and research
                new subjects. My hobbies are
                dancing, listening, and
                making music. I put
                experience above knowledge.
              </p>
            </div>
          </div>
          <div>
            {/* <h2>Here Are My Podcasts</h2>
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
            } */}
          </div>
        </div>
      </section>
    </Fragment >
  )
}
