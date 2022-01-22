import React from 'react';

function Student(props) {
  return (
      <div style={{border:'1px solid blue'}}>
          <h1>Name: {props.name}</h1>
          <h1>Email: </h1>
          <h1>Enrollment Number:</h1>
          <h1>Mobile:{props.mobile}</h1>
          <h1>Marks:{props.marks}</h1>
      </div>
  )
}

export default Student;
