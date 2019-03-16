import map from 'lodash/map';
import React from 'react';
import { DatePicker, Form, Input, TimePicker, Select } from 'antd';

const FormItem = Form.Item;
const { Option } = Select;

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 8 }
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 16 }
	}
};

const CreateAntField = AntComponent => ({
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
		<FormItem
			{...formItemLayout}
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
			<AntComponent
				{...field}
				{...props}
				onBlur={onBlur}
				onChange={type ? onInputChange : onChange}>
				{selectOptions &&
					map(selectOptions, name => (
						<Option key={name}>{name}</Option>
					))}
			</AntComponent>
		</FormItem>
	);
};

export const AntSelect = CreateAntField(Select);
export const AntDatePicker = CreateAntField(DatePicker);
export const AntInput = CreateAntField(Input);
export const AntTimePicker = CreateAntField(TimePicker);
