import { observable, action, decorate } from 'mobx';
import API from "../helpers/api";
import { message } from 'antd';
import uiStore from './uiStore';

class UserStore {
	user = null;

	setUser(user) {
		this.user = user;
	}

	login(payload) {
		API.request('POST', '/login/', payload).then(
			(response) => {
				this.setUser(response);
				message.success('Giriş Yapıldı');
				uiStore.closeAuthModal();
			}
		).catch(
			(err) => {
				message.error(err.non_field_errors[0])
			}
		)
	}

	register(payload) {
		API.request('POST', '/register/', payload).then(
			(response) => alert("Activation email is sent")
		)
	}
}

decorate(UserStore, {
	user: observable,
	setUser: action,
	login: action,
	register: action
});

const userStore = new UserStore();

export default userStore;
