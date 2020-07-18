import React, { Component } from 'react';
import { MobileOutlined, LogoutOutlined, ProfileOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';

import { Menu, Dropdown } from 'antd';
import { connect } from 'react-redux';
import { logout } from '../actions/LoginActions';
import { UserIcon, WebDiv } from '../styles/ComponentStyles';
import LogoText from './LogoText';



class TopNavBar extends Component {

    menu = () => (
        <Menu>
            <Menu.Item key="0">
                <ProfileOutlined className="mr1" /> Profile
        </Menu.Item>
            <Menu.Item key="1" onClick={() => {
                this.props.logout();
                this.props.history.push('/login');
            }
            }>
                <LogoutOutlined className="mr1" /> Logout
        </Menu.Item>
        </Menu>
    );

    render() {
        return (
            <div className="flex justify-between items-center absolute fluid" style={{ padding: '0 7%', top: '10px' }}>
                <WebDiv>
                    <MobileOutlined /> Get the App
                </WebDiv>
                {
                    this.props.logoNeeded &&
                    <LogoText {...this.props.logoStyles}
                        redirect={this.props.redirect}
                    />
                }
                <WebDiv>
                    <Dropdown trigger={["click"]} placement="bottomCenter" overlay={this.menu}>
                        <UserIcon />
                    </Dropdown>
                </WebDiv>
            </div>
        );
    }
}

TopNavBar.defaultProps = {
    logoNeeded: false,
    logoStyles: {},
    redirect: false,
};

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopNavBar));
