import React from "react";
import styled from "styled-components";

import { BsCloudDownload } from "react-icons/bs";

const DownloadBtn = ({ title, containerStyles }) => {
  return (
    <BtnContainer className={`${containerStyles}`}>
      <BtnLeft className="btn__download-left">
        <BsCloudDownload />
      </BtnLeft>
      <BtnRight className="btn__download-right">
        <SubtitleDownloads>{title}</SubtitleDownloads>
      </BtnRight>
    </BtnContainer>
  );
};

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 1rem;
  margin-right: 0.2rem;
`;

export const SubtitleDownloads = styled.h4`
  font-size: 0.8rem;
  padding-right: 0;
`;

export const BtnLeft = styled.div``;
export const BtnRight = styled.div``;

export default DownloadBtn;
