import { addDoc, collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../db/firebaseConfig';



// Bring full data from Firebase

export const fetchProductData = async (collectionName) => {
  const collectionRef = collection(db, collectionName);
  const rawData = await getDocs(collectionRef);
  const cleanData = rawData.docs.map( doc => ({ ...doc.data(), id: doc.id }) );
  // console.log(cleanData);
  return cleanData;
}

// Create a new collection TODO: 
// export const createCollection = async () => {
//   const collectionRef = collection(db, 'lines');
//   await addDoc(collectionRef, {})
// }

// Create new document TODO: 


// Edit a collection TODO: 


// Edit a document TODO: 

