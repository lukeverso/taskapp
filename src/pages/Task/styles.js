import styled from "styled-components/native";

export const Container = styled.View`
     flex: 1;
     background: #FFFFFF;
     padding-top: 20px;
`;

export const TaskContainer = styled.View`
     width: 100%;
     height: 70px;
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
     padding: 0 30px;
`;

export const TaskDetails = styled.View`
     flex-direction: row;
     align-items: center;
     min-width: 220px;
`;

export const TaskTitle = styled.Text`
     font-size: 16px;
     margin-left: 10px;
`;

export const AddButton = styled.TouchableOpacity`
     width: 50px;
     height: 50px;
     position: absolute;
     bottom: 30px;
     right: 20px;
     background: #F92E6A;
     border-radius: 50px;
     justify-content: center;
     align-items: center;
`;