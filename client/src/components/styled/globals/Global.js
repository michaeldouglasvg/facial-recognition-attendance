import { createGlobalStyle } from 'styled-components';

const Globalstyles = createGlobalStyle`
 * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-family: 'Signika', sans-serif;
  user-select: none;
  transition: all 500ms;
 }

 body{
  background: ${({theme}) => theme.colors.body};
  color:  ${({theme}) => theme.colors.color};
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar{
   display: none;
  }
 }
`

export default Globalstyles