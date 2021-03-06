import React, {Component} from 'react';
import {Row, Col} from 'antd';
import styles from '@/components/layout/Main.module.less';
import UserInfo from '@/components/user/UserInfo'
import SimpleTagList from "@/components/tags/SimpleTagList";
import SearchForm from "@/components/search/SearchForm";

class Main extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Row className={styles.content}>
          <Row gutter={20}>
            <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 0 }} >
              <div className={styles.gutterLeft}>

                <UserInfo />
                <SearchForm />
                <SimpleTagList />

              </div>
            </Col>
            <Col xs={{ span: 24, offset: 0 }} lg={{ span: 18, offset: 0 }}>
              <div className={styles.gutterRight}>
                { this.props.children }
              </div>
            </Col>
          </Row>
        </Row>
      </div>
    );
  }
};

export default Main;
