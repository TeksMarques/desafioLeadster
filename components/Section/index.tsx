import Image from 'next/image';
import React from 'react';
import { SectionInfosContainer, SectionInfosText, SectionInfosWrapper, Text, SubText, Paragraph, Line, InfosRD, ButtonSection, InfosNota, Attencion } from './styles';


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

