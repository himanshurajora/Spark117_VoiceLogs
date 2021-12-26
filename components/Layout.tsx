import { Fragment } from "react"
import Navbar from "./navbar/Navbar"
import Animation from "./animation/Animation"
import Footer from "./footer/Footer"
export default function Layout(props) {
    return (
        <>
            <Navbar></Navbar>
            <main>
            {/* <Animation></Animation> */}
                {props.children}
            </main>
            <Footer></Footer>
        </>
    )
}