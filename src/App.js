// import logo from './logo.svg';
import './App.css';
import Contact from './Components/Contact/Contact';
import {BrowserRouter,Routes,Route, Navigate} from"react-router-dom";

import React,{useState, useEffect} from 'react'
function App() {
  const key ="data";
  const [data,setinputs]=useState(JSON.parse(localStorage.getItem(key))||[]);
  const [edit,setedit]=useState([])
console.log(data);
  const inputchangehandler=(contact)=>{
    setinputs([...data,{...contact}])
  }
 
  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(data))


},[data])
const deletecontactlist=(name)=>{
  const newcontactlist=data.filter(contact=>{
    console.log(name)
    return contact.name!==name;
   
  } 

  )
  setinputs(newcontactlist)
  Navigate('/')
  console.log(data);
}
const editcontactlist=(head)=>{
  const neweditlist=data.filter(contact=>{
    console.log("edit data",head)
    return contact.name===head;
  });
  setedit(neweditlist)
  // Navigate('/')
  console.log(edit);
}
const changevalue=(contact)=>{
  console.log(contact)
  setinputs([...data,{...contact}])
  console.log(data)
}


  return (
    <BrowserRouter>
     <Routes>
     <Route path="/"element={<Contact 
     list={inputchangehandler} 
     contactlist={data} 
     deletedata={deletecontactlist} 
     editdata={editcontactlist}
     editdetails={edit}
     editlist={changevalue}
     />}/>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
