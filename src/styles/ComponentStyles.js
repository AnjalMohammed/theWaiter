import styled from 'styled-components';
import { UserSwitchOutlined } from '@ant-design/icons';

export const LogoH1 = styled.p`
    color: ${props => props.color ? props.color : props.theme.colors.primary};
    margin: ${props => props.margin ? props.margin : '2rem'};
    text-align: center;
    font-weight: bold;
    font-size: ${props => props.fontSize ? props.fontSize : '250%'}
    font-style: italic;
    text-shadow: ${props => props.extrabold && '0px 2px, 2px 0px, 2px 2px'};
    cursor: ${props => props.redirect? 'pointer' : ""};
`;

export const CopyRightDiv = styled.div`
    left: 50%;
    bottom: 0;
    transform: translate(-50%);
    min-width: 320px;
    position: fixed;
    opacity: 0.15;
`;


export const UserIcon = styled(UserSwitchOutlined)`
    background: #00C264;
    padding: 50%;
    font-size: 150%;
    border-radius: 50%;
`;