import styled from 'styled-components';

export const HPRow = styled.div`
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 800px) {
        display: block !important;
        height: 320px;
        overflow: scroll;

        .ant-card{
            margin: 5px auto !important;
        }
    }
`;
