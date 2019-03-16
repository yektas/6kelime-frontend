import React from 'react';
import uiStore from '../../stores/uiStore';
import { observer } from "mobx-react"
import { Modal, Button, Empty } from 'antd';
import commentStore from '../../stores/commentStore';

const CommentModal = observer(
  class CommentModal extends React.Component {
    state = {
      loading: false
    }


    sendComment = () => {
      console.log(123123)
    }

    closeModal = () => {
      uiStore.closeCommentModal();
    }


    render() {
      return (
        <div>
          <Modal
            visible={uiStore.commentModal}
            title="Title"
            onOk={this.sendComment}
            onCancel={() => this.closeModal}
            footer={[
              <Button key="submit" type="primary" loading={this.state.loading} onClick={this.sendComment}>
                Submit
            </Button>,
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