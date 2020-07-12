import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Card } from 'antd';
import Amadal from '../../../../assets/images/amadal.png';
import cater from '../../../../assets/images/cater.png';
import srGonzales from '../../../../assets/images/srGonzales.png';

const { Meta } = Card;

const cards = [
    {
        title: 'Amadal',
        image: Amadal
    },
    {
        title: 'Señor Gonzales',
        image: srGonzales
    },
    {
        title: 'Cater',
        image: cater
    }
]

class SelectionSection extends Component {

    render() {
        return (
            <div className="flex justify-center">
                {
                    cards.map(({ title, image }) => (
                        <Card
                            key={title}
                            hoverable
                            onClick={() => {
                                this.props.history.push('/list')
                            }}
                            style={{ width: 240, margin: '1rem' }}
                            cover={
                                <img
                                    style={{ maxHeight: '237px' }}
                                    alt="example"
                                    src={image} />
                            }
                        >
                            <Meta
                                style={{ textAlign: 'center', fontSize: '20px' }}
                                title={title} />
                        </Card>
                    ))
                }
            </div>
        );
    }
}

export default withRouter(SelectionSection);