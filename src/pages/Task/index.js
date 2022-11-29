import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import database from '../../config/firebaseConfig';
import { AddButton, Container, TaskContainer, TaskDetails, TaskTitle } from './styles';
import { faCircle, faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function Task({ navigation }) {
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

     return (
          <Container>
               <FlatList
                    showsVerticalScrollIndicator={false}
                    data={task}
                    renderItem={({ item }) => {
                         return (
                              <TaskContainer>
                                   <TaskDetails>
                                        <TouchableOpacity onPress={() => deleteTask(item.id)}>
                                             <FontAwesomeIcon icon={faCircle} size={6} color='#F92E6A' />
                                        </TouchableOpacity>
                                        <TaskTitle>
                                             {item.description}
                                        </TaskTitle>
                                   </TaskDetails>
                                   <TouchableOpacity onPress={() => navigation.navigate('Details', {
                                        id: item.id,
                                        description: item.description
                                   })}>
                                        <FontAwesomeIcon icon={faEdit} size={18} color='#F92E6A' />
                                   </TouchableOpacity>
                                   <TouchableOpacity onPress={() => deleteTask(item.id)}>
                                        <FontAwesomeIcon icon={faTrash} size={18} color='#F92E6A' />
                                   </TouchableOpacity>
                              </TaskContainer>
                         )
                    }}
               />
               <AddButton onPress={() => navigation.navigate('NewTask')}>
                    <FontAwesomeIcon icon={faPlus} size={24} color='#FFFFFF' />
               </AddButton>
          </Container>
     );
};