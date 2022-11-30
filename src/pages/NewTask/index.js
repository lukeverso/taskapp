import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import firebase from '../../config/firebaseConfig';
import { Container, DescriptionInput, LogoContainer, SaveButton, Title } from './styles';
import Constants from 'expo-constants';
import Logo from '../../components/Logo';
import { StatusBar } from 'expo-status-bar';

export default function NewTask({ navigation }) {
     const database = firebase.firestore();

     const [description, setDescription] = useState('');
     const [status, setStatus] = useState(false);

     function addTask() {
          database.collection('Tasks').add({
               description: description,
               status: status
          });
          navigation.navigate('Task');
     };

     return (
          <Container style={{ marginTop: Constants.statusBarHeight }}>
               <StatusBar style='auto' />
               <LogoContainer>
                    <Logo />
               </LogoContainer>
               <Title style={{ color: '#F92E6A' }}>Adicionar tarefa</Title>
               <DescriptionInput
                    placeholder='Por exemplo, "Estudar React Native"'
                    onChangeText={setDescription}
                    value={description}
               />
               <SaveButton onPress={() => addTask()}>
                    <FontAwesomeIcon icon={faSave} size={24} color='#FFFFFF' />
               </SaveButton>
          </Container>
     );
};