import {
  ref,
  uploadBytesResumable,
  getDownloadURL
} from '@firebase/storage';
import {
  collection,
  doc,
  serverTimestamp,
  setDoc
} from "firebase/firestore";
import {
  useState,
  useEffect
} from 'react';
import {
  projectStorage,
  db
} from '../firebase/config';


const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  useEffect(() => {

    const storageRef = ref(projectStorage, file.name);
    const imagesRef = doc(collection(db, "images"));
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed", (snapshot) => {
      const progressPercent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progressPercent)
      console.log('Upload is ' + progressPercent + '% done');
    }, (err) => {
      setError(err);
    }, async () => {
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      await setDoc(imagesRef, {
        url: downloadURL,
        createdAt: serverTimestamp()
      });
      setUrl(downloadURL);
    })
  }, [file])
  return {
    progress,
    error,
    url
  }
}

export default useStorage;