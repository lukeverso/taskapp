import React from 'react';
import { Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { LogoContainer } from './styles';

export default function Logo() {
     return (
          <LogoContainer>
               <FontAwesomeIcon icon={faTasks} size={28} color='#000000' />
               <Text style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 28, color: '#F92E6A', marginBottom: 3 }}>Task<Text style={{ fontWeight: '400', color: '#000000' }}>App</Text></Text>
          </LogoContainer>
     );
};