import { observable, action, decorate } from 'mobx';
import API from "../helpers/api";


class LikeStore {

    status = null

    setLike(slug) {
        API.request('POST', '/like/post/' + slug + '/').then(
            (response) => this.status = response.status
        )

    }

}

decorate(LikeStore, {
    status: observable,
    setLike: action,
});

const likeStore = new LikeStore();

export default likeStore;
