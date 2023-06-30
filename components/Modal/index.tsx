import React from "react";
import ReactPlayer from "react-player";
import { AiOutlineClose } from "react-icons/ai";
import { Dialog } from "@headlessui/react";
import { BsCloudDownload } from "react-icons/bs";

const DownloadBtn = ({ title, containerStyles }) => {
  return (
    <div className={`btn__container ${containerStyles}`}>
      <div className="btn__download-left">
        <BsCloudDownload className="svg__download" />
      </div>
      <div className="btn__download-right">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

const CardDetails = ({ isOpen, closeModal, card }) => {
  if (!isOpen) return null;

  return (
    <Dialog open={true} onClose={closeModal}>
      <div>
        <button type="button" onClick={closeModal}>
          <AiOutlineClose />
        </button>
        <div>
          <h2>
            <span>Webinar:</span> {card.title}
          </h2>
          <div>
            <ReactPlayer url={card.link} width="100%" height="100%" />
          </div>
          <div>
            <h4>Descrição</h4>
            <div></div>
            <p>{card.description}</p>
          </div>
          <div>
            <h4>Downloads</h4>
            <div></div>
            <div>
              <DownloadBtn title="Spreadsheet.xls" containerStyles="" />
              <DownloadBtn title="Document.doc" containerStyles="" />
              <DownloadBtn title="Presentation.ppt" containerStyles="" />
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default CardDetails;
