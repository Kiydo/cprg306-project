import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, arrayUnion, doc, updateDoc, where, setDoc, arrayRemove } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export const getPhotos = async (user) => {
    try {
        const q = query(
            collection(db, 'savedPhotos'),
            // collection(db, 'savedPhotos', user.uid),
            where('userId', '==', user.uid)
        );
        // const q = collection(db, 'savedPhotos', user.uid, 'photos');
        const querySnapshot = await getDocs(q);
        const savedPhotos = [];
        querySnapshot.forEach((doc) => {
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
        await setDoc(userRef, { userId: user.uid, photos: arrayUnion(photo) }, { merge: true });
        console.log('Photo saved successfully!');
    } catch (error) {
        console.error('Error saving photo:', error);
    }
};

export const deletePhoto = async (userId, photoId) => {
    try {
        const userRef = doc(db, 'savedPhotos', userId);
        await updateDoc(userRef, {
            photos: arrayRemove({ id: photoId })
        });
        console.log('Photo deleted successfully!');
    } catch (error) {
        console.error('Error deleting photo:', error);
        throw error;
    }
};