import React from "react";
import styles from "./Header.module.css";
import logo from '../../assets/logo.svg';
import type {MenuProps} from "antd";
import {Layout, Typography, Input, Menu, Button, Dropdown} from "antd";
import {GlobalOutlined} from "@ant-design/icons"

const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a>
          中文
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a>
          English
        </a>
      ),
    }
  ];

export const Header: React.FC = () => {
    return(
        <div className={styles["App-header"]}>
          {/* top-header */}
          <div className={styles['Top-header']}>
            <div className={styles.inner}>
              <div style={{display:"inline-block"}}>
                <Typography.Text>Find your next book</Typography.Text>
              </div>
              <div style={{display:"inline-block"}}>
                <Dropdown.Button className={styles['Drop-down']} menu={{items}} icon={<GlobalOutlined />}>
                  Language
                </Dropdown.Button>
              </div>
              <Button.Group className={styles['Button-Group']}>
                <Button>Register</Button>
                <Button>Login</Button>
              </Button.Group>
            </div>
          </div>
          <Layout.Header className={styles["Main-header"]}>
            <img src={logo} alt="logo" className={styles["App-logo"]}/>
            <Typography.Title level={3} className={styles["Title"]}>Dragonball</Typography.Title>
            <Input.Search placeholder="Please input the book you're looking for" className={styles["Search-input"]}/>
          </Layout.Header>
          <Menu mode={'horizontal'} className={styles['Main-menu']}>
            <Menu.Item key={1}>Index</Menu.Item>
            <Menu.Item key={2}>Fictions</Menu.Item>
            <Menu.Item key={3}>Romantic</Menu.Item>
            <Menu.Item key={4}>History</Menu.Item>
            <Menu.Item key={5}>Biography</Menu.Item>
            <Menu.Item key={6}>Magzine</Menu.Item>
            <Menu.Item key={7}>Education</Menu.Item>
            <Menu.Item key={8}>Technology</Menu.Item>
            <Menu.Item key={9}>Poem</Menu.Item>
            <Menu.Item key={10}>Horror</Menu.Item>
            <Menu.Item key={11}>Art</Menu.Item>
            <Menu.Item key={12}>Business</Menu.Item>
            <Menu.Item key={13}>Children</Menu.Item>
            <Menu.Item key={14}>Cooking</Menu.Item>
            <Menu.Item key={15}>Health</Menu.Item>
            <Menu.Item key={16}>Law</Menu.Item>
          </Menu>
        </div>
    
        );
}
