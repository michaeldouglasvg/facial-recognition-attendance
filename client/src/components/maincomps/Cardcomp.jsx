import styled from 'styled-components';

export const CardGlobal = styled.div`
 margin: 1rem auto;
 width: 98%;
 padding: .6rem .8rem;
 box-shadow: 0 0 2px 1px rgba(0, 0, 0, .1);
 border-radius: 3px;

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  min-width: 300px;
  width: 100%;
 }

 /* Inner styles */
 & > .CardTitle {
  width: 100%;

  & > p{
   font-size: 1.2rem;
   color: grey;
  }
 }

 & > .CardImage {
  width: 100%;
  height: 50vh;
  margin: .4rem auto;
  overflow: hidden;
  border-top: 1px solid rgb(215, 212, 212);
  border-bottom: 1px solid rgb(215, 212, 212);
  padding: .4rem .1rem;

  & > img {
   width: 100%;
   height: 100%;
  }
 }

 & > .CardProjects {
  width: 100%;
 }

 & > .CardLinks {
  padding: .2rem .1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > div {
   margin-right: 1rem;
   height: 30px;
   width: 30px;
   border-radius: 3px;
   background: green;
   display: grid;
   place-items: center;
  }
 }

 & > .CardLanguages {
  margin-right: 1rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem .1rem;
  height: 12vh;
  overflow-x: scroll;
  &::-webkit-scrollbar{
   display: none;
  }

  & > div {
   margin-right: 1rem;
   height: 70px;
   width: 100px;
   border-radius: 3px;
   display: grid;
   place-items: center;
   box-shadow: ${({theme}) => theme.colors.boxshadowset};
  }
 }

 & > .TopBar {
  width: 100%;
  display: flex;

  & > div {
   display: grid;
   place-items: center;
   width: 60px;
   height: 50px;
   border-radius: 0 1px;
   box-shadow: 0 0 2px 1px rgb(215, 212, 212);
  }

  & > p {
   color: purple;
   font-size: 1.5rem;
   flex: 1;
   margin-left: 1rem;
   align-items: flex-end;
  }
 }

 & > .LanguageDescription {
  margin-top: 1rem;
  & > p {
   color: grey;
   line-height: 1.5rem;
   font-size: .9rem;
  }
 }
`