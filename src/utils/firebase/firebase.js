import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDpWCfgEkDcAvl89uFUCGqmW0G040-qX7Q",
    authDomain: "crwn-clothing-db-de9d5.firebaseapp.com",
    projectId: "crwn-clothing-db-de9d5",
    storageBucket: "crwn-clothing-db-de9d5.appspot.com",
    messagingSenderId: "378999428921",
    appId: "1:378999428921:web:07f03be282d59a846ebae8"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('Error creating user', error.message)
        }
    }
    return userDocRef
}