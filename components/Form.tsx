import { Fragment, useRef } from "react";
import Layout from "./Layout";
import {} from 'firebase/storage'
import {} from 'firebase/firestore'


export default function NewForm(props) {

    const titleRef = useRef(null);
    const discriptionRef = useRef(null);
    const fileRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        props.onSubmit({
            title,
            discription: discriptionRef.current.value,
            file: fileRef.current.files[0]
        })
    }


    return (
        <Fragment>
            <h1>Upload Podcast Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" autoComplete={"true"} required style={{width: "80%", fontSize: 20}} placeholder="Enter the title" ref={titleRef} />
                <br />
                <br />
                <textarea name="discription" autoComplete="true" required ref={discriptionRef} style={{width: "80%", fontSize: 20}} placeholder="Enter the discription"></textarea>
                <br /><br />
                <input type="file" required name="file" ref={fileRef} />
                <input type="submit" style={{padding: 10, fontSize: 20}} value="Submit" />
            </form>
        </Fragment>
    )

}