import { ThemeProvider } from "styled-components"
import Globalstyles from "./components/styled/globals/Global"
import Header from "./pages/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Mainloader from "./components/maincomps/Mainloader"
// import Subloader from "./components/maincomps/Subloader"
import { useState, useEffect } from "react"

function App() {
  const [lengthstud, setLnghtstud] = useState(0)
  const [todaylength, setTodaylength] = useState(0)
  const [todaydate, setTodaydate] = useState('')
  const [lastmod, setLastmode] =useState('')
  const [homesection, setHomesection] = useState(false)
  const [aboutsection, setAboutsection] = useState(true)
  const [themeset, setThemeset] = useState(true)
  const [loaderpage, setLoaderpage] = useState(true)

  const handleclose = () => {
    setAboutsection(!aboutsection)
    setHomesection(!homesection)
  }

  const handlecloseadd = () => {
    setAboutsection(!aboutsection)
    setHomesection(!homesection)
  }

  const handleTheme = () => {
    setThemeset(!themeset)
  }

  const theme = {
    colors: {
      header: "skyblue",
      body: themeset ? 'whitesmoke': "rgb(33, 29, 29)",
      footer: "grey ",
      color: themeset ? "black" : "white",
      boxshadowset: themeset ? "0 0 2px 1px rgba(0, 0, 0, .2)" : "0 0 2px 1px rgba(255, 255, 255, .2)"
    },

    responsive: {
      mobilesm: "426px",
      mobilemd: "769px",
      mobilelg: "1025px"
    }
  }

  // Loader functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setLoaderpage(false)
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001").then(res => res.json()).then(data => {
      setLnghtstud(data.allstud)
      setTodaylength(data.length)
      setTodaydate(data.date)
      setLastmode(data.date2)
  })
  }, [lengthstud])

  return (
    <ThemeProvider theme={theme}>
      {loaderpage 
        ? 
        <Mainloader /> 
        : 
        <>
          <Globalstyles />
          <Header handleTheme={handleTheme}/>
          {homesection && <Home handlecloseadd={handlecloseadd} lengthstud={lengthstud} todaylength={todaylength} todaydate={todaydate} lastmod={lastmod}/>}
          {aboutsection && <About handleclose={handleclose} lengthstud={lengthstud}/>}
        </>
      }
   </ThemeProvider>
  );
}

export default App;
