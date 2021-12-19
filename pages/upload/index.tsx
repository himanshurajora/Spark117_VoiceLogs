import { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import app from '../../services/firebase'
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import NewForm from "../../components/Form";
// import {} from 'react-firebase-hooks/storage'
export default function Upload() {
    const router = useRouter();
    const auth = getAuth(app);
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        
    }, [])

    return (
        <Fragment>
            <img src={user.photoURL} alt="My Profile" />
            <h1>Welcome {user.displayName}</h1>
            <NewForm>
                
            </NewForm>
        </Fragment>
    )
}