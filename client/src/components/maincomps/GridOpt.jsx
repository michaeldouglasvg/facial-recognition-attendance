import styled from 'styled-components';

export const CardTopLinks = styled.div`
  width: 98%;
  margin: .1rem auto;
  padding: .2rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-gap: .4rem;
  background: ${({theme}) => theme.colors.body};
  color:  ${({theme}) => theme.colors.color};
  border-radius: 3px;
  box-shadow: ${({theme}) => theme.colors.boxshadowset};

  & > .TopLinksDIV {
   padding: .2rem .4rem;
   display: flex;
   align-items: center;
   cursor: pointer;
   transition: all 500ms;
   border-radius: 0 3px 0 3px;

    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
     border-right: 1px solid grey;
   }

   &:hover {
    background: rgb(2, 2, 26);
    transition: all 500ms;
    
    & > div {
     color: white;
     font-size: 1.5rem;
    }

    & > p {
      color: rgb(27, 255, 6);
    }
   }

   & > div {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
   }

   & > p {
    font-size: 1.2rem;
    font-weight: 600;
    color: grey;
    padding-left: .1rem;
   }
  }

  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    width: 88%;
  }
`