import React, { useState } from 'react';
import { View, Text } from 'react-native';

import database from '../../config/firebaseConfig';

export default function NewTask({ navigation }) {
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
          <View>
               <Text>NewTask</Text>
          </View>
     );
};