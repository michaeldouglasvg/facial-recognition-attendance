import React, {useState} from 'react';
import { ImUserCheck, ImArrowLeft } from "react-icons/im";
import { Homestyled } from "../components/styled/Home.styled"
import { CardTopLinks } from "../components/maincomps/GridOpt"
import { AddStudentPage, NewStudentForm, NewStudentScan } from "../components/styled/About.styled"
import { Button } from "../components/maincomps/Button"


const About = ({handleclose, lengthstud}) => {
  const[studname, setStudname] = useState('')
  const[studreg, setStudreg] = useState('')
  const[studentcourse, setStudentcourse] = useState("")
  const[dataformat, setDataformat] = useState('')
  const [imagescan, setImageScan] = useState(false)

  const handleScanImage = async (e) => {
    e.preventDefault();
    setImageScan(false)

    if(studname === ""){
      setImageScan(false)
      alert("Student my have a name. Include the name instead")
    }

    if(studreg === ""){
      setImageScan(false)
      alert("Student must have a registration number. Include the registration instead")
    }

    if(studentcourse === ""){
      setImageScan(false)
      alert("Student must have a course to attent to. Please include the course")
    }

    if(studreg !== "" && studname !== "" && studentcourse !== ""){
      try {
        const res = await fetch("http://localhost:3001/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ studname, studreg, studentcourse}),
        });
  
        const data = await res.json();
        setDataformat(data);
  
      } catch (err) {
          console.error(err);
      }
    }
  
    setStudname("")
    setStudreg("")
    setStudentcourse("")
  }

  return (
    <Homestyled>
      <CardTopLinks>
        <div className='TopLinksDIV'>
          <div><ImUserCheck /></div>
          <p>({lengthstud}) Registered Students</p>
        </div>
        <div className='TopLinksDIV'>
          <div><ImArrowLeft /></div>
          <Button bg="orangered" clr="white" onClick={handleclose}>Today's Attendance</Button>
        </div>
      </CardTopLinks>
      <AddStudentPage>
        <NewStudentForm>
          <div className='Title'><h1>Add New Student</h1></div>
          <div className='Form'>
            <form>
              <div className='Formgroups'>
                <p>Student Name: </p>
                <input type='text' value={studname} onChange={(e) => setStudname(e.target.value)} placeholder='Enter student name'/>
              </div>
              <div className='Formgroups'>
                <p>Registration No.: </p>
                <input type='text' value={studreg} onChange={(e) => setStudreg(e.target.value)} placeholder='Enter Registration Number'/>
              </div>
              <div className='Formgroups'>
                <p>Student Course </p>
                <input type='text' value={studentcourse} onChange={(e) => setStudentcourse(e.target.value)} placeholder='Enter student course name'/>
              </div>
              <div className='Formgroups btns'>
                <Button type='submit' bg='skyblue' clr='whitesmoke' onClick={handleScanImage}>Save Details</Button>
              </div>
            </form>
          </div>
        </NewStudentForm>

        {/* Scanning image display */}
        {imagescan && <NewStudentScan>
        <div className='Title'><h1>Face Processing</h1></div>
        <div className='MainDisplay'>
          <div className='DisplayTitle'><p>Match Faces: <span>Michael Douglas</span></p></div>
          <div className='ImageScanned'>
           <div>{JSON.stringify(dataformat)}</div>
          </div>
          <div className='RateScan'>
            <p>Scanning...(10%)</p>
          </div>
        </div>
        </NewStudentScan>}
      </AddStudentPage>
    </Homestyled>
  );
}

export default About;
