import styled from 'styled-components';
// Main loader window
export const MainLoaderGlobal = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 margin: 0;
 transition: all 500ms;

 & > div{
  font-weight: 600;
  animation: glow 1.2s ease-in-out infinite;
  transition: all 500ms;

  @keyframes glow {
   from{
    opacity: 1;
    color: orange;
   }
   to{
    opacity: 1;
    color: skyblue;
   }
  }
 }
`
// Brand title loading 
export const LoaderSubGlobal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 500ms;
  
   h2{
    color: white;
    margin-bottom: 2rem;
    font-size: 1.4rem;
    text-shadow: 0 0 7px #fff,
                0 0 10px #fff,
                0 0 21px #fff,;
    span{
       color: orangered;
       font-size: 1.4rem;
    }
   }
   p{
    color: whitesmoke;
    font-size: 1.5rem;
    padding: .5rem 1rem;
    animation: changecolor 6s ease infinite;

    @keyframes changecolor {
       0%{
          color: blue;
       }
       20%{
          color: rgb(0, 225, 255);
       }
       40%{
          color: rgb(0, 255, 123);
       }
       60%{
          color: rgb(64, 255, 0);
       }
       80%{
          color: rgb(255, 166, 0);
       }
       100%{
          color: rgb(255, 0, 162);
       }
    }
  }
`