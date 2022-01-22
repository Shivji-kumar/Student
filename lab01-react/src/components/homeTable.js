import React from 'react';
import Student from './student'

function HomeTable() {
  return (
    <div className="homeTableStyle">
      <Student name="Pragya" marks="90" mobile="+91 12345678"/>
      <Student name="Shivji" marks="85" mobile="+91 12005678"/>
      <Student name="Pragya" marks="88" mobile="+91 123554678"/>

    </div>
  )
}

export default HomeTable;
