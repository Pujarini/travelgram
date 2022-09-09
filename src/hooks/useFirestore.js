import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

const useFireStore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, collectionName),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const documents = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data(), "data");
        documents.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setDocs(documents);
    });

    return () => unsubscribe();
    // eslint-disable-next-line
  }, [collectionName]);

  return {
    docs,
  };
};

export default useFireStore;
