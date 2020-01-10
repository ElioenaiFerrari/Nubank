import styled from 'styled-components/native';
import {StyleSheet, Animated} from 'react-native';

import pic from '~/assets/pic.jpg';

export const Container = styled(Animated.ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 0 30px;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Github = styled(Animated.Text)`
  align-self: center;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const Pic = styled(Animated.Image).attrs({
  source: pic,
})`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 80;
  right: 0;
  z-index: 6;
  border-width: 1px;
  border-color: #fff;
`;

export const Code = styled(Animated.View)`
  background: #fff;
  padding: 10px;
  align-self: center;
  z-index: 7;
`;

export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`;
