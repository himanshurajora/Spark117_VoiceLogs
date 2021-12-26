import { Fragment, useRef } from "react";
import Layout from "./Layout";
import { } from 'firebase/storage'
import { } from 'firebase/firestore'


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
            <h1 className="title is-4">Upload Podcast Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <input type="text" className="input" name="title" autoComplete={"true"} required style={{ fontSize: 20 }} placeholder="Enter the title" ref={titleRef} />
                </div>
                <div className="field">
                    <textarea name="discription" className="input" autoComplete="true" required ref={discriptionRef} style={{ fontSize: 20, height: "150px" }} placeholder="Enter the discription"></textarea>
                </div>
                <div className="field">
                    <div className="file is-boxed">
                        <label className="file-label">
                            <input type="file" className="file-input" name="file" required ref={fileRef} style={{ fontSize: 20 }} />
                            <span className="file-cta">
                                <span className="file-icon">
                                    <i className="fas fa-upload"></i>
                                </span>
                                <span className="file-label">
                                    Choose a file…
                                </span>
                            </span>
                        </label>
                    </div>
                </div>
                <div className="feild">
                    <input className="button is-success" type="submit" style={{ padding: 10, fontSize: 20 }} value="Submit" />
                </div>
            </form>
        </Fragment>

    )

}