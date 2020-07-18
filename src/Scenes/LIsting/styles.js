import styled from 'styled-components';
import { Row } from 'antd';


export const ListRow = styled(Row)`
    margin-top: 5rem;
    padding: 0 10%; 
    overflow: scroll;
    height: calc(100vh - 120px);

    img {
        max-height: 200px;
        max-width: 240px;
        margin: 0 auto;
        padding: ${props => props.laoding ? '' : '5px 0'};
    }

    @media only screen and (max-width: 769px) {
        margin-top: 7.5rem;
    
        h2{
            text-align: center;
        }

        p{
            display: block !important;
            text-align: center;

            span{
                margin-top: 5px !important;
            }
        }
    }
`;
