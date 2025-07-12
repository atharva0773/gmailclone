import React, { useEffect, useState } from "react";
import Message from "./Message";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import { setEmails } from "../redux/AppSlice";
import { useDispatch, useSelector } from "react-redux";

const Messages = () => {
  const dispatch = useDispatch();
  const { searchText, emails } = useSelector((store) => store.app);
  const [TempEmail, setTempEmail] = useState(emails);

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

  useEffect(() => {
    const filteredEmail = emails?.filter((email) => {
      return (
        email?.subject?.toLowerCase().includes(searchText.toLowerCase()) ||
        email?.to?.toLowerCase().includes(searchText.toLowerCase()) ||
        email?.message?.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setTempEmail(filteredEmail);
  }, [searchText, emails]);

  return (
    <div>
      {TempEmail &&
        TempEmail.map((email) => <Message key={email.id} email={email} />)}
    </div>
  );
};

export default Messages;
