import styled from 'styled-components';
import { Button } from 'antd';


export const Wrapper = styled.div`
    background-image: linear-gradient(${props => props.theme.bgColors.linearGradient1},
         ${props => props.theme.bgColors.linearGradient2});
    min-height: 100vh;
    overflow: hidden;
    color: white;
`;

export const PrimaryButton = styled(Button)`
    background-color: ${props => props.theme.colors.primary}
    border-color: ${props => props.theme.colors.primary}
    color: white;
    width: ${props => props.width ? props.width : ''};
    height: 40px;
    font-weight: bold;
    min-width: ${props => props.nominwidth ? '' : '100px'};

    :hover{
        background-color: transparent;
        color: ${props => props.theme.colors.primary} 
        border-color: ${props => props.theme.colors.primary}
    }
`;

export const Heading = styled.h2`
    color: white;
`;


export const SubHeading = styled.h3`
    color: gray;
`;