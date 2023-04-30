import styled from 'styled-components';

export const Homestyled = styled.div`
 width: 100%;
 display: grid;
 place-items: center;

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  height: calc(100vh - 60px);
 }
`

