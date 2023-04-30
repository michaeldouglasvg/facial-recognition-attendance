import React, {useState, useEffect} from 'react';
import { FaCalendarCheck, FaDatabase, FaHourglassHalf } from 'react-icons/fa';
import { ImUserCheck, ImUserPlus } from "react-icons/im";
import { Homestyled } from "../components/styled/Home.styled"
import { CardTopLinks } from "../components/maincomps/GridOpt"
import TableGlobal from "../components/maincomps/TableGlobal"
// import { Button } from "../components/maincomps/Button"

const Home = ({ handlecloseadd, lengthstud, todaylength, todaydate, lastmod }) => {
  const[students, setStudents] = useState({})
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, [students]);

  const fetchTodaysAttendance = async () => {
      try {
        const res = await fetch("http://localhost:3001/start", { method: "GET" });
        const data = await res.json();

        setStudents(data);
      } catch (err) {
          console.error(err);
      }
  }

  return (
    <Homestyled>
      <CardTopLinks>
        <div className='TopLinksDIV' onClick={fetchTodaysAttendance}>
          <div><ImUserCheck /></div>
          <p>Take Todays Attendance</p>
        </div>
        <div className='TopLinksDIV' onClick={handlecloseadd}>
          <div><ImUserPlus /></div>
          <p>Add Student</p>
        </div>
        <div className='TopLinksDIV'>
          <div><FaDatabase /></div>
          <p>Today {todaylength}~Attented</p>
        </div>
        <div className='TopLinksDIV'>
          <div><FaCalendarCheck /></div>
          <p>Date: {todaydate}</p>
        </div>
        <div className='TopLinksDIV'>
          <div><FaHourglassHalf /></div>
          <p>Time: {time}</p>
        </div>
      </CardTopLinks>
      {students.mess && <p style={{color: 'orangered', background: 'orange', padding: '.8rem 1rem', borderRadius: '3px', margin: '1rem auto'}}>{students}</p>}
      <CardTopLinks>
        <TableGlobal students={students} lengthstud={lengthstud} lastmod={lastmod}/>
      </CardTopLinks>
    </Homestyled>
  );
}

export default Home;
