
import { useEffect, useMemo, useRef, useState } from 'react'

export default function BlogForm(props) {

    const titleRef = useRef(null);
    const discriptionRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        props.onSubmit({
            title,
            discription: discriptionRef.current.value,
        })
    }

    return (
        <>
            <h1 className="title is-4">Upload Blogs Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <input type="text" className="input" name="title" autoComplete={"true"} required style={{ fontSize: 20 }} placeholder="Enter the title" ref={titleRef} />
                </div>
                <div className="field">
                    <textarea name="discription" className="input" autoComplete="true" required ref={discriptionRef} style={{ fontSize: 20, height: "150px" }} placeholder="Enter the discription"></textarea>
                </div>
                <div className="feild">
                    <input className="button is-success" type="submit" style={{ padding: 10, fontSize: 20 }} value="Submit" />
                </div>
            </form>
        </>
    )

}