import styled from 'styled-components';
import { Input, Icon } from 'antd';


export const LoginWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .ant-form-explain{
        margin: 0.5rem 0;
    }
`;

export const FormInput = styled(Input)`
    background: transparent;
    color: white;
    border: 1px solid white;
    padding: 1.25rem;
    border-radius: 0;
    position: relative
`;

export const Label = styled.label`
    color: white;
    position: absolute !important;
    top: -10px;
    padding: 0 3px;
    left: 0.5rem;
    background-color: #213247;
    z-index: 1;
    font-style: italic;
    height: 20px;
    align-items: center;
    display: flex;
    white-space: nowrap;
`;

export const Text=styled.p`
    text-align: center;
    color: gray;
`;

export const InputIcon=styled(Icon)`
    position: absolute;
    transform: translate(-150%, 75%);
    color: white;
`