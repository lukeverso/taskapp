import React, { useEffect, useState } from 'react'
import Logo from '../../components/Logo';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Container, LoginInput, LoginButton, LoginContainer, CreateAccountButton, ErrorContainer } from './styles';
import { Text } from 'react-native';
import firebase from '../../config/firebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { View } from 'react-native-web';

export default function Login({ navigation }) {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState(false);

     function login() {
          firebase.auth().signInWithEmailAndPassword(email, password)
               .then((userCredential) => {
                    const user = userCredential.user;
                    navigation.navigate('Task', {
                         userId: user.uid
                    });
               })
               .catch(() => {
                    setError(true);
               });
     };

     useEffect(() => {
          firebase.auth().onAuthStateChanged((user) => {
               if (user) {
                    navigation.navigate('Task', {
                         userId: user.uid
                    });
               };
          });
     }, []);

     return (
          <Container style={{ marginTop: Constants.statusBarHeight }}>
               <StatusBar style='auto' />
               <LoginContainer>
                    <Logo />
                    <LoginInput
                         placeholder='E-mail'
                         onChangeText={setEmail}
                    />
                    <LoginInput
                         placeholder='Senha'
                         secureTextEntry={true}
                         onChangeText={setPassword}
                    />
                    {error === true ?
                         <ErrorContainer>
                              <FontAwesomeIcon icon={faCircleExclamation} size={16} color='#F92E6A' />
                              <Text style={{ color: '#F92E6A', fontSize: 16 }}>E-mail ou senha inválido(s).</Text>
                         </ErrorContainer>
                         : <View />}
                    <LoginButton onPress={login}>
                         <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 }}>Entrar</Text>
                    </LoginButton>
                    <CreateAccountButton onPress={() => navigation.navigate('Register')}>
                         <Text style={{ color: '#F92E6A', fontSize: 16 }}>Criar conta</Text>
                    </CreateAccountButton>
               </LoginContainer>
          </Container>
     );
};