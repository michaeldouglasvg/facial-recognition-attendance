import React from 'react';
import { SubLoaderGlobal } from "../styled/Subloader.styled"
import { Circles, Dna } from  'react-loader-spinner'

const Subloader = ({viewPerson}) => {
  return (
    <SubLoaderGlobal>
      {!viewPerson ? (
        <Circles
          height="80"
          width="200"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />

      ) : (
        <Dna
          visible={true}
          height="100"
          width="100"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
    
     {!viewPerson ? (<p className='Info'>Welcome, No Student data. <br />Please Click <span>"Take Todays Attendance"</span> button, To activate the camera that will scan student faces. Make sure all attented students are scanned then Press <span>ENTER Key</span> To display Students.</p>) : (<p>Loading image...</p>)}
    </SubLoaderGlobal>
  );
}

export default Subloader;
