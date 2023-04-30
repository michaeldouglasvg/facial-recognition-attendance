import styled from "styled-components"

export const Button = styled.button`
 padding: .9rem 1.2rem;
 border: none;
 outline: none;
 background: ${({bg}) => bg || "whitesmoke"};
 color: ${({clr}) => clr || "grey"};
 border-radius: 3px;
 cursor: pointer;
 box-shadow: 0 0 2px 1px rgba(0,0,0,.1);
 opacity: .9;
 transition: all 200ms;
 text-align: center;
 margin-right: 1rem;
 
 &:hover{
  opacity: 1;
  transform: scale(.97);
  background: black;
  color: orangered;
 }
`