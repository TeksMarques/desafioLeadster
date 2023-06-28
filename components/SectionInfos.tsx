import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const SectionInfos = () => {
  return (
    <SectionInfosContainer>
        <SectionInfosWrapper>
            <Image className='image__comparativos' src="/images/comparativo_img_CTA.png" width={740} height={690} alt={'comparativos CTA'} />
            <div className="image_grafico" />
        </SectionInfosWrapper>
        <SectionInfosText>
            <Text>Pronto para triplicar sua</Text>
            <SubText>Geração de Leads?</SubText>
            <Paragraph>Criação e ativação em <span className='header__bold'>4 minutos</span>.</Paragraph>
            <Line></Line>
            <InfosRD>
                <ButtonSection>
                    VER DEMONSTRAÇÃO
                </ButtonSection>
                <Image className='image__selo' src="/images/selo_RD.png" width={205} height={73} alt={'Selo RD'} />
            </InfosRD>
            <InfosNota>
                <Image src="/images/no-card-dark.webp" width={16} height={16} alt={'cartão cortado'} />
                <Attencion><span className='header__bold'>Não</span> é necessário cartão de crédito |</Attencion>
                <Image className='image__rating' src="/images/rating.webp" width={92} height={16} alt={'raking de estrelas marcadas'} />
                <Attencion><span className='header__bold'>4.9</span>/5 média de satisfação</Attencion>

            </InfosNota>

        </SectionInfosText>

    </SectionInfosContainer>
        
  )
}

export default SectionInfos;

export const SectionInfosContainer = styled.div`
    width: 100vw;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #f0f8ff;
    position: relative;
`
export const SectionInfosWrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;    
    justify-content: space-between;
    position: relative;
    overflow: hidden;        
`

export const SectionInfosText = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 1rem;
    
`

export const Text = styled.h1`
    font-weight: 500;
`
export const SubText = styled.h1`
    font-weight: 900;
`
export const Paragraph = styled.p`
    font-weight: 400;
`
export const Line = styled.hr`
  width: 65%;
  border: 1px solid #cbd6df;
  margin-top: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const InfosRD = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`

export const ButtonSection = styled.button`
    background-color: #2c83fb;
    color: white;
    border: 1px solid #2c83fb;
    font-size: ;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: 500;
`

export const InfosNota = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 1rem;
`

export const Attencion = styled.p`
    font-size: 0.8rem;
    margin-left: 0.5rem;
    font-weight: 700;   
    font-family: sans-serif; 
`