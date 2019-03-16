import React from 'react';
import { Tabs, Modal } from 'antd';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const TabPane = Tabs.TabPane;

class AuthModal extends React.Component {
	render() {
		const { visible, onCancel, onOk } = this.props;
		return (
			<Modal
				visible={visible}
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
}

export default AuthModal;
