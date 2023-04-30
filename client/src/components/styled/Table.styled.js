import styled from 'styled-components';

export const TableGlobals = styled.div`
 width: 100%;
 height: 60vh;
 margin-top: 2rem;
 margin: .1rem auto;
 padding: .6rem .1rem;
 border-radius: 3px;
 box-shadow: ${({theme}) => theme.colors.boxshadowset};
 overflow: scroll;
 transition: all 500ms;
 background: ${({theme}) => theme.colors.body};
 color:  ${({theme}) => theme.colors.color};
 &::-webkit-scrollbar{
  display: none;
 }

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  height: 80vh;
  margin-top: .6rem;
  transition: all 500ms;
 }

 .Maintable {
  width: 1200px;
  text-align: left;
  border-collapse: collapse;
  background: ${({theme}) => theme.colors.body};
  color:  ${({theme}) => theme.colors.color};

  & > thead {
   color: whitesmoke;
   text-align: center;
   background: rgb(6, 6, 43);
   position: sticky;
   top: 0;
   z-index: 10;
  & > tr{
   & > th {
    border-collapse: collapse;
    height: 40px;
   }
  }
 }

 & > tbody {
  color: grey;
  text-align: center;
   
  & > tr {  
   padding: 1rem .2rem;
   margin-top: 1rem;
   background: ${({theme}) => theme.colors.body};
   .Action{
    display: flex;
    align-items: center;
    justify-content: space-around;
   }
   &:nth-child(odd) {
    background: rgb(234, 234, 234);
   }
   & > td {
    border-collapse: collapse;
    height: 50px;
   }

   .Avatar{
    width: 50px;
    height: 50px;
    border-radius: 3px;
    overflow: hidden;

    & > img {
     width: 100%;
     height: 96%;
     margin: .1rem auto;
    }
   }
  }
 }
}
`

export const TablHeadings = styled.div`
 width: 100%;
 margin-bottom: 1rem;
 padding: .1rem 1rem;
 display: flex;
 align-items: center;
 justify-content: space-between;
 background: ${({theme}) => theme.colors.body};
 color:  ${({theme}) => theme.colors.color};

 & > p{
  color: grey;
  font-size: 1.5rem;
 }
`
export const ViewModeStatus = styled.div`
 width: 100%;
 z-index: 10;
 background: rgb(229, 228, 228);
 display: grid;
 place-items: center;
 transition: all 500ms;
 background: ${({theme}) => theme.colors.body};
 color:  ${({theme}) => theme.colors.color};
`

export const ViewModeSection = styled.div`
 width: 98%;
 margin: 1rem auto;
 background: whitesmoke;
 border-radius: 3px;
 transition: all 500ms;
 background: ${({theme}) => theme.colors.body};
 color:  ${({theme}) => theme.colors.color};
 box-shadow: ${({theme}) => theme.colors.boxshadowset};
 padding: 1rem 1rem;
 border-top: 5px solid green;

 & > .Topsection{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > .Imagecontainer{
   width: 250px;
   height: 270px;
   border-radius: 0 10px 0 10px;
   overflow: hidden;
   position: relative;

   img{
    width: 105%;
    height: 105%;
    position: absolute;
    top: -.4rem;
    left: -.4rem;
   }
  }

  & > .Studentdescription{
   width: 300px;
   @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    margin-left: 1rem;
    width: 280px;
  }
   
   & > .Personaldetails{
    box-shadow: ${({theme}) => theme.colors.boxshadowset};
    padding: .6rem .2rem;
    margin-top: .1rem;
    h1{
     padding: .4rem .1rem;
     border-bottom: 1px solid rgb(232, 232, 232);
     color: rgb(1, 168, 96);
     font-size: 1.6rem;
    }
    p{
     padding-top: .4rem;
     font-size: 1.3rem;
     span{
      color: orangered;
      font-weight: 600;
     }
    }
   }

   & > .Timeattented{
    box-shadow: ${({theme}) => theme.colors.boxshadowset};
    padding: .6rem .2rem;
    margin-top: 1rem;
    h1{
     padding: .4rem .1rem;
     border-bottom: 1px solid rgb(232, 232, 232);
     color: rgb(1, 168, 96);
     font-size: 1.6rem;
    }
    p{
     padding-top: .4rem;
     font-size: 1.3rem;
     span{
      color: orangered;
      font-weight: 600;
     }
    }
   }

   & > .Academicdetails{
    box-shadow: ${({theme}) => theme.colors.boxshadowset};
    padding: .6rem .2rem;
    margin-top: 1rem;
    h1{
     padding: .4rem .1rem;
     border-bottom: 1px solid rgb(232, 232, 232);
     color: rgb(1, 168, 96);
     font-size: 1.6rem;
    }
    p{
     padding-top: .4rem;
     font-size: 1.3rem;
     span{
      color: orangered;
      font-weight: 600;
     }
    }
   }
  }
 }

 & > .Bottomstatus{
  width: 100%;
  margin-top: 1rem;
  h1{
    padding: .4rem .1rem;
    border-bottom: 1px solid rgb(232, 232, 232);
    color: rgb(1, 168, 96);
    font-size: 1.6rem;
   }
   p{
    padding-top: .4rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span{
     color: orangered;
     font-weight: 600;
    }
    .Analysis{
      color: green;
      padding-left: .1rem;
      padding-bottom: .4rem;
     }
     .first{
      padding-left: 1rem;
     }
     .pointer{
      padding: .1rem .4rem;
      color: orangered;
     }
   }
 }

 & > p{
  color:  ${({theme}) => theme.colors.color};
 }
`

export const Searchcontainerbar = styled.div`
 width: 100%;
 padding: 1rem 2rem;
 display: flex;
 align-items: center;
 justify-content: space-between;
 border-radius: 10;
 background: ${({theme}) => theme.colors.body};
 color:  ${({theme}) => theme.colors.color};
 box-shadow: ${({theme}) => theme.colors.boxshadowset};
`

export const Searchinputsection = styled.div`
 width: 60%;
 height: 100%;
 box-shadow: 0 0 5px 2px rgba(0, 0, 0, .2);
 padding: .2rem 1rem;
 background: ${({theme}) => theme.colors.body};
 color:  ${({theme}) => theme.colors.color};
 
 & > form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: .1rem auto;
  
  & > input {
   width: 96%;
   border: none;
   outline: none;
   padding: .8rem 1rem;
   background: ${({theme}) => theme.colors.body};
   color:  ${({theme}) => theme.colors.color};

   &:focus {
    outline: 1px solid green;
   }
  }

  &:nth-child(last){
   font-size: 20px;
  }
 }
`

export const Downloadsection = styled.div`
 width: 15%;
 height: 100%;
 padding: 1rem 1rem;
 display: flex;
 align-items: center;
 justify-content: space-between;
 background-color: white;
 cursor: pointer;
 border-radius: 3;
 background: ${({theme}) => theme.colors.body};
 color:  ${({theme}) => theme.colors.color};
 box-shadow: ${({theme}) => theme.colors.boxshadowset};
`