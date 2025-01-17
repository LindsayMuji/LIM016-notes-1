import { db } from './config'

import {
    collection,
    addDoc,
    doc,
    getDoc,
    query,
    where,
    getDocs,
    deleteDoc,
    updateDoc
} from "firebase/firestore";

export const addNote = (note) => {
    return addDoc(collection(db, 'notes'), note);
};

const queryGetNotesByUserAndState = (userId, state) => query(collection(db, "notes"), where("userId", "==", userId), where("state", "==", state));
export const getNotesByUserAndState =  (userId, state) => getDocs(queryGetNotesByUserAndState(userId, state));
export const getNote = (id) => getDoc(doc(db, 'notes', id));
export const deleteNote = (id) => deleteDoc(doc(db, 'notes', id));
export const updateStateNote = (idNote, state) => updateDoc(doc(db, 'notes', idNote), {state:state});
export const updateNote = (idNote, note) => updateDoc(doc(db, 'notes', idNote), {title:note.title, description:note.description});