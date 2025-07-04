import React, { useEffect } from "react";
import Message from "./Message";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";


const Messages = () => {
  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(collection(db, "emails"), (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(allEmails);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Message />
    </div>
  );
};

export default Messages;
