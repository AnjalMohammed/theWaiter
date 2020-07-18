import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import { Card, Col } from 'antd';

import { ListRow } from './styles';
import { PrimaryButton } from '../../styles/AppStyles';

import TopNavBar from '../../Components/TopNavBar';

import srGonzales from '../../data/srGonzales';
import { CardLoader } from '../../Components/CardLoader';

class Listings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    addToCart = (name) => {
        let val = 1;
        if (this.state[name])
            val = this.state[name] + 1;

        this.setState({
            [name]: val,
        })
    }

    editCartValue = (name, quantity) => this.setState({ [name]: quantity })

    render() {
        const { loading } = this.state;
        return (
            <>
                <TopNavBar
                    logoNeeded
                    logoStyles={{ margin: '0 2rem' }}
                    redirect
                />
                <ListRow
                    loading={loading}
                >
                    {
                        srGonzales.map(({ name, price, image }, index) => (
                            <Col
                                key={index}
                                md={8}
                                xs={24}
                                style={{ padding: '1%' }}>
                                <Card
                                    bordered={false}
                                    bodyStyle={{
                                        padding: `${loading ? '0' : '20px'}`
                                    }}
                                    cover={
                                        <img
                                            alt={name}
                                            src={image}
                                            onLoad={() => this.setState({ loading: false })}
                                        />
                                    }
                                >{
                                        loading ?
                                            <CardLoader />
                                            :
                                            <>
                                                <h2>{name}</h2>
                                                <p className='flex bold mb0 items-center justify-between'>
                                                    {price}
                                                    <span className='flex justify-center items-center'>
                                                        {
                                                            !this.state[name] ?
                                                                <PrimaryButton
                                                                    onClick={() => this.addToCart(name)}
                                                                    width="125px"
                                                                    type='primary'>
                                                                    Add To Order
                                                </PrimaryButton>
                                                                :
                                                                <>
                                                                    <PrimaryButton
                                                                        className='mr1'
                                                                        onClick={() => this.editCartValue(name, this.state[name] - 1)}
                                                                        type='primary'
                                                                        nominwidth
                                                                    >
                                                                        -
                                                    </PrimaryButton>
                                                                    {this.state[name]}
                                                                    <PrimaryButton
                                                                        className='ml1'
                                                                        onClick={() => this.editCartValue(name, this.state[name] + 1)}
                                                                        type='primary'
                                                                        nominwidth>
                                                                        +
                                                    </PrimaryButton>
                                                                </>
                                                        }
                                                    </span>
                                                </p>
                                            </>
                                    }
                                </Card>
                            </Col>
                        ))
                    }

                </ListRow>
            </>
        );
    }
}

const mapStateToProps = ({
    login: { loggedIn }
}) => ({
    loggedIn
})

export default withRouter(connect(mapStateToProps)(Listings));