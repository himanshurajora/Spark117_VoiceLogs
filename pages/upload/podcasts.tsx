import { useState, useEffect } from "react";
import { getStorage, uploadBytesResumable, ref, getDownloadURL, deleteObject } from 'firebase/storage'
import app from '../../services/firebase'
import { getFirestore, collection, addDoc, getDocs, deleteDoc, DocumentReference, onSnapshotsInSync } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useAuthState } from "react-firebase-hooks/auth";
import NewForm from "../../components/Form";
import { getAuth } from "firebase/auth";
export default function Podcast() {

    const [status, setStatus] = useState('');
    const storage = getStorage(app);
    const auth = getAuth(app);
    const [podcasts, setPodcasts] = useState([]);
    const [loadingPodcasts, setLoadingPodcasts] = useState(true);
    const [errorPodcasts, setErrorPodcasts] = useState('');
    const [progress, setProgress] = useState(0);
    const firestore = getFirestore(app);
    const db = collection(firestore, 'podcasts');
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
                setLoadingPodcasts(false);
            } catch (error) {
                setErrorPodcasts(error);
            }
        };
        fetchData();
    }, [db]);

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
        setLoadingPodcasts(false);
    }, [value, valueLoad, valueError]);


    const handleSubmit = async (data) => {
        try {
            const { title, discription } = data;
            const file = data.file;
            const fileName = file.name;

            if (title === '' || discription === '' || file === '') {
                setStatus('Please fill in all the fields');
            }
            else {
                setStatus('Uploading...');
                setProgress(0);
                // upload file to firebase storage 
                const fileRef = ref(storage, fileName);
                let uploadTask = uploadBytesResumable(fileRef, file);

                // get percentage of upload
                uploadTask.on('state_changed', (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setProgress(progress);
                }, (error) => {
                    console.log(error);
                }, () => {
                    setStatus('Upload Complete');
                });


                const url = await getDownloadURL(fileRef);

                const podcast = {
                    title,
                    discription,
                    user: user.uid,
                    audioUrl: url,
                    createdAt: new Date()
                }

                let docRef = await addDoc(db, podcast);


            }
        }
        catch (error) {
            console.log(error);
            setStatus("error");
        }

    }

    const deletePodcast = async (url: string, podcastRef: DocumentReference) => {
        try {
           
            if(confirm('Are you sure you want to delete this podcast?')){
                const fileRef = ref(storage, url);
                await deleteObject(fileRef);
                await deleteDoc(podcastRef);
                setStatus('Deleted Successfully');
            }
            else{
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
                        <NewForm onSubmit={handleSubmit} />
                        <br />
                        <progress className="progress is-info" value={progress} max="100" />
                        {/* <p className="title is-6">Upload Progress {progress}%</p> */}
                    </div>
                </div>
            </section>
        <hr />
            <p className="title is-4 has-text-warning">{status}</p>
            <div>
                <h2 className="title is-2">Uploaded Podcasts</h2>
                {
                    loadingPodcasts ?
                        <p className="title is-4">Loading...</p>
                        :
                        <ul>
                            {
                                podcasts.map(podcast => (
                                    <li key={podcast.data.title}>
                                        <h2 className="title is-4">{podcast.data.title}</h2>
                                        <p className="subtitle is-5">{podcast.data.discription}</p>
                                        <audio controls src={podcast.data.audioUrl}></audio>
                                        <button className="button is-danger" onClick={() => {
                                            deletePodcast(podcast.data.audioUrl, podcast.ref)
                                        }}>Delete</button>
                                        <hr />
                                    </li>
                                ))
                            }
                        </ul>
                }
            </div>
        </>
    )

}