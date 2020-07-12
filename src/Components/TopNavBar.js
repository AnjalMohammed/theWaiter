import React, { Component } from 'react';
import { MobileOutlined, LogoutOutlined, ProfileOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';

import { Menu, Dropdown } from 'antd';
import { connect } from 'react-redux';
import { logout } from '../actions/LoginActions';
import { UserIcon } from '../styles/ComponentStyles';
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
            <div className="flex justify-between items-center absolute fluid" style={{ padding: '0 20%', top: '10px' }}>
                <div>
                    <MobileOutlined /> Get the App
                </div>
                {
                    this.props.logoNeeded &&
                    <LogoText {...this.props.logoStyles}
                        redirect={this.props.redirect}
                    />
                }
                <div>
                    <Dropdown trigger={["click"]} placement="bottomCenter" overlay={this.menu}>
                        <UserIcon />
                    </Dropdown>
                </div>
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
