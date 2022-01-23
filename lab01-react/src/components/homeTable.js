import React from "react";
import Student from "student";

function HomeTable() {
  var students = [
    {name: "Pragya", marks:"95", mobile:"958464685"},
    {name: "Shivji", marks:"90", mobile:"900464685"},
    {name: "Radhe", marks:"92", mobile:"958464600"},
    {name: "Intekhab", marks:"85", mobile:"958460085"},
    {name: "Nabil", marks:"89", mobile:"958462285"},

  ];

  const studentList =students.map((student) =>
  <Student name={students[0].name} marks={students[0].marks} mobile={students[0].mobile} />
  );
  return (
    <div className="homeTableStyle">
      {studentList}
    </div>

  );
}

export default HomeTable;
