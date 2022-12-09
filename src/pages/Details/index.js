import React, { useState } from 'react';
import firebase from '../../config/firebaseConfig';
import { BackButton, Container, DetailsInput, LogoContainer, SaveButton, Title } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import Logo from '../../components/Logo';

export default function Details({ navigation, route }) {
     const [editedTask, setEditedTask] = useState(route.params.task);
     const taskId = route.params.id;

     function editTask(id) {
          firebase.firestore().collection(route.params.userId).doc(id).update({
               task: editedTask
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
               <Title style={{ color: '#F92E6A' }}>Editar tarefa</Title>
               <DetailsInput
                    placeholder='Insira a edição da tarefa'
                    onChangeText={setEditedTask}
                    value={editedTask}
               />
               <BackButton onPress={() => navigation.navigate('Task', {
                    userId: route.params.userId
               })}>
                    <FontAwesomeIcon icon={faArrowLeft} size={24} color='#FFFFFF' />
               </BackButton>
               <SaveButton onPress={() => editTask(taskId)}>
                    <FontAwesomeIcon icon={faSave} size={24} color='#FFFFFF' />
               </SaveButton>
          </Container>
     );
};