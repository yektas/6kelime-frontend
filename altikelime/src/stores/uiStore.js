import { observable, action, decorate } from 'mobx';


class uiControllerStore {
    authModal = false

    openAuthModal() {
        this.authModal = true
    }
    closeAuthModal() {
        this.authModal = false
    }
}

decorate(uiControllerStore, {
    authModal: observable,
    openAuthModal: action,
    closeAuthModal: action,
});

const uiStore = new uiControllerStore();

export default uiStore;
