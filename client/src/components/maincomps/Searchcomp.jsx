import React, {useState, useEffect} from 'react'
import { ImSearch, ImDownload } from "react-icons/im";
import {Searchcontainerbar, Searchinputsection, Downloadsection } from "../styled/Table.styled"

const Searchcomp = ({ person, setSearchkeyward, searchkeyword, lastmod }) => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    const response = await fetch(`http://localhost:3001/api/attendance/${lastmod}`);
    const data = await response.blob();
    const url = window.URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Attendance.xlsx');
    document.body.appendChild(link);
    link.click();
  };

  // Reset the download button
  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {person && <Searchcontainerbar>

       <Searchinputsection>
         <form>
           <input type='search' value={searchkeyword}
            onChange={(e) => setSearchkeyward(e.target.value)}
            placeholder='Search... keyword "Student Name"'/>
           <ImSearch />
         </form>
       </Searchinputsection>
       <Downloadsection onClick={handleDownload}>
         {loading 
         ? 
         <p style={{color: 'rgb(1, 168, 96)'}}>Download Succesful</p> 
         : 
         <p style={{color: 'grey'}}>Generate Report</p>}
         <ImDownload/>
       </Downloadsection>

      </Searchcontainerbar>}
    </div>
  )
}

export default Searchcomp
