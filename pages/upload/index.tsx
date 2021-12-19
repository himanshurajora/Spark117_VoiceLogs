import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import app from '../../services/firebase'
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import NewForm from "../../components/Form";
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import {getStorage, uploadBytes, ref, getDownloadURL} from 'firebase/storage'
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


    const handleSubmit = async (data) => {
        try {
            const { title, discription } = data;
            const file = data.file;
            const fileName = file.name;
            
            // upload file to firebase storage 
            const fileRef = ref(storage, fileName);
            const uploadTask = await uploadBytes(fileRef, file);
            const url = await getDownloadURL(fileRef);

            const podcast = {
                title,
                discription,
                user: user.uid,
                photoUrl: url,
                createdAt: new Date()
            }
            console.log(podcast)
            const docRef = await addDoc(db, podcast);
            console.log(docRef)
            setStatus('success')
        }
        catch (error) {
            console.log(error)
            setStatus('error')
        }
    }

    return (
        <Fragment>
            <img src={photoUrl} alt="My Profile" />
            <h1>Welcome {displayName}</h1>
            <h3>{email}</h3>
            <NewForm onSubmit={handleSubmit} />
            <p>{status}</p>
        </Fragment>
    )
}