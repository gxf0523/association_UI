import React, { Component } from "react";
import styles from "./css/index.module.css";
import axios from "../../axios";
import Plublic from '../../common/js/Plublic';
const graduateLogo = require('../../common/img/graduate_logo.png');
// const associationLogo = require('../../common/img/association_logo.png');

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Plublic.getUrlParam("id") || 0,
            url: window.location.pathname,
            listTop: [],
        }
    }
    componentDidMount() {
        let that = this;
        axios.getCateData().then(res => {
            if (res && res.code === 1) {
                let data = res.data.detail;
                for (var i = 0; i < data.length; i++) {
                    data[i].checked = false;
                }
                data.splice(0, 0, { name: '网站首页', url: '/Home' });
                data[0].checked = true;
                that.setState({
                    listTop: data
                })
            }
        });
    }
    onJump = (item) => {
        if (item.name === '网站首页') {
            window.location.href = '/Home';
        } else if (item.name === '联系我们') {
            window.location.href = '/BriefIntroduction?id=' + item.id;
        }else {
            window.location.href = '/ResearchDevelopment?id=' + item.id;

        }
    }
    render() {
        const { listTop, id, url } = this.state;
        return (
            <div className={styles.HeaderPublic}>
                <div className={styles.headerTop}>
                    <div className={styles.headerTopLeft}>
                        <img className={styles.headerTopImg} src={graduateLogo} alt="" />
                        <div className={styles.headerTopCenter}>
                            <p className={styles.headerTopCenterZ}>北京卫健基业生物技术研究所</p>
                            <p className={styles.headerTopCenterE}>Beijing WeijianJiye Institute of  Biotechnology</p>
                        </div>
                        {/* <div className={styles.headerTopLine}></div> */}
                    </div>
                    {/* <div className={styles.headerTopRight}>
                        <img className={styles.headerTopRightImg} src={associationLogo} alt="" />
                        <span className={styles.headerTopRightText}>中国医药教育协会</span>
                    </div> */}
                </div>
                <div className={styles.MaxNavWidth}>
                    <div className={styles.MinNavWidth}>
                        {
                            listTop && listTop.map((item, index) => (
                                <span className={(item.id === id || (url.includes('Home') && index === 0)) ? `${styles.titleItemchecked}` : `${styles.titleItem}`} key={index} onClick={() => this.onJump(item)}>{item.name}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;
