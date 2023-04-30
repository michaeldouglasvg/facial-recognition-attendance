import styled from 'styled-components';
// Main header styles
export const HeaderStyledComponent = styled.header`
 width: 100%;
 padding: .6rem .6rem;
 display: flex;
 align-items: center;
 justify-content: space-between;
 cursor: pointer;
 background: green;
 /* background: ${({bg}) => bg || "transparent"}; */

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  padding: 1rem 7rem;
 }
`
// Heade >> Logo style
export const Logo = styled.div`
 width: 100px;
 height: 40px;
 display: grid;
 place-items: center;
 cursor: pointer;
 box-shadow: 0 0 5px 2px rgba(0, 0, 0, .1);

 & > p{
  text-align: center;
  font-weight: 600;
  font-size: 1.5rem;
  color: rgb(6, 209, 6);
 }
`
// Header >> Events style
export const Events = styled.div`
 height: 40px;
 margin-left: .4rem;

 & > div {
   width: 100%;
   display: grid;
   place-items: center;
   padding: 1rem 1rem;

   & > p {
      font-size: 1.5rem;
      font-weight: 600;
      font-size: 1.5rem;
      color: skyblue;
   }
 }

 & > .DesktopName {
   display: none;
   font-weight: 600;
   font-size: 1.5rem;
   color: green;
 }

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  margin-left: 1rem;

  & > .DesktopName {
   display: block;
 }

  & > .MobileName {
   display: none;
  }
 }
`
// Header >> Navigation links
export const HeaderNavLinks = styled.div`
 background: white;
 position: absolute;
 padding: .6rem 1rem;
 bottom: 0;
 width: 96%;
 height: 200px;
 margin: .6rem auto;
 border-radius: 3px;
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
 grid-gap: 1rem;
 display: none;

 & > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 50px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, .1);
  border-radius: 3px;
  p{
   padding: 1px;
  }
 }

 @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
  background: white;
  position: absolute;
  padding: .8rem 1rem;
  bottom: 0;
  right: 1rem;
  width: 80%;
  height: 200px;
  margin: .6rem auto;
  border-radius: 3px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  grid-gap: 1rem;
  display: none;


  & > div {
  width: 90px;
  height: 70px;
  p{
   padding: 1px;
  }
 }
 }

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  display: none;
 }
`


// Header >> Large screen navigation
export const WindowViewNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .1rem .6rem;
  box-shadow: 0 0 2px 1px rgba(255, 255, 255, .1);

  & > .HelpCenter {
   display: flex;
   align-items: center;
   position: relative;

   & > .Helpmini{
    display: flex;
    align-items: center;
      & > div {
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        color: white;
    }
    & > p {
        margin-left: .4rem;
        color: white;
    }
   }

   & > .Helplinetext {
    position: absolute;
    top: 6.4rem;
    z-index: 999;
    width: 300px;
    max-width: 300px;
    background: ${({theme}) => theme.colors.body};
    color:  ${({theme}) => theme.colors.color};
    box-shadow: ${({theme}) => theme.colors.boxshadowset};
    border-radius: 5px 0 5px 0;
    padding: 1rem .6rem;
    transform: scale(1.1);
    transition: all 500ms;

    &::before{
      content: "";
      width: 10px;
      height: 10px;
      color: green !important;
      position: absolute;
      top: -5px;
      left: 10px;
      transform: rotate(45deg);
      background: ${({theme}) => theme.colors.body};
      z-index: 10;
      transition: all 600ms;
    }
   }
  }
`

// Header >> Theme section and Settings
export const ThemeSettings = styled.div`
 width: 80px;
 height: 40px;
 padding: .4rem .8rem;
 display: flex;
 align-items: center;
 justify-content: space-around;
 box-shadow: 0 0 2px 1px rgba(255, 255, 255, .1);
 margin-left: .4rem;
 color: white;
`