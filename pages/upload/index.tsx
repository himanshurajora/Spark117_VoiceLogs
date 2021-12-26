import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import app from '../../services/firebase'
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import {useCollection} from 'react-firebase-hooks/firestore'
import NewForm from "../../components/Form";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, DocumentReference, onSnapshotsInSync } from 'firebase/firestore'
import { getStorage, uploadBytesResumable, ref, getDownloadURL, deleteObject } from 'firebase/storage'
import Image from 'next/image'
export default function Upload() {
    const router = useRouter();
    const auth = getAuth(app);
    const [user, loading, error] = useAuthState(auth);
    const firestore = getFirestore(app);
    const db = collection(firestore, 'podcasts');
    const [status, setStatus] = useState('');
    const [photoUrl, setphotoUrl] = useState('');
    const [displayName, setdisplayName] = useState('');
    const [email, setemail] = useState('');
    const storage = getStorage(app);
    const [podcasts, setPodcasts] = useState([]);
    const [loadingPodcasts, setLoadingPodcasts] = useState(true);
    const [errorPodcasts, setErrorPodcasts] = useState('');
    const [progress, setProgress] = useState(0);
    const [value, valueLoad, valueError] = useCollection(db, {
        snapshotListenOptions: { includeMetadataChanges: true },
    });
    // wait for loading to be false and if user is not logged in, redirect to home
    useEffect(() => {
        if (loading) return;
        if (!user) router.push('/');
        else {
            setdisplayName(user.displayName);
            setemail(user.email);
            setphotoUrl(user.photoURL);
        }
    }, [loading, user, router]);

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
            const fileRef = ref(storage, url);
            await deleteObject(fileRef);
            await deleteDoc(podcastRef);

            setStatus('success')
        }
        catch (error) {

            setStatus('error')
        }
    }


    return (
        <Fragment>
            <Image src={photoUrl} alt="My Profile" />
            <h1>Welcome {displayName}</h1>
            <h3>{email}</h3>
            <NewForm onSubmit={handleSubmit} />
            <p>Upload Progress {progress}%</p>
            <progress value={progress} max="100" />
            <p>{status}</p>
            <div>
                <h2>Uploaded Podcasts</h2>
                {
                    loadingPodcasts ?
                        <p>Loading...</p>
                        :
                        <ul>
                            {
                                podcasts.map(podcast => (
                                    <li key={podcast.data.title}>
                                        <h2>{podcast.data.title}</h2>
                                        <p>{podcast.data.discription}</p>
                                        <audio controls src={podcast.data.audioUrl}></audio>
                                        <button onClick={() => {
                                            deletePodcast(podcast.data.audioUrl, podcast.ref)
                                        }}>Delete</button>
                                    </li>
                                ))
                            }
                        </ul>
                }
            </div>
        </Fragment>
    )
}