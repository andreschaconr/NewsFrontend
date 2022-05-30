import React from "react";
import { 
  
    InfoRow, 
    InfoColumn, 
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
   } from './News.elements'



export function News(props) {
const { title, description, urlToImage, author, url} = props;

return (
    <InfoRow >
            <InfoColumn>
              <TextWrapper>
              <Heading>{title}</Heading>
              <TopLine >{author}</TopLine>
                  <Subtitle >{description}</Subtitle>
                       <Subtitle>{url}</Subtitle>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper >
                <Img src={urlToImage} alt="imagen news" />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
)
    
}