import {
    Skeleton, Switch, Card, Icon, Avatar,
} from 'antd';
import React, { Component } from 'react';
import uiStore from '../../stores/uiStore';
import CommentModal from '../Comment/CommentModal'
import commentStore from '../../stores/commentStore';

const { Meta } = Card;

export default class Post extends Component {
    openModal = (slug) => {
        commentStore.setSlug(slug);
        commentStore.getComments();
        uiStore.openCommentModal();
    }

    render() {
        const { loading, width, post } = this.props;
        const heart = post.isLike ? <Icon type="heart" theme="filled" /> : <Icon type="heart" />
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

