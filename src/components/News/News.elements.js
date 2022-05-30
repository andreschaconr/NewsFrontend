import styled from "styled-components";
import { motion } from "framer-motion";

export const InfoSec = styled.div`
color: #fff;
padding: 160px 0;
background: ${({ lightBg }) => (lightBg ? '#fff' : 'linear-gradient(90deg, rgba(113,154,63,1) 0%, rgba(196,217,96,1) 29%, rgba(196,217,96,1) 63%, rgba(113,154,63,1) 100%)')};
`;

export const InfoRow = styled.div`
display: flex;
margin: 0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
margin-bottom: 50px;
margin-top: 50px;
border-radius: 7px;
box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
flex-direction: 'row';
`;

export const InfoColumn = styled.div`
margin-bottom: 15px;
margin-top: 15px;
padding-right: 30px;
padding-left: 30px;
flex: 1;
max-width: 50%;
flex-basis: 50%;

@media screen and (max-width: 768px) {
  max-width: 100%;
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  flex-direction: 'row';
}
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;

@media screen and (max-width: 768px) {
  padding-bottom: 5px;
}
`;

export const TopLine = styled.div`
color: #35560c ;
font-size: 18px;
line-height: 16px;
margin-bottom: 16px;
`;

export const Heading = styled(motion.h1)`
display: flex;
text-align: initial;
margin-top: 24px;
margin-bottom: 24px;
font-size: 24px;
line-height: 1.1;
color: #1c2237 ;
text-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
`;

export const Subtitle = styled.p`
display: flex;
text-align: justify;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color:  #0C1403 ;
`;

export const ImgWrapper = styled.div`
max-width: 555px;
display: flex;
justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
padding-right: 0;
border: 0;
width: 100%;
vertical-align: middle;
display: inline-block;
height: 300px;
border-radius: 3px;

`;