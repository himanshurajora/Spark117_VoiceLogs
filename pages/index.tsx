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
            <div className="notification is-light">
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
          </div>
        </div>
      </section>
      <section className='section section--gradient has-background-light'>
        <div className='container has-text-black'>
          <div className="has-text-light">
            <p className="title is-2 has-text-centered">Skills</p>
            <p className="subtitle has-text-centered has-text-black">
              <p className="title is-4">Skills that I have acquired over the years.</p>
              <br />
              I started my journey in programming with C# and made a lot of Console Applications and Games using Unity Game Engine to learn the basic concepts.
              Then I started learning HTML, CSS and PHP while I was not aware of Javascript but indirectly using it.
              I just had some rough idea about it because I was using JQuery along with PHP.
              I worked on many projects with PHP, Learned MySql database, Webhosting, CPanel, Domain Registration, and much more.
              Then I finally started using Javascript and I liked it so much that I made it my main programming language that I use daily.
              I have been working on ReactJS, NodeJS, Angular, NextJS, and many more Javascript frameworks and platforms.
              Since then I have been working on many web projects and have been learning new things.
              I and also working with some extra skills like React Native, Python, Git, C, Firebase, MongoDB, Computer Graphics, Operating Systems etc.
            </p>
            <hr />
            <div className="is-light">
              <p className="title is-3 has-text-black">
                Here's a list of my skills.
              </p>
              <hr />
              <ul className='notification is-white'>
                <li>
                  <div className="columns">
                    <div className="column is-4">
                      <p className="title is-5">
                        JavaScript
                      </p>
                    </div>
                    <div className="column is-6">
                      <progress className='progress is-primary' max={100} value={90}></progress>
                    </div>
                  </div>
                </li>
                <hr />
                <li>
                  <div className="columns">
                    <div className="column is-4">
                      <p className="title is-5">
                        TypeScript
                      </p>
                    </div>
                    <div className="column is-6">
                      <progress className='progress is-info' max={100} value={85}></progress>
                    </div>
                  </div>
                </li>
                <hr />
                <li>
                  <div className="columns">
                    <div className="column is-4">
                      <p className="title is-5">
                        PHP
                      </p>
                    </div>
                    <div className="column is-6">
                      <progress className='progress is-dark' max={100} value={70}></progress>
                    </div>
                  </div>
                </li>
                <hr />
                <li>
                  <div className="columns">
                    <div className="column is-4">
                      <p className="title is-5">
                        HTML & CSS
                      </p>
                    </div>
                    <div className="column is-6">
                      <progress className='progress is-danger' max={100} value={84}></progress>
                    </div>
                  </div>
                </li>
                <hr />
                <li>
                  <div className="columns">
                    <div className="column is-4">
                      <p className="title is-5">
                        Python
                      </p>
                    </div>
                    <div className="column is-6">
                      <progress className='progress is-success' max={100} value={65}></progress>
                    </div>
                  </div>
                </li>
                <hr />
                <li>
                  <div className="columns">
                    <div className="column is-4">
                      <p className="title is-5">
                        C/C++
                      </p>
                    </div>
                    <div className="column is-6">
                      <progress className='progress is-link' max={100} value={70}></progress>
                    </div>
                  </div>
                </li>

              </ul>

              <p className="subtitle is-4 has-text-black">
                Along with these technologies I use some softwares, platforms and frameworks like -
                <p className="subtitle is-5 has-text-black">
                  <br />
                  <ul className='is-white'>
                    <li>
                      ReactJS, NodeJS, Angular, NextJS for web development.

                    </li>
                    <li>
                      QT and dotnet for Desktop Applications.

                    </li>
                    <li>
                      Apache2 for Server Side Applications.

                    </li>
                    <li>
                      MySQL, MongoDB, Firestore for Database.

                    </li>
                    <li>

                      Git, Github for version control.
                    </li>
                    <li>

                      VSCode, Atom, Vim etc for code editing.
                    </li>
                    <li>

                      Linux and Windows for Operating Systems.
                    </li>
                  </ul>







                </p>

              </p>

            </div>
          </div>
          <div>
          </div>
        </div>
      </section>
    </Fragment >
  )
}
