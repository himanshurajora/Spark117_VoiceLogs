import { useState, useEffect } from "react";
import { getStorage, uploadBytesResumable, ref, getDownloadURL, deleteObject } from 'firebase/storage'
import app from '../../services/firebase'
import { getFirestore, collection, addDoc, getDocs, deleteDoc, DocumentReference, onSnapshotsInSync } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import BlogForm from "../../components/BlogForm";
export default function Podcast() {

    const [status, setStatus] = useState('');
    const auth = getAuth(app);
    const [podcasts, setPodcasts] = useState([]);
    const [loadingBlogs, setLoadingBlogs] = useState(true);
    const [errorPodcasts, setErrorPodcasts] = useState('');
    const [progress, setProgress] = useState(0);
    const firestore = getFirestore(app);
    const db = collection(firestore, 'blogs');
    const [value, valueLoad, valueError] = useCollection(db, {
        snapshotListenOptions: { includeMetadataChanges: true },
    });
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        const fetchData = async () => {
            try {
                var chunks = []
                const docs = await getDocs(db);
                docs.forEach(doc => {
                    chunks.push({
                        ref: doc.ref,
                        data: doc.data()
                    })

                })
                setPodcasts(chunks);
                setLoadingBlogs(false);
            } catch (error) {
                setErrorPodcasts(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (valueLoad) return;
        if (valueError) {
            setErrorPodcasts(valueError.message);
            return;
        }
        const chunks = [];
        value.forEach(doc => {
            chunks.push({
                ref: doc.ref,
                data: doc.data()
            })
        });
        setPodcasts(chunks);
        setLoadingBlogs(false);
    }, [value, valueLoad, valueError]);


    const handleSubmit = async (data) => {
        try {
            const { title, discription } = data;

            if (title === '' || discription === '') {
                setStatus('Please fill in all the fields');
            }
            else {
                setStatus('Uploading...');
                setProgress(0);
                // upload file to firebase storage 

                const podcast = {
                    title,
                    discription,
                    user: user.uid,
                    createdAt: new Date(),
                    _id: Date.now()
                }

                let docRef = await addDoc(db, podcast);
                setStatus('Successfully uploaded');
            }
        }
        catch (error) {
            setStatus("error");
        }

    }

    const deleteBlog = async (podcastRef: DocumentReference) => {
        try {

            if (confirm('Are you sure you want to delete this podcast?')) {
                await deleteDoc(podcastRef);
                setStatus('Deleted Successfully');
            }
            else {
                setStatus('Cancelled');
            }
        }
        catch (error) {
            setStatus('error')
        }
    }


    return (
        <>
            <section
                className='hero is-white is-medium is-family-secondary'>
                <div className='hero-body'>
                    <div className='container has-text-centered'>
                        <BlogForm
                            onSubmit={handleSubmit}
                        />

                    </div>
                </div>
            </section>
            <hr />
            <p className="title is-4 has-text-warning has-text-centered">{status}</p>
            <div className="has-text-centered">
                <h2 className="title is-2 has-text-centered">Uploaded Blogs</h2>
                {
                    loadingBlogs ?
                        <p className="title is-4">Loading...</p>
                        :
                        <ul>
                            {
                                podcasts.length ?

                                    podcasts.map(podcast => (
                                        <li key={podcast.data.title}>
                                            <h2 className="title is-4">{podcast.data.title}</h2>
                                            <p className="subtitle is-5">{podcast.data.discription}</p>
                                            <p className="subtitle is-5">{podcast.data.createdAt.toDate().toLocaleString()}</p>
                                            <button className="button is-rounded is-danger" style={{ marginLeft: 10, marginTop: 8 }} onClick={() => {
                                                deleteBlog(podcast.ref)
                                            }}>Delete</button>
                                            <hr />
                                        </li>
                                    ))
                                    :
                                    <p className="title is-4">No Blogs Uploaded</p>
                            }
                        </ul>
                }
            </div>
        </>
    )

}