import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import firebase from '../../config/firebaseConfig';
import { BackButton, Container, NewTaskInput, LogoContainer, SaveButton, Title } from './styles';
import Constants from 'expo-constants';
import Logo from '../../components/Logo';
import { StatusBar } from 'expo-status-bar';

export default function NewTask({ navigation, route }) {
     const [task, setTask] = useState('');

     function addTask() {
          firebase.firestore().collection(route.params.userId).add({
               task: task,
          });
          navigation.navigate('Task', {
               userId: route.params.userId
          });
     };

     return (
          <Container style={{ marginTop: Constants.statusBarHeight }}>
               <StatusBar style='auto' />
               <LogoContainer>
                    <Logo />
               </LogoContainer>
               <Title style={{ color: '#F92E6A' }}>Adicionar tarefa</Title>
               <NewTaskInput
                    placeholder='Por exemplo, "Estudar React Native"'
                    onChangeText={setTask}
                    value={task}
               />
               <BackButton onPress={() => navigation.navigate('Task')}>
                    <FontAwesomeIcon icon={faArrowLeft} size={24} color='#FFFFFF' />
               </BackButton>
               <SaveButton onPress={() => addTask()}>
                    <FontAwesomeIcon icon={faSave} size={24} color='#FFFFFF' />
               </SaveButton>
          </Container>
     );
};