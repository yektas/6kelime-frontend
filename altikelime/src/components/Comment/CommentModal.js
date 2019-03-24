import React from 'react';
import uiStore from '../../stores/uiStore';
import { observer } from "mobx-react"
import { Modal, Button, Empty, AutoComplete, message } from 'antd';
import commentStore from '../../stores/commentStore';
import userStore from '../../stores/userStore';

const CommentModal = observer(
  class CommentModal extends React.Component {
    state = {
      comment: null
    }


    sendComment = () => {
      console.log(123123)
    }

    closeModal = () => {
      uiStore.closeCommentModal();
    }

    setComment = (value) => {
      this.setState({
        comment: value
      })
      console.log(this.state.comment)
    }

    select = (value) => {
      this.setState({
        comment: value
      })
    }

    sendComment = () => {
      if (userStore.user) {
        commentStore.sendComment(this.state.comment)
        message.success('Yorumunuz Gönderildi')
      }
      else {
        uiStore.openAuthModal()
        message.info('Önce üye girişi yapmanız gerekiyor')
        uiStore.closeCommentModal();
      }


    }

    render() {
      return (
        <div>
          <Modal
            visible={uiStore.commentModal}
            title="Yorumlar"
            onOk={this.sendComment}
            onCancel={() => this.closeModal}
            footer={[
              <AutoComplete
                onSelect={this.select}
                dataSource={commentStore.commentSource}
                onSearch={this.setComment}
                style={{ width: 400 }}
                placeholder="Yorum"
              />,
              <Button key="submit" type="primary" loading={this.state.loading} onClick={this.sendComment}>
                Submit
              </Button>
            ]}
          >
            {commentStore.comments.length > 0 ? commentStore.comments.map((item) => <p>{item.comment}</p>) : <Empty description='Hemen ilk yorumu sen yap' />}
          </Modal>
        </div>
      )
    }
  }
)
export default CommentModal;