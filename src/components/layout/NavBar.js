import React, {Component} from 'react';
import {Menu} from 'antd';
import styles from './NavBar.module.less';
import logo from '@/logo.svg';

class NavBar extends Component {
  render() {
    return (
      <div className={styles.navBar}>
        <div className={styles.middle}>
          <div className={styles.main}>

            <div className={styles.menuInline}>
              <Menu
                mode="horizontal"
                defaultSelectedKeys={['2']}
              >
                <Menu.Item key="navIndex"><b>&nbsp;&nbsp;首 页&nbsp;&nbsp;</b></Menu.Item>
                <Menu.Item key="navTags"><b>&nbsp;&nbsp;标 签&nbsp;&nbsp;</b></Menu.Item>
              </Menu>
            </div>

          </div>
        </div>

        <div className={styles.left}>
          <div className={styles.title}>
            <div className={styles.logo}>
              <img src={logo} className={styles.logoImg} alt="logo"/>
            </div>
          </div>

        </div>

        <div className={styles.right}>
          <span>...</span>
        </div>
      </div>
    );
  }
};

export default NavBar;