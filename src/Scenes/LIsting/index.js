import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import TopNavBar from '../../Components/TopNavBar';
import { Card } from 'antd';
import { ListRow } from './styles';
import { Col } from 'antd';
import { PrimaryButton } from '../../styles/AppStyles';


import AguaFresca from '../../assets/images/AguaFresca.png';
import BeefBurrito from '../../assets/images/BeefBurrito.png';
import ChickenCheeseBurger from '../../assets/images/ChickenCheeseBurger.png';
import Churros from '../../assets/images/Churros.png';
import ClassicMojito from '../../assets/images/ClassicMojito.png';
import Pinacollada from '../../assets/images/Pinacollada.png';
import SignatureBurger from '../../assets/images/SignatureBurger.png';
import SmashedBurger from '../../assets/images/SmashedBurger.png';

const listData = [
    {
        name: 'Agua Fresca',
        price: 'AED 20.00',
        image: AguaFresca
    },
    {
        name: 'Beef Burrito',
        price: 'AED 35.00',
        image: BeefBurrito
    },
    {
        name: 'Chicken Cheese Burger',
        price: 'AED 32.00',
        image: ChickenCheeseBurger
    },
    {
        name: 'Churros',
        price: 'AED 20.00',
        image: Churros
    },
    {
        name: 'Classic Mojito',
        price: 'AED 20.00',
        image: ClassicMojito
    },
    {
        name: 'Pinacollada',
        price: 'AED 20.00',
        image: Pinacollada
    },
    {
        name: 'Signature Burger',
        price: 'AED 34.00',
        image: SignatureBurger
    },
    {
        name: 'Smashed Burger',
        price: 'AED 34.00',
        image: SmashedBurger
    },
    {
        name: 'Agua Fresca',
        price: 'AED 20.00',
        image: AguaFresca
    },
    {
        name: 'Beef Burrito',
        price: 'AED 35.00',
        image: BeefBurrito
    },
    {
        name: 'Chicken Cheese Burger',
        price: 'AED 32.00',
        image: ChickenCheeseBurger
    },
    {
        name: 'Churros',
        price: 'AED 20.00',
        image: Churros
    },
    {
        name: 'Classic Mojito',
        price: 'AED 20.00',
        image: ClassicMojito
    },
    {
        name: 'Pinacollada',
        price: 'AED 20.00',
        image: Pinacollada
    },
    {
        name: 'Signature Burger',
        price: 'AED 34.00',
        image: SignatureBurger
    },
    {
        name: 'Smashed Burger',
        price: 'AED 34.00',
        image: SmashedBurger
    }
]

class Listings extends Component {
    constructor(props) {
        super(props);
        this.state = {

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
        return (
            <>
                <TopNavBar
                    logoNeeded
                    logoStyles={{ margin: '0 2rem' }}
                    redirect
                />
                <ListRow>
                    {
                        listData.map(({ name, price, image }, index) => (
                            <Col
                                key={index}
                                span={6} style={{ padding: '1%' }}>
                                <Card
                                    cover={
                                        <img
                                            style={{
                                                maxHeight: '237px',
                                                margin: '0 auto'
                                            }}
                                            alt={name}
                                            src={image} />
                                    }
                                >
                                    <h2>{name}</h2>
                                    <p className='flex items-center justify-between'>
                                        {price}
                                        <span className='flex items-center'>
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