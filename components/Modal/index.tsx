import React from "react";
import ReactPlayer from "react-player";
import { AiOutlineClose } from "react-icons/ai";
import { Dialog } from "@headlessui/react";
import { BsCloudDownload } from "react-icons/bs";

const DowloadBtn = ({ title, containerStyles }) => {
    return (
        <div className={`Btn__container ${containerStyles}`}>
          <div className='btn__download-left'>
          <BsCloudDownload className='svg__download'/>
          </div>
          <div className='btn__download-right'>
            <h2>{title}</h2>
          </div>
    
        </div>
      
      )
}


const CardDetails = ({ isOpen, closeModal, card }) => {
  return (
    <>
      {isOpen && (
        <Dialog open={true} onClose={closeModal}>
          <div className="fixed inset-0 bg-black bg-opacity-25 overflow-hidden" />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center overflow-hidden">
              <div className="relative w-[110%] max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white py-6 text-left shadow-xl transition-all flex flex-col gap-5 border-t-4 border-blue-500 overflow-hidden">
                <button
                  type="button"
                  className="absolute top-2 right-2 z-10 w-fit p-2 rounded-full"
                  onClick={closeModal}
                >
                  <AiOutlineClose />
                </button>
                <div className="flex-1 flex flex-col gap-3 text-center">
                  <h2 className="text-custom-dark font-normal md:text-2xl sm:text-xs w-[80%] self-center overflow-hidden md:leading-8 sm:leading-3 min-h-[70px] sm:mb-0 md:mb-6">
                    <span className="text-custom-blue font-bold md:text-2xl sm:text-xs overflow-hidden">
                      Webinar:
                    </span>{" "}
                    {card.title}
                  </h2>
                  <div className="h-[300px] md:h-[400px]">
                    <ReactPlayer url={card.link} width="100%" height="100%" />
                  </div>
                  <div className="Description px-4">
                    <h4 className="Modal__title text-color-black font-bold text-lg">
                      Descrição
                    </h4>
                    <div className="line__modal" />
                    <p className="Description__text text-base text-color-black text-start">
                      {card.description}
                    </p>
                  </div>
                  <div className="Dowloads px-4 h-max">
                    <h4 className="Modal__title text-color-black font-bold text-lg overflow-hidden">
                      Downloads
                    </h4>
                    <div className="line__modal" />
                    <div className="Dowload__container-btn">
                      <DowloadBtn
                        title="Spreadsheet.xls"
                        containerStyles="Green__container"
                      />
                      <DowloadBtn
                        title="Document.doc"
                        containerStyles="Blue__container"
                      />
                      <DowloadBtn
                        title="Presentation.ppt"
                        containerStyles="Yellow__container"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default CardDetails;

