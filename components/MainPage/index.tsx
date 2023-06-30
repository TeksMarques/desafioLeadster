import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Card = ({ card }) => {
  const { title, description, thumbnail, link } = card;

  return (    
      <CardContainer>
        <CardImage>
          <Image src={thumbnail} alt={title} fill className="card__image" />
        </CardImage>
        <CardText>
          <Text>{title}</Text>
        </CardText>
      </CardContainer>
          
  );
};

export default Card;


export const CardContainer = styled.div`  
  position: relative;
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 12px 12px 1px 1px rgba(0, 0, 0, 0.04);  
  transition: box-shadow 0.2s;
  border-radius: 1rem;;
  margin-bottom: 3rem;
  margin-right: 2rem;  

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
} 
`;

export const CardImage = styled.div`
  width: 100%;
  height: 190px;

  position: relative;
  border-radius: 1rem;
`;

export const CardText = styled.div`
  height: 100px;
  width: 400px;
  position: relative;
  border-radius: 0.5rem;
`;

export const Text = styled.h2`
  color: #333;
  font-weight: bold;
  padding: 1rem 1.5rem 1rem 1.5rem;
`;
