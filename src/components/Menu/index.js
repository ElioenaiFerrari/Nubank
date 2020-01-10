import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';

import {
  Container,
  Top,
  Github,
  Pic,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './styles';
import {mainColor} from '~/styles';
import {Animated} from 'react-native';

export default function Menu({translateY}) {
  return (
    <>
      <Github
        style={{
          opacity: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [0, 1],
          }),
        }}>
        github.com/ElioenaiFerrari
      </Github>

      <Container
        style={{
          opacity: translateY.interpolate({
            inputRange: [0, 150],
            outputRange: [0, 1],
          }),
        }}>
        <Top>
          <Pic
            style={{
              transform: [
                {
                  translateX: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange: [0, -80],
                  }),
                },
              ],
              opacity: translateY.interpolate({
                inputRange: [0, 380],
                outputRange: [0, 1],
              }),
            }}
          />
          <Code
            style={{
              transform: [
                {
                  translateX: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange: [50, 180],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <QRCode
              backgroundColor="#FFF"
              logoBackgroundColor={mainColor}
              logoSize={80}
              value="https://github.com/ElioenaiFerrari/"
            />
          </Code>
        </Top>
        <Nav>
          <NavItem>
            <Icon name="help-outline" size={20} color="#FFF" />
            <NavText>Me ajuda</NavText>
          </NavItem>
          <NavItem>
            <Icon name="person-outline" size={20} color="#FFF" />
            <NavText>Perfil</NavText>
          </NavItem>
          <NavItem>
            <Icon name="credit-card" size={20} color="#FFF" />
            <NavText>Configurar cartão</NavText>
          </NavItem>
          <NavItem>
            <Icon name="smartphone" size={20} color="#FFF" />
            <NavText>Configurações do app</NavText>
          </NavItem>
        </Nav>

        <SignOutButton>
          <SignOutButtonText>Sair da conta</SignOutButtonText>
        </SignOutButton>
      </Container>
    </>
  );
}
