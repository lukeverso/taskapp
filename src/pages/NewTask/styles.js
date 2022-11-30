import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
     flex: 1;
     background: #FFFFFF;
     padding: 30px;
`;

export const LogoContainer = styled.View`
     margin: 0 auto;
`;

export const Title = styled.Text`
     margin-top: 15px;
     font-size: 20px;
     font-weight: bold;
     margin-bottom: 20px;
`;

export const DescriptionInput = styled.TextInput`
     height: 50px;
     margin-bottom: 20px;
     border-bottom-width: 1px;
     border-bottom-color: #F92E6A;
`;

export const SaveButton = styled.TouchableOpacity`
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