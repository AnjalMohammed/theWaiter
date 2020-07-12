import React, { Component } from 'react';
import { Heading, SubHeading, PrimaryButton } from '../../../styles/AppStyles';
import { Form } from 'antd';
import { Label, FormInput } from '../styles';


function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class ResetPassword extends Component {

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
        const usernameError = isFieldTouched('newPassword') && getFieldError('newPassword');
        const passwordError = isFieldTouched('confirmPassword') && getFieldError('confirmPassword');

        return (
            <div>
                <div className='my3'>
                    <Heading className='center'>Reset your password</Heading>
                    <SubHeading className='center'>What would you like your new password to be??</SubHeading>
                </div>
                <Form onSubmit={this.submitForm}>
                    <Form.Item
                        validateStatus={usernameError ? 'error' : ''}
                        help={usernameError || ''}>
                        {
                            getFieldDecorator('newPassword',{
                                rules: [{ required: true, message: 'Please input a valid password!' }],
                            })
                                (
                                    <div>
                                        <Label>Password</Label>
                                        <FormInput
                                            type='password'
                                            placeholder="Enter new password"
                                        />
                                    </div>,
                                )
                        }
                    </Form.Item>
                    <Form.Item
                        validateStatus={passwordError ? 'error' : ''}
                        help={passwordError || ''}>
                        {
                            getFieldDecorator('confirmPassword',{
                                rules: [{ required: true, message: 'Please input a valid password!' }],
                            })
                                (
                                    <div>
                                        <Label>Confirm Password</Label>
                                        <FormInput
                                            type='password'
                                            placeholder="Confirm password"
                                        />
                                    </div>,
                                )
                        }
                    </Form.Item>
                    <Form.Item className='center'>
                        <PrimaryButton
                            htmlType="submit"
                            disabled={hasErrors(getFieldsError())}>
                            Save
                    </PrimaryButton>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const WrappedResetForm = Form.create({ name: 'resetForm' })(ResetPassword);

export default (WrappedResetForm);