import React, { Component } from "react";
import styles from "./css/index.module.css";
const graduateLogo = require('../../common/img/graduate_logo.png');
const associationLogo = require('../../common/img/association_logo.png');

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listTop: [
                {
                    name: '网站首页',
                    checked: true,
                    url: '/Home'
                },
                {
                    name: '企业简介',
                    checked: false,
                    url: '/BriefIntroduction'
                },
                {
                    name: '科技研发',
                    checked: false,
                    url: '/ResearchDevelopment'
                },
                {
                    name: '科研服务',
                    checked: false,
                    url: '/Service'
                },
                {
                    name: '培训教育',
                    checked: false,
                    url: '/Education'
                },
                {
                    name: '联系我们',
                    checked: false,
                    url: '/ContactUs'
                }
            ]
        }
    }
    componentDidMount() {
        var windowUrl = window.location.pathname;
        switch (windowUrl) {
            case '/Home':
                this.getNewlistTop(0);
                break;
            case '/BriefIntroduction':
                this.getNewlistTop(1);
                break;
            case '/ResearchDevelopment':
                this.getNewlistTop(2);
                break;
            case '/Service':
                this.getNewlistTop(3);
                break;
            case '/Education':
                this.getNewlistTop(4);
                break;
            case '/ContactUs':
                this.getNewlistTop(5);
                break;
            default:
        }

    }
    getNewlistTop = (index) => {
        const listTop = this.state.listTop;
        for (var i = 0; i < listTop.length; i++) {
            listTop[i].checked = false;
        }
        listTop[index].checked = true;

        this.setState({
            listTop
        })
    }
    onJump = (url) => {
        // var NowUrl = window.location.pathname;
        // if (NowUrl === 'Home' || NowUrl === 'BriefIntroduction' || NowUrl === 'ResearchDevelopment' || NowUrl === 'Service' || NowUrl === 'Education' || NowUrl === 'ContactUs') {
            window.location.href = url;
        // }
    }
    render() {
        const { listTop } = this.state;
        return (
            <div className={styles.HeaderPublic}>
                <div className={styles.headerTop}>
                    <div className={styles.headerTopLeft}>
                        <img className={styles.headerTopImg} src={graduateLogo} alt="" />
                        <div className={styles.headerTopCenter}>
                            <p className={styles.headerTopCenterZ}>北京卫健基业生物技术研究所</p>
                            <p className={styles.headerTopCenterE}>Beijing WeijianJiye Institute of  Biotechnology</p>
                        </div>
                        <div className={styles.headerTopLine}></div>
                    </div>
                    <div className={styles.headerTopRight}>
                        <img className={styles.headerTopRightImg} src={associationLogo} alt="" />
                        <span className={styles.headerTopRightText}>中国医药教育协会</span>
                    </div>
                </div>
                <div className={styles.MaxNavWidth}>
                    <div className={styles.MinNavWidth}>
                        {
                            listTop.map((item, index) => (
                                <span className={item.checked ? `${styles.titleItemchecked}` : `${styles.titleItem}`} key={index} onClick={() => this.onJump(item.url)}>{item.name}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;
