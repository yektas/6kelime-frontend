import {
    Skeleton, Switch, Card, Icon, Avatar,
} from 'antd';
import React, { Component } from 'react';

const { Meta } = Card;

export default class Post extends Component {
    render() {
        const { loading, width, isOwner, username, content, isLike } = this.props;
        const heart = isLike ? <Icon type="heart" theme="filled" /> : <Icon type="heart" />
        return (
            <div>
                <Card
                    style={{ width: width, marginTop: 16 }}
                    actions={[heart, <Icon type="edit" />, <Icon type="setting" theme="filled" />]}
                >
                    <Skeleton loading={loading} avatar active>
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={username}
                            description={content}
                        />
                    </Skeleton>
                </Card>
            </div>
        );
    }
}

