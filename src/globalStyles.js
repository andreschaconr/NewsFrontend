import styled, {createGlobalStyle} from "styled-components";
import { motion } from "framer-motion";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
}
`

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-left: 50px;
padding-right: 50px;

@media screen and (max-width: 991px) {
  padding-left: 30px;
  padding-right: 30px;
}
`;

export const Button = styled(motion.button)`
border-radius: 4px;
background: ${({primary}) => (primary ? '#719a3f' : '#c3d960') };
white-space: nowrap;
padding: ${({big}) => (big ? '12px 64px' : '10px 20px') };
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px') };
outline: none;
border: none;
cursor: pointer;
text-transform: uppercase;
margin-right: 50px;

&:hover{
  transition: all 0.3s ease-out;
  background: #fff;
  background: ${({primary}) => (primary ? '#35560c' : '#719a3f') };
}

@media screen and (max-width: 960px){
  width: 90%;
  margin : 15px;
}
`;
export const Form =styled.form`
display: flex;
justify-content: end;
align-items: center;
margin-top:50px;

@media screen and (max-width: 820px) {
  flex-direction: column;
 
 
}
`;

export const FormInput =styled.input`
padding: 10px 20px;
border-radius: 2px;
outline: none;
font-size: 16px;
border: 2px solid #c4d960;
border-radius: 7px;



&::placeholder{
  color: #242424;
}

@media screen and (max-width: 820px) {
  
  margin: 0 0 16px 0;
}
`;
export default GlobalStyle