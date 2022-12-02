import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import firebase from '../../config/firebaseConfig';
import { AddButton, AlertContainer, Container, DeleteButton, DetailsButton, LogoContainer, NoTaskFound, TaskContainer, TaskDetails, TaskTitle, Title } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle, faEdit, faPlus, faTrash, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import Logo from '../../components/Logo';

export default function Task({ navigation }) {
     const database = firebase.firestore();

     const [task, setTask] = useState([]);

     useEffect(() => {
          database.collection('Tasks').onSnapshot((query) => {
               const list = [];
               query.forEach((doc) => {
                    list.push({ ...doc.data(), id: doc.id });
               });
               setTask(list);
          });
     }, []);

     function deleteTask(id) {
          database.collection('Tasks').doc(id).delete();
     };

     function renderItem({ item }) {
          return (
               <TaskContainer>
                    <TaskDetails>
                         <FontAwesomeIcon icon={faCircle} size={6} color='#F92E6A' />
                         <TaskTitle>
                              {item.description}
                         </TaskTitle>
                    </TaskDetails>
                    <DetailsButton onPress={() => navigation.navigate('Details', {
                         id: item.id,
                         description: item.description
                    })}>
                         <FontAwesomeIcon icon={faEdit} size={18} color='#F92E6A' />
                    </DetailsButton>
                    <DeleteButton onPress={() => deleteTask(item.id)}>
                         <FontAwesomeIcon icon={faTrash} size={18} color='#F92E6A' />
                    </DeleteButton>
               </TaskContainer>
          )
     }

     return (
          <Container style={{ marginTop: Constants.statusBarHeight }}>
               <StatusBar style='auto' />
               <LogoContainer>
                    <Logo />
               </LogoContainer>
               {task.length == 0 ? (
                    <AlertContainer>
                         <FontAwesomeIcon icon={faTriangleExclamation} size={40} color='#F92E6A' />
                         <NoTaskFound>Nenhuma tarefa encontrada!</NoTaskFound>
                    </AlertContainer>
               ) : (
                    <>
                         <Title style={{ color: '#F92E6A' }}>Todas as minhas tarefas</Title>
                         <FlatList
                              showsVerticalScrollIndicator={false}
                              data={task}
                              renderItem={renderItem}
                         />
                    </>
               )}
               <AddButton onPress={() => navigation.navigate('NewTask')}>
                    <FontAwesomeIcon icon={faPlus} size={24} color='#FFFFFF' />
               </AddButton>
          </Container>
     );
};