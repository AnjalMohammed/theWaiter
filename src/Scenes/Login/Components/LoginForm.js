import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Button, Form, Icon } from 'antd';
import { FormInput, Label, Text, InputIcon } from '../styles';
import { PrimaryButton } from '../../../styles/AppStyles';

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            passwordType: 'password'
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');

        return (
            <div>
                <Form onSubmit={this.submitForm}>
                    <Form.Item
                        validateStatus={usernameError ? 'error' : ''}
                        help={usernameError || ''}>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input a valid username!' }],
                        })(
                            <div>
                                <Label>Username</Label>
                                <FormInput
                                    // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Enter your username"
                                />
                                <InputIcon type='user' />
                            </div>,
                        )}
                    </Form.Item>
                    <Form.Item
                        validateStatus={passwordError ? 'error' : ''}
                        help={passwordError || ''}>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input a valid password!' }],
                        })(
                            <div>
                                <Label>Password</Label>
                                <FormInput
                                    // prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type={this.state.passwordType}
                                    placeholder="Enter your password"
                                />
                                {
                                    this.state.passwordType == 'password' ?
                                        <InputIcon
                                            className='pointer'
                                            onClick={() => this.setState({ passwordType: 'text' })}
                                            type='eye'
                                            theme='filled' />
                                        :
                                        <InputIcon
                                            className='pointer'
                                            onClick={() => this.setState({ passwordType: 'password' })}
                                            type='eye-invisible'
                                            theme='filled' />
                                }
                            </div>,
                        )}
                    </Form.Item>
                    <Form.Item className='center'>
                        <PrimaryButton
                            htmlType="submit"
                            disabled={hasErrors(getFieldsError())}>
                            Log in
                    </PrimaryButton>
                    </Form.Item>
                </Form>
                <div className='flex justify-center'>
                    <Text>Forgot your password?</Text>
                    <Link to='/login/reset' className='ml1'>Reset password</Link>
                </div>
                <div className='flex justify-center'>
                    <Text>New User?</Text>
                    <Link to='/login/createUser' className='ml1'>Create Account</Link>
                </div>
            </div>
        );
    }
}
const WrappedLoginForm = Form.create({ name: 'loginForm' })(LoginForm);

export default withRouter(WrappedLoginForm);