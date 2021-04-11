import React, {useState} from "react";
import {  db } from './firebase/firebase';
 const firebaseData = () => {

    const [initialProductsData, initialdata] = useState(null);
    
    db.collection("productDb")
    .get()
    .then(querySnapshot => {
         initialdata(querySnapshot.docs.map(doc => doc.data())) 
        
        });
 return initialProductsData
}
export default firebaseData