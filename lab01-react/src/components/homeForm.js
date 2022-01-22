import React from 'react';
import {useState} from 'react';

function homeForm() {
  const resetButtonStyle ={margin:'5px',padding:'3px',fontsize:'25px', backgroundColor:'red',borderRadius:'8px'};
  const submitButtonStyle ={margin:'5px',padding:'3px',fontsize:'25px', backgroundColor:'green',borderRadius:'8px'};

  var name='Radhe';
  var email ='radhe@gmail.com';
  var enrollmentNo ='18ETCSB001';
  var mobile ='+91 1234567890';
  var marks='90'
  var setName=(newName)=>{
    name =newName;
  }
  var setEmail =(newEmail)=>{
    email =newEmail
  }
  //[name, setName] =useState(Radhe);
  //[email, setEmail] =useState(email);
  var updateHandler =()=>{
    setName('Nabil');
    setEmail('nabil@gmail.com');

  }
  var resetHandler =()=>{
    setName('' );
    setEmail('');
  }
  return(
    <div className="homeFormStyle">
      <div style={{minHeight:'700px'}}>
        <h2>Name: <input type="text" value={name}/></h2>
        <h2>Email: <input type="text" value={email}/></h2>
        <h2>E.Number: <input type="text"/></h2>
        <h2>Mobile: <input type="text"/></h2>
        <h2>Marks: <input type="text"/></h2>
        {/* </div>
        <div style={{minHeight:'100px', margin:'10px',}}>*/}
        <input style={resetButtonStyle} onClick={resetHandler} type="submit" value="Reset"/>
        <input style={submitButtonStyle} type="submit" value="Save"/>
        <input style={resetButtonStyle} onClick={updateHandler} type="submit" value="Update"/>
      </div>
    </div>
  )

  
}

export default homeForm
