import React, { Component } from 'react'
import { Layout, Menu, Row, Col } from 'antd';
import styled from "styled-components";
import { Link, withRouter } from 'react-router-dom';

const { Header: AntHeader } = Layout;

const CustomHeader = styled(AntHeader)`
    background: #ffff !important
    width: 100% !important
    padding: 0 !important
`;


class HeaderClass extends Component {
    render() {
        const { location } = this.props;
        return (
            <CustomHeader>
                <Menu
                    mode="horizontal"
                    selectedKeys={[location.pathname]}>
                    <Menu.Item key="/">
                        <Link to="/" />
                        HOME
                    </Menu.Item>
                    <Menu.Item key="/blog/new-post">
                        <Link to="/blog/new-post" />
                        NEW POST
                    </Menu.Item>
                    <Menu.Item key="/blog">
                        <Link to="/blog" />
                        BLOG
                    </Menu.Item>
                    <Menu.Item key="/about">
                        <Link to="/about" />
                        ABOUT
                    </Menu.Item>
                    <Menu.Item key="/portfolio">
                        <Link to="/portfolio" />
                        PORTFOLIO
                    </Menu.Item>
                </Menu>
        </CustomHeader>
        )
  }
};

const Header = withRouter(HeaderClass);

export { Header };