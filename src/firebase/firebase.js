import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { collection,addDoc ,getDocs, doc, getDoc, query, where } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAz-Z_lX8ng93twzY4zs2WJ6Jvq7hs6M-w",
  authDomain: "crudcodermurugosa.firebaseapp.com",
  projectId: "crudcodermurugosa",
  storageBucket: "crudcodermurugosa.appspot.com",
  messagingSenderId: "444864023037",
  appId: "1:444864023037:web:3fe179bff80c44a14d3194"
};

const collectionNameItems = "preentrega1";
const collectionNameOrders = "orders";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const itemsCollection = collection(db, collectionNameItems)
const checkoutsCollection = collection(db, collectionNameOrders)

export const obtenerProductos = () => {
  return new Promise((resolve, reject) => {
    const data = getDocs(itemsCollection)
    resolve(data);
  });
};

export const obtenerProductoPorId = (id) => {
  return new Promise((resolve, reject) => {
    getDoc(doc(db,collectionNameItems,id)).then(((doc)=>{
    return resolve(doc.data())
    }))
  });
};

export const obtenerProductosPorCategoria = (categoria) => {
  return new Promise((resolve, reject) => {
    const q = query(collection(db,collectionNameItems), where("category", "==", categoria));
    const data = getDocs(q);
    resolve(data) 
  });
};

export const guardarCheckout = (checkout) => {
  return new Promise((resolve, reject) => {
      addDoc(checkoutsCollection, checkout)
    .then(((doc)=>{
      return resolve(doc.id)
      }))
    });
};



