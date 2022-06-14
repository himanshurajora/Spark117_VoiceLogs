import Head from 'next/head'
import Footer from "./footer/Footer"
import Navbar from "./navbar/Navbar"
export default function Layout(props) {
    return (
        <>
            <Head>
                <title>Himanshu Jangid | Portfolio | A Web Developer and Computer Science Engineer</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Himanshu Jangid Portfolio, himanshurajora, himanshu jangid, himanshu rajora, wisflux himanshu jangid, vcf, vedik cyber forces, himanshu vcf, himanshu vedik cyber forces" />
                <meta property="og:locale" content="en_IN" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Himanshu Jangid Portfolio" />
                <meta property="og:description" content="Himanshu Jangid, himanshu rajora portfolio, vcf, wisflux" />
                <meta property="og:url" content="https://himanshurajora.vercel.app" />
                <meta property="og:site_name" content="Neoistone: Best Web Development and Hosting services" />
                <meta name="theme-color" content="#222222" />
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