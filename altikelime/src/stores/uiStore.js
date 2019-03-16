import { observable, action, decorate } from 'mobx';


class uiControllerStore {
    authModal = false
    commentModal = false

    openAuthModal() {
        this.authModal = true
    }
    closeAuthModal() {
        this.authModal = false
    }
    openCommentModal() {
        this.commentModal = true
    }
    closeCommentModal() {
        this.commentModal = false
    }
}

decorate(uiControllerStore, {
    authModal: observable,
    commentModal: observable,
    openAuthModal: action,
    closeAuthModal: action,
    openCommentModal: action,
    closeCommentModal: action,
});

const uiStore = new uiControllerStore();

export default uiStore;
