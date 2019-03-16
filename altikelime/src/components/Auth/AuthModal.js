import React from 'react';
import { Tabs, Modal } from 'antd';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import uiStore from '../../stores/uiStore';
import { observer } from "mobx-react"

const TabPane = Tabs.TabPane;

const AuthModal = observer(class AuthModal extends React.Component {
	render() {
		const { onCancel, onOk } = this.props;
		return (
			<Modal
				visible={uiStore.authModal}
				footer={null}
				onCancel={onCancel}
				onOk={onOk}>
				<Tabs defaultActiveKey="1" onChange={null}>
					<TabPane tab="Login" key="1">
						<LoginForm />
					</TabPane>
					<TabPane tab="Register" key="2">
						<RegisterForm />
					</TabPane>
				</Tabs>
			</Modal>
		);
	}
})

export default AuthModal;
