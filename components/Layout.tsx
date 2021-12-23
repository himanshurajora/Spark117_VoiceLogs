import { Fragment } from "react"
import Navbar from "./navbar/Navbar"
import Animation from "./animation/Animation"
export default function Layout(props) {
    return (
        <Fragment>
            <Navbar></Navbar>
            <main>
            {/* <Animation></Animation> */}
                {props.children}
            </main>
        </Fragment>
    )
}