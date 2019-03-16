import React, { Component } from 'react'
import { Button } from "antd";
import { Header } from "../components/Header"
import AuthModal from "../components/Auth/AuthModal"
import Post from "../components/Post/Post"
import API from '../helpers/api';
import uiStore from '../stores/uiStore';

export default class Home extends Component {

  state = {
    posts: [],
    loading: true
  }

  componentDidMount() {
    API.request('GET', '/post/category/Edebiyat').then(
      (response) => { console.log(response); this.setState({ posts: response }) }
    ).then(
      this.setState({
        loading: false,
        showAuthModal: false
      })
    )
  }

  showAuthModal = () => {
    uiStore.openAuthModal();
  };

  closeAuthModal = () => {
    uiStore.closeAuthModal()
  };
  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />

        <Button type='primary' onClick={this.showAuthModal}>
          Login
        </Button>
        <AuthModal visible={this.state.showAuthModal} onCancel={this.closeAuthModal} />

        {posts.map((post, index) => (
          <div key={index}>
            <Post
              post={post}
              width={500}
              loading={this.state.loading}
            />
          </div>
        ))}
      </div>
    )
  }
}
