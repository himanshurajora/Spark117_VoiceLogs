import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
// import NewForm from '../components/Form'
// import app from '../services/firebase'
// import { getFirestore, collection, getDocs } from 'firebase/firestore'

export default function Home() {
  return (
    <Fragment>
      <section
        className='hero is-light is-medium is-family-secondary'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <Image src="/sparkts.png" width={100} height={100} alt='spark117Logo'></Image>
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
            <p className="title is-4">Skills that I have acquired over the years.</p>
            <p className="subtitle has-text-centered has-text-black">
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
                Here is the list of my skills.
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
              </p>
              <p className="subtitle is-5 has-text-black">
                <br />
                ReactJS, NodeJS, Angular, NextJS for web development,
                QT and dotnet for Desktop Applications,
                Apache2 for Server Side Applications,
                MySQL, MongoDB, Firestore for Database,
                Git, Github for version control,
                VSCode, Atom, Vim etc for code editing,
                Linux and Windows for Operating Systems.
              </p>
            </div>
          </div>
          <div>
          </div>
        </div>
      </section>

      <section className='section section--gradient'>
        <div className='container'>
          <div className="notification is-white">
            <p className="title is-2 has-text-centered">Experience</p>
            <p className="subtitle has-text-centered">
              How would you know that I am good at what I do?
              The best way is to see my {'"Experience"'}
            </p>
            <hr />
            <div>
              <div className="columns is-multiline is-centered is-vcentered">
                <div className="column is-4">
                  <div className="notification card">
                    <div className="card-head">
                      <p className="title is-4">
                        Web Developer
                      </p>
                    </div>
                    <hr />
                    <div className="card-body">
                      <p className="subtitle is-6">
                        <strong> LetsGrowMore | Sept-2021 - Oct-2021</strong><br />
                        Developed React JS and PHP web applications
                        Educational Institutions{"'"} administers.
                        <br /> <br /><br />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="notification card">
                    <div className="card-head">
                      <p className="title is-4">
                        Web Developer
                      </p>
                    </div>
                    <hr />
                    <div className="card-body">
                      <p className="subtitle is-6">
                        <strong>  The Sparks Foundation | Aug-2021 - Sept-2021</strong><br />
                        Worked on REST APIs using NodeJS and MongoDB.
                        Payment Integration, Banking and Security.
                      </p>
                      <br />
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="notification card">
                    <div className="card-head">
                      <p className="title is-4">
                        Web Developer
                      </p>
                    </div>
                    <hr />
                    <div className="card-body">
                      <p className="subtitle is-6">
                        <strong>   Trible Connect: Connecting Our Roots | June-2021 -
                          Aug-2021</strong><br />
                        Worked with a small team as a full stack Web
                        Developer and Project Manager.
                        Designed the UI and deployed the project within the
                        decided timeline.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="subtitle is-5">
            This is just about my professional experience that I have certificates of.
            Apart from these I have worked on a big number of personal projects and Also participated in
            many hackathons. You can check some of them on my <a href="https://github.com/himanshurajora">Github</a>
          </p>
          <div>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>
          <div className="box notification is-white">
            <p className="title is-2 has-text-centered">Resume</p>
            <p className="subtitle has-text-centered">
              Download my {'"Resume"'}
            </p>
            <div className="notification columns is-light is-centered">
              <a href="https://www.jiocloud.com/share/?s=VdRj1X3M0-maNtTjItccSzNs-5psb9VdwE0ANRsHFTQNL3" className="button is-large is-primary">Click Here</a>
            </div>
          </div>
          <div>
          </div>
        </div>

      </section>
      <hr />
      <section className="section">
        <div className="container">
          <div className="notification is-light">
            <iframe style={{ height: '300px', width: '100%' }} loading="eager" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCYKGoBvxSupFJ5cnNqDf0cRMhYPKRckE0
    &q=Jaipur,Rajasthan">
            </iframe>
          </div>
            <p className="subtitle is-5 has-text-centered">
              I live somewhere in India. In Jaipur, Rajasthan to be more presice.
              Well, not fully presice, but I am sure you will find me there.
            </p>
        </div>
      </section>

    </Fragment >
  )
}
