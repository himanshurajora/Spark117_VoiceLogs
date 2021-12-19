import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Fragment } from 'react'
import Link from 'next/link'
import NewForm from '../components/Form'
 
export default function Home() {

  

  return (
    <Fragment>
      <div className={styles.container}>
        <h1 className='title'>My Podcasts - Spiral117</h1>
      </div>
    </Fragment>
  )
}
