import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
     flex: 1;
     background: #FFFFFF;
     padding: 30px;
     justify-content: center;
`;

export const LoginContainer = styled.View`
     align-items: center;
     padding: 20px;
     border-radius: 25px;
     border: 1px solid lightgray;
`;

export const LoginInput = styled.TextInput`
     width: 100%;
     padding: 0 15px;
     height: 50px;
     margin-bottom: 20px;
     border-bottom-width: 1px;
     border-bottom-color: #F92E6A;
`;

export const LoginButton = styled.TouchableOpacity`
     width: 50%;
     height: 40px;
     background: #F92E6A;
     border-radius: 50px;
     margin-bottom: 20px;
     justify-content: center;
     align-items: center;
`;

export const CreateAccountButton = styled.TouchableOpacity`
     width: 50%;
     height: 40px;
     border: 1px solid #F92E6A;
     border-radius: 50px;
     justify-content: center;
     align-items: center;
`;