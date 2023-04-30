import styled from 'styled-components';

export const Helplinedisplay = styled.div`
 width: 100%;
 height: 70vh;
 color:  ${({theme}) => theme.colors.color};
 @media (max-width: ${({theme}) => theme.responsive.mobilemd}){
  position: absolute;
  top: 1rem;
  margin: 0 auto;
 }
`

export const Helplinetopheader = styled.div`
 width: 100%;
 padding: .2rem .2rem;
 display: flex;
 justify-content: space-between;
 align-items: center;
 border-bottom: 1px solid rgb(232, 232, 232);

 & > .Name {
  color: rgb(27, 255, 6);
 }
 
 & > .Time{
  color: orangered;
 }
`

export const Helpcenterbody = styled.div`
 width: 100%;
 padding: .2rem .2rem;
 margin-top: 1rem;
 height: 65vh;
 overflow-y: scroll;
 &::-webkit-scrollbar{
  display: none;
 }

 & .Contentcontainer{
  width: 100%;
  border-bottom: 1px solid rgb(232, 232, 232);
  margin-top: 1rem;
  & > h1 {
   color: skyblue;
   padding-top: .4rem;
  }
  & > p{
   font-size: 8px;
   line-height: 1rem;
  }
 }
`