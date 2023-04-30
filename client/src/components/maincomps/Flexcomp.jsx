import styled from 'styled-components';

export const FlexGlobal = styled.div`
 display: flex;
 align-items: center;
 width: 98%;
 padding: .8rem .6rem;
 margin: .6rem auto;
 border-radius: 3px;
 flex-wrap: wrap;
 background: ${({theme}) => theme.colors.body};
 color:  ${({theme}) => theme.colors.color};
 box-shadow: ${({theme}) => theme.colors.boxshadowset};

 & > div{
  min-width: 200px;
 }

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  height: calc(100vh - 120px);
  width: 88%;
  justify-content: space-around;

  & > div{
   min-width: 200px;
   width: 45%;
  }
 }
`


