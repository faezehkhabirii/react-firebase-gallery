import { useState , useEffect } from "react";
import { db ,storage } from "../firebase/config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


export const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)


    useEffect(() =>{
           const storageRef = ref(storage, file.name)

           const collectionRef = collection(db , 'images')

              const  UploadTask = uploadBytesResumable(storageRef, file)

         const unsub = UploadTask.on('state_changed' , (snapshot) => {
            const precentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setProgress(precentage)  
        }, (err) => {
            setError(err)
        }, async () =>{
           const downloadURL = await getDownloadURL(storageRef)
           setUrl(downloadURL)

           const createdAt = serverTimestamp()
            await addDoc(collectionRef , {url: downloadURL , createdAt})
        })
        return () => unsub()
    }, [file])

        return {progress, url, error}
    
    
}
export default useStorage
