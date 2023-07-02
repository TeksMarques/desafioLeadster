import React from "react";

import ReactPlayer from "react-player";
import { GrClose } from "react-icons/gr";
import { Dialog } from "@headlessui/react";

import DownloadBtn from "./DownloadBtn";
import {
  ButtonModal,
  CardDetailsContainer,
  CardDetailsContent,
  CardDetailsDescription,
  CardDetailsTitle,
  CardDetailsTitleSpan,
  ModalBG,
  Player,
  TextDescription,
  Line,
  CardDetailsDescriptionP,
  CardDetailsDownloads,
  DownloadsContainer,
} from "./style";

const CardDetails = ({ isOpen, closeModal, card }) => {
  if (!isOpen) return null;

  return (
    <Dialog className="relative z-50" open={true} onClose={closeModal} >
      <ModalBG />
      <CardDetailsContainer>
        <Dialog.Panel className={"dialog__panel"}>
          <ButtonModal type="button" onClick={closeModal}>
            <GrClose />
          </ButtonModal>
          <CardDetailsContent>
            <CardDetailsTitle>
              <CardDetailsTitleSpan>Webinar: </CardDetailsTitleSpan>{" "}
              {card.title}
            </CardDetailsTitle>
            <Player>
              <ReactPlayer url={card.link} width="100%" height="100%" />
            </Player>
            <CardDetailsDescription>
              <TextDescription>Descrição</TextDescription>
              <Line />
              <CardDetailsDescriptionP>
                {card.description}
              </CardDetailsDescriptionP>
            </CardDetailsDescription>
            <CardDetailsDownloads>
              <TextDescription>Downloads</TextDescription>
              <Line />
              <DownloadsContainer>
                <DownloadBtn
                  title="Spreadsheet.xls"
                  containerStyles="green__button"
                />
                <DownloadBtn
                  title="Document.doc"
                  containerStyles="blue__button"
                />
                <DownloadBtn
                  title="Presentation.ppt"
                  containerStyles="yellow__button"
                />
              </DownloadsContainer>
            </CardDetailsDownloads>
          </CardDetailsContent>
        </Dialog.Panel>
      </CardDetailsContainer>
    </Dialog>
  );
};

export default CardDetails;
