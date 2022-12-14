import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import firebase from '../../config/firebaseConfig';
import { AddButton, AlertContainer, BackButton, Container, DeleteButton, DetailsButton, LogoContainer, NoTaskFound, TaskContainer, TaskDetails, TaskTitle, Title } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRightFromBracket, faCircle, faEdit, faPlus, faTrash, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import Logo from '../../components/Logo';

export default function Task({ navigation, route }) {
     const [task, setTask] = useState([]);

     useEffect(() => {
          firebase.firestore().collection(route.params.userId).onSnapshot((query) => {
               const list = [];
               query.forEach((doc) => {
                    list.push({ ...doc.data(), id: doc.id });
               });
               setTask(list);
          });
     }, []);

     function logout() {
          firebase.auth().signOut()
               .then(() => {
                    navigation.navigate('Login');
               });
     };

     function deleteTask(id) {
          firebase.firestore().collection(route.params.userId).doc(id).delete();
     };

     function renderItem({ item }) {
          return (
               <TaskContainer>
                    <TaskDetails>
                         <TaskTitle>
                              {item.task}
                         </TaskTitle>
                    </TaskDetails>
                    <DetailsButton onPress={() => navigation.navigate('Details', {
                         id: item.id,
                         task: item.task,
                         userId: route.params.userId
                    })}>
                         <FontAwesomeIcon icon={faEdit} size={18} color='#F92E6A' />
                    </DetailsButton>
                    <DeleteButton onPress={() => deleteTask(item.id)}>
                         <FontAwesomeIcon icon={faTrash} size={18} color='#F92E6A' />
                    </DeleteButton>
               </TaskContainer>
          );
     };

     return (
          <Container style={{ marginTop: Constants.statusBarHeight }}>
               <StatusBar style='auto' />
               <LogoContainer>
                    <Logo />
               </LogoContainer>
               {task.length !== 0 ? (
                    <>
                         <Title style={{ color: '#F92E6A' }}>Todas as minhas tarefas</Title>
                         <FlatList
                              showsVerticalScrollIndicator={false}
                              data={task}
                              renderItem={renderItem}
                         />
                    </>
               ) : (
                    <AlertContainer>
                         <FontAwesomeIcon icon={faTriangleExclamation} size={40} color='#F92E6A' />
                         <NoTaskFound>Nenhuma tarefa encontrada!</NoTaskFound>
                    </AlertContainer>
               )}
               <BackButton onPress={logout}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} size={24} color='#FFFFFF' />
               </BackButton>
               <AddButton
                    onPress={() => navigation.navigate('NewTask', {
                         userId: route.params.userId
                    })}
               >
                    <FontAwesomeIcon icon={faPlus} size={24} color='#FFFFFF' />
               </AddButton>
          </Container>
     );
};