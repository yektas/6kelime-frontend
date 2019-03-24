import { observable, action, decorate, computed } from 'mobx';
import API from "../helpers/api";


class CommentStore {
    postSlug = ''
    comments = []
    commentSource = [
        'Harika bir hikaye',
        'Muhteşem bir hikaye',
        'Daha iyi olabilir',
        'Fena değil'
    ]

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

    sendComment(comment) {
        const payload = {
            comment
        }
        API.request('POST', '/create-comment/' + this.postSlug + '/', payload)

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
