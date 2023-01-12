import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, collection} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "proyecto-reactjs-coder-aa6e4.firebaseapp.com",
  projectId: "proyecto-reactjs-coder-aa6e4",
  storageBucket: "proyecto-reactjs-coder-aa6e4.appspot.com",
  messagingSenderId: "108839800595",
  appId: "1:108839800595:web:2d403fba833dcc2b74d4e6"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()

const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db,"productos"), { 
            nombre: prod.nombre,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}

export {cargarBDD}