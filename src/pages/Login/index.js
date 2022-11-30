import React from 'react'
import Logo from '../../components/Logo';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Container, LoginInput, LoginButton, LoginContainer, CreateAccountButton } from './styles';
import { Text } from 'react-native';

export default function Login() {
     return (
          <Container style={{ marginTop: Constants.statusBarHeight }}>
               <StatusBar style='auto' />
               <LoginContainer>
                    <Logo />
                    <LoginInput
                         placeholder='E-mail'
                    />
                    <LoginInput
                         placeholder='Senha'
                    />
                    <LoginButton>
                         <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 }}>Entrar</Text>
                    </LoginButton>
                    <CreateAccountButton>
                         <Text style={{ color: '#F92E6A', fontSize: 16 }}>Criar conta</Text>
                    </CreateAccountButton>
               </LoginContainer>
          </Container>
     );
};