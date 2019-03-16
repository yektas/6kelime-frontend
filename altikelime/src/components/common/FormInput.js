import React from 'react';
import { Input, Form } from 'antd';

const Password = Input.Password;

const FormInput = ({
	field,
	form,
	hasFeedback,
	label,
	selectOptions,
	submitCount,
	type,
	...props
}) => {
	const touched = form.touched[field.name];
	const submitted = submitCount > 0;
	const hasError = form.errors[field.name];
	const submittedError = hasError && submitted;
	const touchedError = hasError && touched;
	const onInputChange = ({ target: { value } }) =>
		form.setFieldValue(field.name, value);
	const onChange = value => form.setFieldValue(field.name, value);
	const onBlur = () => form.setFieldTouched(field.name, true);
	return (
		<Form.Item
			label={label}
			hasFeedback={
				(hasFeedback && submitted) || (hasFeedback && touched)
					? true
					: false
			}
			help={submittedError || touchedError ? hasError : false}
			validateStatus={
				submittedError || touchedError ? 'error' : 'success'
			}>
			{type === 'password' ? (
				<Password
					{...field}
					{...props}
					onBlur={onBlur}
					onChange={type ? onInputChange : onChange}
				/>
			) : (
				<Input
					{...field}
					{...props}
					onBlur={onBlur}
					onChange={type ? onInputChange : onChange}
				/>
			)}
		</Form.Item>
	);
};

export default FormInput;
