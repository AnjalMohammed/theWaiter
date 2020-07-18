import styled from 'styled-components';
import { Input, Select } from 'antd';

const { Search } = Input;

export const MasterSearchDiv = styled.div`
    height: 53vh;
    position: relative;
    background: url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png") fixed center; 
    background-size: 100%;
    background-position: 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    @media only screen and (max-width: 769px) {
        background: url("https://purewows3.imgix.net/images/articles/2019_01/15-Minute_Mezze_Plate_With_Pita_Bread_Recipe.jpg?auto=format,compress&cs=strip") fixed center; 
    }
`;


export const SelectionMasterDiv = styled.div`
    display: flex;
    justify-content: center;
    padding: 3rem;
`;

export const HomepageSelect = styled(Select)`
    .ant-select-selection, .ant-select-selection__rendered{
        height: 60px;
        border-radius: 5px 0 0 5px;
    }

    .ant-select-selection-selected-value{
        height: 60px;
        align-items: center;
        display: flex !important;
        font-size: 20px;
    }
    
`;

export const HomepageInput = styled(Search)`
    .ant-input, .ant-input-group, .ant-btn-primary{
        height: 60px;
        border-radius: 0px 5px 5px 0px
    }
    
    .ant-btn-primary{
        width: 60px !important;
        background-color: ${props => props.theme.colors.primary}
        border-color: ${props => props.theme.colors.primary}
        color: white;    
        font-size: 200%;
    }
`;