import styled from "styled-components";

export const LoginContainer = styled.div`
display: flex;
flex-direction: column;
width: 30%;
heigth: 40%;
align-items: center;
justify-content: center;
padding: 16px;
border: 1px solid #a0a2a4;
border-radius: 16px;
box-shadow: 10px 10px 10px #a0a2a4;
position: absolute; 
top: 50%; 
left: 50%; 
transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
font-size: 32px;
color: #1F3832;

&:hover {
    color: #508F80;
}
`;

export const Label = styled.label`
font-size: 16px;
color: #4A4A4A;
font-weight: 600;
padding: 8px;

// align-self: flex-start;

&:hover {
   color:  #508f80
}
`;

export const Input = styled.input`
padding: 8px;
border: none;
border-radius: 8px;
background-color: #F6F7F7;
width: 70%;

&:focus {
    border: red;
}

`;

export const Button= styled.button`
padding: 8px;
background: #427569;
color: white;
width: 72%;
border-radius: 8px;
border: none;
margin-bottom: 8px;
margin-top: px;
`;