// src/useNotes.js
import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";

export function useNotes(uid) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uid) return;

    // Real-time listener scoped to this user's subcollection
    const q = query(
      collection(db, "users", uid, "notes"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setNotes(data);
      setLoading(false);
    });

    return unsubscribe;
  }, [uid]);

  async function addNote(title, body) {
    await addDoc(collection(db, "users", uid, "notes"), {
      title,
      body,
      createdAt: serverTimestamp(),
    });
  }

  async function updateNote(id, changes) {
    await updateDoc(doc(db, "users", uid, "notes", id), changes);
  }

  async function deleteNote(id) {
    await deleteDoc(doc(db, "users", uid, "notes", id));
  }

  return { notes, loading, addNote, updateNote, deleteNote };
}
