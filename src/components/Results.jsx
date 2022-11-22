import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import React , {useEffect, useState} from 'react'
import { db } from '../FirebaseConfig'
import FailedQuiz from './FailedQuiz'
import PassedQuiz from './PassedQuiz'




function Results({name , correctAnswer , api , setCorrectAnswer , newArray , setNewArray}) {
  const addNewDocFirebase = async () => {
    const docRef = await addDoc(userCollectionRef , {name: name , score: correctAnswer})
     console.log(docRef)
  }
  const [ userData , setUserData ] = useState([])
  const userCollectionRef = collection(db , 'users')
  console.log(userData)
  useEffect(() => {
    if(!name || !correctAnswer) {
      return
    } else {
    onSnapshot(collection(db , 'users'), (snapshot) => {setUserData(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))})
    addNewDocFirebase()
    
  }
    
  },[])
  return (
    <div>
      {correctAnswer >= 5 ? <PassedQuiz name={name} correctAnswer={correctAnswer} api={api} setCorrectAnswer={setCorrectAnswer} newArray={newArray} setNewArray={setNewArray} />
       : 
      <FailedQuiz name={name} correctAnswer={correctAnswer} api={api} setCorrectAnswer={setCorrectAnswer} newArray={newArray} setNewArray={setNewArray} />
      }
      
      
    </div>
  )
}

export default Results