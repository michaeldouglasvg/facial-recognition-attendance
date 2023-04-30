import React, { useEffect, useState } from 'react';
import { MainLoaderGlobal, LoaderSubGlobal } from "../styled/Mainloader.styled"
import { Dna } from  'react-loader-spinner'

const Mainloader = () => {
  const [text, setText] = useState(true)
  const [succeful, setSuccesful] = useState(false)

   //Dynamic text loader
   useEffect(() => {
    const interval = setInterval(() => {
      setText(false)
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Succesful code return 
  useEffect(() => {
    const interval = setInterval(() => {
      setSuccesful(true)
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MainLoaderGlobal>
     <LoaderSubGlobal>
      <h2>Welcome, SEKU <span>Biometrics[FACE]</span></h2>
      <Dna
        visible={true}
        height="140"
        width="200"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      {text ? <p>Initializing database...</p> : (!succeful && <p>Loading Content...</p>)}
      {succeful && <p>Loaded Succesfuly.</p>}
     </LoaderSubGlobal>
    </MainLoaderGlobal>
  );
}

export default Mainloader;
