import React, { useState } from 'react';
import firebase from '../../config/firebaseConfig';
import { Container, DescriptionInput, LogoContainer, SaveButton, Title } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import Logo from '../../components/Logo';

export default function Details({ navigation, route }) {
     const database = firebase.firestore();

     const [editedDescription, setEditedDescription] = useState(route.params.description);
     const taskId = route.params.id;

     function editTask(description, id) {
          database.collection('Tasks').doc(id).update({
               description: description
          });
          navigation.navigate('Task');
     };

     return (
          <Container style={{ marginTop: Constants.statusBarHeight }}>
               <StatusBar style='auto' />
               <LogoContainer>
                    <Logo />
               </LogoContainer>
               <Title style={{ color: '#F92E6A' }}>Editar tarefa</Title>
               <DescriptionInput
                    placeholder='Insira a edição da tarefa'
                    onChangeText={setEditedDescription}
                    value={editedDescription}
               />
               <SaveButton onPress={() => editTask(editedDescription, taskId)}>
                    <FontAwesomeIcon icon={faSave} size={24} color='#FFFFFF' />
               </SaveButton>
          </Container>
     );
};