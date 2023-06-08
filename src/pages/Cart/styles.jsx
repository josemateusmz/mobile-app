import styled from "styled-components"

export const ProductsArea = styled.div`
display: flex;
gap: 50px;
flex-wrap: wrap;
align-items: center;
justify-content: center;
margin-bottom: 70px;
margin-top: 28px;

div {
    width: 230px;
    height: 320px;
    border: 2px solid #A0A2A4;
    border-radius: 12px;
    dispaly: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 8px;

    button {
        font-size: 20px;
        background: transparent;
        border: none;
        color: #EB3E53;

    }

}
`;

export const Title = styled.h1`
text-align: center;
align-items: start;
color: #4A4A4A;
`;

export const Price = styled.h2`
color: rgb(160, 162, 164)`;