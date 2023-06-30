import React, { useState } from "react";
import Image from "next/image";

import Modal from "../Modal";
import { BsFillPlayFill } from "react-icons/bs";
import { CardContainer, CardImage, CardText, OverlayBg, Text } from "./styles";

const Card = ({ card }) => {
  const { title, description, thumbnail, link } = card;
  const [isOpen, setisOpen] = useState(false);

  const handleClick = () => {
    console.log(isOpen);
    setisOpen(!isOpen);
  };

  return (
    <CardContainer onClick={handleClick}>
      <CardImage>
        <Image src={thumbnail} alt={title} fill className="card__image" />
        <OverlayBg className="overlay__bg">
          <BsFillPlayFill className="btn__player" />
        </OverlayBg>
      </CardImage>
      <CardText>
        <Text>{title}</Text>
      </CardText>
      <Modal isOpen={isOpen} closeModal={() => setisOpen(false)} card={card} />
    </CardContainer>
  );
};

export default Card;
