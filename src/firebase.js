import { initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, getDoc, getDocs, getFirestore, updateDoc, doc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCKX7dgcqiCUuuHq7yWkWhpCZ5m-RhdOsc",
  authDomain: "entregafinalreact-4c55a.firebaseapp.com",
  projectId: "entregafinalreact-4c55a",
  storageBucket: "entregafinalreact-4c55a.appspot.com",
  messagingSenderId: "617603527790",
  appId: "1:617603527790:web:fd71120998f5cadcabe27f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const getProducts = async () => {
  const products = await getDocs(collection(db, "vehicles"))
  const items = products.docs.map(prod => {
    return { ...prod.data(), id: prod.id }
  })
  return items
}

export const getProduct = async (id) => {
  const product = await getDoc(doc(db, "vehicles", id))
  const item = { ...product.data(), id: product.id }
  return item
}

export const updateProduct = async (id, info) => {
  const state = await updateDoc(doc(db, "vehicles", id), info)
  return state
}

export const deleteProduct = async (id) => {
  const state = await deleteDoc(doc(db, "vehicles", id))
  return state
}

export const createBuyOrder = async (client, totalPrice, date) => {
  const buyOrder = await addDoc(collection(db, "buyOrders"), {
    completeName: client.name,
    email: client.email,
    dni: client.dni,
    address: client.address,
    phone: client.phone,
    date: date,
    totalPrice: totalPrice
  })
  return buyOrder
}

export const getBuyOrder = async (id) => {
  const buyOrder = await getDoc(doc(db, "buyOrders", id))
  const item = { ...buyOrder.data(), id: buyOrder.id }
  return item
}