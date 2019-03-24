import {
    Skeleton, Switch, Card, Icon, Avatar,
} from 'antd';
import React, { Component } from 'react';
import uiStore from '../../stores/uiStore';
import CommentModal from '../Comment/CommentModal'
import commentStore from '../../stores/commentStore';
import likeStore from '../../stores/likeStore';
import userStore from '../../stores/userStore';

const { Meta } = Card;

export default class Post extends Component {
    openModal = (slug) => {
        commentStore.setSlug(slug);
        commentStore.getComments();
        uiStore.openCommentModal();
    }

    like = (slug) => {
        if (userStore.user) {
            likeStore.setLike(slug);
        }
        else {
            uiStore.openAuthModal();
        }
    }

    render() {
        const { loading, width, post } = this.props;
        const heart = post.is_like ? <Icon type="heart" theme="filled" onClick={() => this.like(post.slug)} /> : <Icon type="heart" onClick={() => this.like(post.slug)} />
        return (
            <div>
                <CommentModal />
                <Card
                    title={post.category_name}
                    extra={post.update_at}
                    style={{ width: width, marginTop: 16 }}
                    actions={[heart, <Icon type="edit" onClick={() => this.openModal(post.slug)} />, <Icon type="setting" theme="filled" />]}
                >
                    <Skeleton loading={loading} avatar active>
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={post.username}
                            description={post.content}
                        />
                    </Skeleton>
                </Card>
            </div>
        );
    }
}

