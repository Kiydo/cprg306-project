import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, arrayUnion, doc, updateDoc, where, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export const getPhotos = async (user) => {
    try {
        const q = query(
            collection(db, 'savedPhotos'),
            where('userId', '==', user.uid)
        );
        const querySnapshot = await getDocs(q);
        const savedPhotos = [];
        querySnapshot.forEach((doc) => {
            savedPhotos.push(doc.data());
        });
        return savedPhotos;
    } catch (error) {
        console.error('Error retrieving saved photos:', error);
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