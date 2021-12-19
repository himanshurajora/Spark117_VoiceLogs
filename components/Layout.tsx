import { Fragment } from "react"
import Navbar from "./Navbar"
export default function Layout(props) {
    return (
        <Fragment>
            <Navbar></Navbar>
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}