import React from 'react';
import logoImg from '../../assets/logoImg.svg'
import iconeImg from '../../assets/iconeImg.png'
import whatsImg from '../../assets/whatsImg.svg'

import { Button, ButtonText, Container, ImgLogo, Service, TextService, Content } from './styles';

import { apiDataServices } from '../../services/api';

export default function Home() {

  const dataServives = apiDataServices

  console.log(dataServives)

  return (

    <>
      <Container>

        <ImgLogo>
          <img src={logoImg} alt="homem caixa de ferramentas" />

        </ImgLogo>

        <Content>
          {
            dataServives && (
              dataServives.map(item =>
                <Service>
                  <img src={iconeImg} width='40' alt="" />
                  <TextService>{item.service}</TextService>
                </Service>


              )
            )
          }
        </Content>

        <a style={{ textDecoration: 'none' }} href=''>
          <Button>

            <ButtonText  >{'Solicitar Orçamento'}</ButtonText>

            <img src={whatsImg} width='40' alt="" />

          </Button>
        </a >

      </Container>
    </>

  )
};