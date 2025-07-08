import React, { useEffect } from "react";
import Message from "./Message";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import { setEmails } from "../redux/AppSlice";
import { useDispatch, useSelector } from "react-redux";

const Messages = () => {
const dispatch = useDispatch();
const {emails} =useSelector(store=>store.app)

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(setEmails(allEmails));
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      {emails &&
        emails.map((email) => <Message key={email.id} email={email} />)}
    </div>
  );
};

export default Messages;
