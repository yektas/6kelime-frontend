import { observable, action, decorate, computed } from 'mobx';
import API from "../helpers/api";
import { message } from 'antd';
import uiStore from './uiStore';

class CommentStore {
    postSlug = ''
    comments = []

    setSlug(slug) {
        this.postSlug = slug;
        this.comments = [];
    }

    getComments() {
        API.request('GET', '/comment/list/' + this.postSlug).then(
            (response) => {
                console.log(response, 'dasda');
                this.comments = response
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        )
    }

}

decorate(CommentStore, {
    postSlug: observable,
    comments: observable,
    getComments: action,
    setSlug: action,
});

const commentStore = new CommentStore();

export default commentStore;
