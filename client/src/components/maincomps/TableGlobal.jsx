import React, { useState, useEffect } from 'react'; 
import { TableGlobals, TablHeadings, ViewModeStatus, ViewModeSection } from "../styled/Table.styled"
import { Button } from "../maincomps/Button"
import Subloader from "./Subloader"
import Searchstudents from "./Searchcomp"
import { ImSearch } from "react-icons/im";

const TableGlobal = ({ students, lengthstud, lastmod }) => {
  const[viewPerson, setViewPerson] = useState(false)
  const [studentview, setStudentview] = useState([])
  const [search, setSearch] = useState(false)
  const [searchkeyword, setSearchkeyward] = useState("")

  // Search functionality
  let filteredStudents = [];

  if (typeof students.name === "object" && students.name !== null) {
    filteredStudents = Object.keys(students.name).filter((studentKey, key) => {
      const student = {
        name: students.name[studentKey],
        image: students.image[key],
      };
      return student.name.toLowerCase().includes(searchkeyword.toLowerCase());
    });
  }


  const handleCLoseViewPerson = (studentKey) => {
    setViewPerson(!viewPerson)
    setStudentview({
      name: students.name[studentKey],
      roll: students.roll[studentKey],
      date: students.date,
      time: students.time[studentKey],
      image: students.image[studentKey],
      course: students.course[studentKey],
    });
  }

  // Function to open search
  const openSearch = () => {
    setSearch(!search)
  }

  // Reset search input
   // Loader functionality
   useEffect(() => {
    const interval = setInterval(() => {
      setSearchkeyward("")
    }, 10000);
    
    return () => {
      clearInterval(interval)
    };
  }, [searchkeyword]);

  
  return (
    <>
      <TableGlobals>
        <TablHeadings>
          <div style={{display: "flex", alignItems: "center"}}>

            <p>All Students: {lengthstud}</p>

            {students && <ImSearch style={{fontSize: 20, color: "grey", cursor: "pointer", marginLeft: 15}} onClick={openSearch}/>}

          </div>

          <p>Last Modified: {lastmod}</p>
        </TablHeadings>

       {(search && !viewPerson) && <Searchstudents setSearchkeyward={setSearchkeyward} searchkeyword={searchkeyword} lastmod={lastmod} person={students.name}/>}

       {searchkeyword.length !== 0 && <p style={{padding: "1rem .2rem", color: "rgb(1, 168, 96)"}}>Showing results for: "{searchkeyword}." </p>}

        {students.name ? (
          <table className='Maintable'>
          <thead>
            <tr>
              <th>No.</th>
              <th>Avatar</th>
              <th>RegNo.</th>
              <th>Name</th>
              <th>Course</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {filteredStudents.map((studentKey, index) => {
            const student = {
              image: `http://localhost:3001/${students.image[index]}`, // fixed indexing error
              name: students.name[index], // fixed indexing error
              roll: students.roll[index], // fixed indexing error
              time: students.time[index], // fixed indexing error
              course: students.course[index],
            };
            return (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td className='Avatar'>
                  <img src={student.image} alt={student.roll} />
                  {/* <p>IMG</p> */}
                </td>
                <td>{student.roll}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{students.date}</td>
                <td>{student.time}</td>
                <td className='Action'>
                  <Button bg='rgb(60, 60, 228)' onClick={() => handleCLoseViewPerson(studentKey)}>View</Button>
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
         
        ):(
           <Subloader />
        )}
        
      </TableGlobals>

      {viewPerson && <ViewModeStatus>
        <ViewModeSection>
         <div className='Topsection'>
          <div className='Imagecontainer'>
            {studentview.image === undefined ? 
              <Subloader viewPerson={viewPerson}/>
             : 
              <img src={`http://localhost:3001/${studentview.image}`} alt={studentview.name} />
            }
          </div>

          <div className='Studentdescription'>
            <div className='Personaldetails'>
              <h1>Personal Details</h1>
              <p><span>Subject Name: </span> {studentview.name}</p>
            </div>
            <div className='Timeattented'>
              <h1>Attendance Details</h1>
              <p><span>Date Attented: </span> {studentview.date}</p>
              <p><span>Time Attented: </span> {studentview.time} Today</p>
            </div>
            <div className='Academicdetails'>
              <h1>Academic Details</h1>
              <p><span>Registration No.: </span> {studentview.roll}</p>
              <p><span>Course: </span> {studentview.course}</p>
            </div>
          </div>
         </div>

         <div className='Bottomstatus'>
          <h1>Remarks</h1>
          <p>
            <span>Attendance Analysis: </span>
          </p>
         </div>
         
         
        </ViewModeSection>
        <Button bg='orangered' clr='white' onClick={handleCLoseViewPerson}>Close Panel View</Button>
      </ViewModeStatus> }
    </>
  );
}

export default TableGlobal;

