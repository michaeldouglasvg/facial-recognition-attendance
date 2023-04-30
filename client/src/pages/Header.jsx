import React, { useEffect, useState } from 'react'
import { HeaderStyledComponent, Logo, Events, HeaderNavLinks, WindowViewNav, ThemeSettings } from "../components/styled/Header.styled"
import { FaMoon, FaLifeRing } from "react-icons/fa"
// import { Button } from "../components/maincomps/Button"
import { Helplinedisplay, Helplinetopheader, Helpcenterbody } from "../components/styled/Helpline.styled"
import { data } from "../data/Helpline.data"

const Header = ({handleTheme}) => {
  const [helpline, setHelpline] = useState(false)
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [helplinedata, setHelplinedata] = useState(data)

  const openHelplineSection = () => {
    setHelpline(!helpline)
    setHelplinedata(data)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
   <HeaderStyledComponent bg='rgb(2, 2, 26)'>
    <Logo><p>SEKU</p></Logo>
    <Events>
     <div className='DesktopName'>
      <p>FACIAL RECOGNITION BASED ATTENDANCE</p>
     </div>
     <div className='MobileName'>
      <p>FRBA</p>
     </div>
    </Events>
    {/* Smaill screen navigation */}
    <HeaderNavLinks>
    </HeaderNavLinks>
    {/* Large screen navigation */}
    <WindowViewNav>
     <div className='HelpCenter' onClick={openHelplineSection}>
      <div className='Helpmini'>
        <div>
          <FaLifeRing />
        </div>
        <p>Helpline</p>
      </div>
     {helpline && <div className='Helplinetext'>
        <Helplinedisplay>
          <Helplinetopheader>
            <p className='Name'>Helpline Section</p>
            <p className='Time'>{time}</p>
          </Helplinetopheader>
          <Helpcenterbody>

            {helplinedata.map((singlehelp, key) => {
              return  <div className='Contentcontainer' key={key}>
              <h1>{singlehelp.heading}</h1>
              <p>{singlehelp.procedures}</p>
             </div>
            })}
          
          
          </Helpcenterbody>
        </Helplinedisplay>
      </div>}
     </div>
    </WindowViewNav>
    <ThemeSettings>
      <FaMoon onClick={handleTheme}/>
    </ThemeSettings>
   </HeaderStyledComponent>
  )
}

export default Header
