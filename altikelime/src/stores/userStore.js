import { observable, action, decorate } from 'mobx';
import API from "../helpers/api";

class UserStore {
    user = null;
    
	setUser(user) {
		this.user = user;
	}

	login(payload){
		API.request('POST', '/login/', payload).then(
			(response) => this.setUser(response)
		)
	}

	register(payload){
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
