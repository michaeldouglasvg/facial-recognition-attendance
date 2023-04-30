import styled from 'styled-components';

export const SubLoaderGlobal = styled.div`
 padding: .5rem 1rem;
 max-width: 290px;
 height: 380px;
 border-radius: 3px;
 opacity: .9;
 margin: 1rem auto;
 display: grid;
 place-items: center;
 background: ${({theme}) => theme.colors.body};
 color:  ${({theme}) => theme.colors.color};
 box-shadow: ${({theme}) => theme.colors.boxshadowset};

 .Info{
  width: 100%;
  font-size: 13px;
  line-height: 1.8rem;
  color:  ${({theme}) => theme.colors.color};
  text-align: center;

  span{
   color: orangered;
   font-weight: 600;
  }
 }
`