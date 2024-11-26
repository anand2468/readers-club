import { useEffect, useState, useContext } from 'react'
import { db } from './services/service'
import {collection, query, getDocs, getDoc, onSnapshot, CollectionReference, addDoc } from "firebase/firestore"
import './App.css'
import {AuthContext, AuthProvider} from './contexts/Authcontext'

function App() {

  const getdata = async()=>{
    let col = collection(db, "reviews")
    let snap = await getDocs(col)
    let data = snap.docs.map(doc => doc.data())
    console.log(data)

  }

  const putdata = async()=>{
    let col = collection(db, "reviews")
    let snap = await addDoc(col, {status: "published", 
      content: "hehe nee website lo loop hole kanipetta gaa ..... >.<",
       title: "your website got hacked",
       posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRix7T7aXlUTQMaHiCYt1lLXU-PJhu1yp11Q&s",
    })
    console.log(snap.id)
  } 
  const contexts = useContext(AuthContext)
  return (
    <h1>loading data {(contexts.user)? "no user": "found user"} </h1>
  )
}

export default App
