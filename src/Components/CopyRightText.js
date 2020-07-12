import React from 'react';
import { CopyRightDiv } from '../styles/ComponentStyles';

const CopyRightText = () => (
    <CopyRightDiv>
        <p className='m0 italic'
            style={{ color: 'white' }}
        >&copy; 2019.All Rights Reserved.Company Name Inc.</p>
    </CopyRightDiv>
);

export default CopyRightText;