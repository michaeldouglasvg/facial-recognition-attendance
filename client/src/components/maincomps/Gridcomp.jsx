import styled from 'styled-components';

export const GridGlobal = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
 grid-gap: 10px;
 width: 98%;
 padding: 1rem .6rem;
 margin: 1rem auto;
 box-shadow: 0 0 2px 1px rgba(0, 0, 0, .1);
 border-radius: 3px;
 background: ${({theme}) => theme.colors.body};
 color:  ${({theme}) => theme.colors.color};

 & > div{
  background: blue;
 }

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  height: calc(100vh - 100px);
  width: 98%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
  grid-gap: 10px;

  & > div{
  background: blue;
 }
 }
`