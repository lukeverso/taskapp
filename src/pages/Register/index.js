import React, { useEffect, useState } from 'react'
import Logo from '../../components/Logo';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Container, LoginInput, LoginContainer, CreateAccountButton, BackButton, ErrorContainer } from './styles';
import { Text, View } from 'react-native';
import firebase from '../../config/firebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

export default function Register({ navigation }) {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [passwordConfirm, setPasswordConfirm] = useState('');
     const [error, setError] = useState(false);
     const [emptyInput, setEmptyInput] = useState(false);
     const [differentPasswords, setDifferentPasswords] = useState(false);

     function createAccount() {
          setError(false);
          setEmptyInput(false);
          setDifferentPasswords(false);
          if (email === '' || password === '' || passwordConfirm === '') {
               setEmptyInput(true);
               return;
          };
          if (password !== passwordConfirm) {
               setDifferentPasswords(true);
               return;
          } else {
               firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                         const user = userCredential.user;
                         navigation.navigate('Task', {
                              userId: user.uid
                         });
                    })
                    .catch((err) => {
                         setError(true);
                    });
          };
     };

     return (
          <Container style={{ marginTop: Constants.statusBarHeight }}>
               <StatusBar style='auto' />
               <LoginContainer>
                    <Logo />
                    <Text style={{ color: '#000000', fontSize: 16, marginBottom: 20 }}>Crie sua conta no <Text style={{ color: '#F92E6A', fontSize: 16, fontWeight: 'bold' }}>Task</Text>App</Text>
                    <LoginInput
                         placeholder='E-mail'
                         onChangeText={setEmail}
                    />
                    <LoginInput
                         placeholder='Senha'
                         onChangeText={setPassword}
                         secureTextEntry={true}
                    />
                    <LoginInput
                         placeholder='Confirmar senha'
                         onChangeText={setPasswordConfirm}
                         secureTextEntry={true}
                    />
                    {emptyInput === true ?
                         <ErrorContainer>
                              <FontAwesomeIcon icon={faCircleExclamation} size={16} color='#F92E6A' />
                              <Text style={{ color: '#F92E6A', fontSize: 16 }}>Preencha os dados.</Text>
                         </ErrorContainer>
                    : <View />}
                    {differentPasswords === true ?
                         <ErrorContainer>
                              <FontAwesomeIcon icon={faCircleExclamation} size={16} color='#F92E6A' />
                              <Text style={{ color: '#F92E6A', fontSize: 16 }}>As senhas precisam ser iguais.</Text>
                         </ErrorContainer>
                    : <View />}
                    {error === true ?
                         <ErrorContainer>
                              <FontAwesomeIcon icon={faCircleExclamation} size={16} color='#F92E6A' />
                              <Text style={{ color: '#F92E6A', fontSize: 16 }}>Ocorreu um erro. Tente novamente.</Text>
                         </ErrorContainer>
                    : <View />}
                    <CreateAccountButton onPress={createAccount}>
                         <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 }}>Criar conta</Text>
                    </CreateAccountButton>
               </LoginContainer>
               <BackButton onPress={() => navigation.navigate('Login')}>
                    <FontAwesomeIcon icon={faArrowLeft} size={24} color='#FFFFFF' />
               </BackButton>
          </Container>
     );
};