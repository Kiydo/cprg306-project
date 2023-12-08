import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, arrayUnion, doc, updateDoc, where, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export const getPhotos = async (user) => {
    console.log('photos are brewing');
    console.log('user: ', user);
    console.log('user.uid in getPhotos: ', user.uid);
    try {
        const q = query(
            collection(db, 'savedPhotos'),
            // collection(db, 'savedPhotos', user.uid),
            where('userId', '==', user.uid)
        );
        // const q = collection(db, 'savedPhotos', user.uid, 'photos');
        console.log('q: ', q);
        console.log('Constructed Query:', q._query);
        const querySnapshot = await getDocs(q);
        const savedPhotos = [];
        querySnapshot.forEach((doc) => {
            console.log('Document ID:', doc.id);
            console.log('Document Data:', doc.data());
            savedPhotos.push(doc.data());
        });
        return savedPhotos;
    } catch (error) {
        console.error('Error retrieving saved photos:', error);
    
        if (error instanceof Error && error.message) {
            console.error('Error message:', error.message);
        }
    
        return [];
    }
    
};

export const savePhoto = async (user, photo) => {
    try {
        const userRef = doc(db, 'savedPhotos', user.uid);
        await setDoc(userRef, { photos: arrayUnion(photo) }, { merge: true });
        console.log('Photo saved successfully!');
    } catch (error) {
        console.error('Error saving photo:', error);
    }
};