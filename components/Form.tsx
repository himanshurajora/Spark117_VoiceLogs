import { Fragment, useRef } from "react";
import Layout from "./Layout";
import {} from 'firebase/storage'
import {} from 'firebase/firestore'

export default function NewForm(props) {

    const nameRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        props.onSubmit({
            name
        })
    }


    return (
        <Fragment>
            <h1>New Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" style={{width: "80%", fontSize: 20}} placeholder="Enter the title" ref={nameRef} />
                <br />
                <br />
                <textarea name="discription" style={{width: "80%", fontSize: 20}} placeholder="Enter the discription"></textarea>
                <br /><br />
                <input type="submit" style={{padding: 10, fontSize: 20}} value="Submit" />
            </form>
        </Fragment>
    )

}