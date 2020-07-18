import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Card } from 'antd';

import { HPRow } from './styles';

import Amadal from '../../../../assets/images/amadal.png';
import cater from '../../../../assets/images/cater.png';
import srGonzales from '../../../../assets/images/srGonzales.png';

import { CardLoader } from '../../../../Components/CardLoader';

const { Meta } = Card;

const cards = [
    {
        title: 'Amadal',
        image: Amadal,
        url: '/amadal'
    },
    {
        title: 'Señor Gonzales',
        image: srGonzales,
        url: '/srGonzales'
    },
    {
        title: 'Catering Company',
        image: cater,
        url: '/cateringCompany'
    }
]

class SelectionSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    render() {
        const { loading } = this.state;
        return (
            <>
                <h2 className='center mt2 mb0' style={{ color: 'white' }}>Select A Restaurant To Order From</h2>
                <HPRow className="flex justify-center">
                    {
                        cards.map(({ title, image, url }) => (
                            <Card
                                key={title}
                                hoverable
                                bordered={false}
                                onClick={() => {
                                    this.props.history.push(`${url}/list`)
                                }}
                                style={{ width: 240, margin: '1rem' }}
                                cover={
                                    <img
                                        style={{ maxHeight: '237px' }}
                                        alt="example"
                                        onLoad={() => this.setState({ loading: false })}
                                        src={image} />
                                }
                            >
                                {
                                    loading ?
                                        <CardLoader />
                                        :
                                        <Meta
                                            style={{ textAlign: 'center', fontSize: '20px' }}
                                            title={title} />
                                }
                            </Card>
                        ))
                    }
                </HPRow>
            </>
        );
    }
}

export default withRouter(SelectionSection);