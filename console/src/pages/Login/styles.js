import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 50vw;
    background: #fafafa;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {
        height: 100%;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Form = styled.form`

`;

export const Logo = styled.img`
    height: 30px;
`;