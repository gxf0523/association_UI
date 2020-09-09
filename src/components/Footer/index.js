import React, { Component } from "react";
import styles from "./css/index.module.css"
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className={styles.FooterPublic}>
                <p>北京卫健基业生物技术研究所（备案号）</p>
                <p className={styles.FooterItem}>
                    <span>地址：北京市丰台区东大街8号院</span>
                    <span>电话：86-010-66933233</span>
                    <span>邮编：100071</span>
                    <span>E-mail：lqc516@163.com</span>
                </p>
            </div>
        )
    }
}
export default Footer;
