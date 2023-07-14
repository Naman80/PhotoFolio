import React,{useState} from 'react'
import ImageList from './ImageList'
import ImageForm from './ImageForm'

// import firebase methods here
import {doc, collection, addDoc, updateDoc,getDocs} from "firebase/firestore";
import { db } from "../firebaseInit";

function Album({album_id}) {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="m-3">
      {showForm && <ImageForm />}      
        <div>Images in album with id {album_id}
        <button
          className={`btn ${
            showForm ? "btn-outline-danger" : "btn-outline-primary"
          }`}
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          {showForm ? "Cancel" : "Add Image"}
        </button>
        </div>
        <ImageList/>
    </div>
  )
}

export default Album