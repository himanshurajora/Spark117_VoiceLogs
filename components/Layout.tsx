import { Fragment } from "react"
import Navbar from "./navbar/Navbar"
import Animation from "./animation/Animation"
import Footer from "./footer/Footer"
import Head from 'next/head'
export default function Layout(props) {
    return (
        <>
            <Head>
                <title>VL - Portfolio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar></Navbar>
            <main>
            {/* <Animation></Animation> */}
                {props.children}
            </main>
            <Footer></Footer>
        </>
    )
}