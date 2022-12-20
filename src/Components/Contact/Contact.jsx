import React,{useState} from 'react'
// import Add from '../Add/Add';

import './Contact.css'; 
export default function Contact({list,contactlist,deletedata,editdata, editdetails,editlist}) {
  // console.log(editdetails)
  // console.log(editdata)
  // console.log(list)
  // console.log(deletedata)
 
 const[output,setoutput]=useState({})
  const[update,setupdate]=useState(editdetails)
 
// const[reg,setreg]=useState({})

const setRegister=(event)=>{
event.preventDefault();
const{name,value}=event.target
setoutput({
  ...output,[name]:value
})
}
const InlineEdit=(event)=>{
  const{name,value}=event.target
  setupdate({
    ...update,[name]:value
  })
  console.log(update)
}

const registerSubmit=(event)=>{
    event.preventDefault();
    list(output)
    console.log(output)
    setoutput({name:"",email:""})

   
}
const editsubmit=(event)=>{
  event.preventDefault();
  editlist(update)
  deletedata(update.name)
  console.log(update)
  setupdate({name:output.name,email:output.email})
}
// const InlineEdit = ({ editdetails }) => {
//   // const [update, setupdate] = useState(value);
  
//   const onChange = (event) => setupdate(event.target.value);
// }

const rendercontactlist=contactlist.map((cont)=>
<div class="container">
  <div id="h1">
<span id="spe">Name: {cont.name}</span>
 
<span id="spa"> Email: {cont.email}</span>
<input type="button" value="Delete"id="button" onClick={()=>deletedata(cont.name)}/>
  <input type="button" value="Edit"id="button"onClick={()=>editdata(cont.name)}/><br /><br />
 
</div>
</div>
)






  return (
    
   <>
   {editdetails[0]==null?<>
   <form onSubmit={registerSubmit}>
    
   <h1 id='contactlist'>Contact List</h1>
   <hr/>
   <div className='details'>
   <h2>Add Details</h2>
   <div>
     <label>Name</label></div>
     <input type="text" id="text" name="name" value={output.name||""}onChange={setRegister}/> <br /><br />
    
  <div><label>Email</label></div>

  <input type="email"id="text" name="email" value={output.email||""}onChange={setRegister}/><br /><br />
  <div>
<input type="submit" value="Add"id="button"onClick={rendercontactlist}/>
 
 
   </div></div>

  
  
</form><br /><br />

<div>
  {rendercontactlist}
</div>
</>

 
:<>
<form  method="post" onSubmit={editsubmit}>
    
   <h1 id='contactlist'>Contact List</h1>
   <hr/>
   <div className='details'>
   <h2>Add Details</h2>
   <div>
     <label>Name</label></div>
     <input type="text" id="text" name="name" value={update[0]?.name} onChange={InlineEdit}/> <br /><br />
    
  <div><label>Email</label></div>

  <input type="email"id="text" name="email" value={update[0]?.email} onChange={InlineEdit}/><br /><br />
  <div>
<input type="submit" value="Update"id="button"/>
  
 
 
   </div></div>

  
  
</form><br /><br />

<div>
  {rendercontactlist}
</div>
</>
} 
   </>
  )


 
}
