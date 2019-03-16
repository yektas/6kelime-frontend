import { Button, Icon } from 'antd';
import { Field, Form as FormikForm, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import FormInput from '../common/FormInput';
import userStore from "../../stores/userStore";

const validationSchema = Yup.object({
	username: Yup.string('Username').required('Username is required')
});

const Form = styled(FormikForm)`
	max-width: 400px;
	margin: auto;
`;

class RegisterForm extends React.Component {
	handleSubmit = (values, actions) => {
		
		actions.setSubmitting(false);
		let username = values.username;
		let email = values.email;
		let password = values.password;
		const payload = { username, email, password };
		userStore.register(payload);
	};

	render() {
		return (
			<Formik
				initialValues={{
					email: '',
					username: '',
					password: ''
				}}
				validationSchema={validationSchema}
				onSubmit={this.handleSubmit}
				render={formProps => (
					<Form>
						<Field
							component={FormInput}
							name="email"
							type="email"
							placeholder="Email"
							prefix={
								<Icon
									type="user"
									style={{
										color: 'rgba(0,0,0,.25)'
									}}
								/>
							}
							hasFeedback
						/>
						<Field
							component={FormInput}
							name="username"
							type="text"
							placeholder="Username"
							prefix={
								<Icon
									type="user"
									style={{
										color: 'rgba(0,0,0,.25)'
									}}
								/>
							}
							hasFeedback
						/>
						<Field
							component={FormInput}
							name="password"
							type="password"
							placeholder="Password"
							prefix={
								<Icon
									type="lock"
									style={{
										color: 'rgba(0,0,0,.25)'
									}}
								/>
							}
						/>
						<Button
							type="primary"
							htmlType="submit"
							loading={formProps.isSubmitting}>
							Login
						</Button>
					</Form>
				)}
			/>
		);
	}
}

export default RegisterForm;
