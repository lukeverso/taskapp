import styled from "styled-components/native";

export const Container = styled.View`
     flex: 1;
     background: #FFFFFF;
     padding: 30px;
`;

export const AlertContainer = styled.View`
     flex: 1;
     align-items: center;
     justify-content: center;
`;

export const NoTaskFound = styled.Text`
     text-align: center;
     font-size: 26px;
     margin-top: 10px;
`;

export const LogoContainer = styled.View`
     margin: 0 auto;
`;

export const TaskContainer = styled.View`
     width: 100%;
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
`;

export const Title = styled.Text`
     margin-top: 15px;
     font-size: 20px;
     font-weight: bold;
     margin-bottom: 20px;
`;

export const TaskDetails = styled.View`
     flex-direction: row;
     align-items: center;
     min-width: 220px;
     max-width: 220px;
     height: 50px;
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
     right: 30px;
     background: #F92E6A;
     border-radius: 50px;
     justify-content: center;
     align-items: center;
`;

export const DetailsButton = styled.TouchableOpacity`
     min-width: 50px;
     max-width: 50px;
     height: 50px;
     align-items: center;
     justify-content: center;
`;

export const DeleteButton = styled.TouchableOpacity`
     min-width: 50px;
     max-width: 50px;
     height: 50px;
     align-items: center;
     justify-content: center;
`;