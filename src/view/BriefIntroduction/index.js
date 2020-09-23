import React, { Component } from "react";
import styles from "./css/index.module.css";
import { Spin } from 'antd';
import Plublic from '../../common/js/Plublic';
import axios from "../../axios";
import AsyncComponent from "../../common/js/AsyncComponent";
const Header = AsyncComponent(() => import("../../components/Header"));
const Footer = AsyncComponent(() => import("../../components/Footer"));

class BriefIntroduction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Plublic.getUrlParam("id"),
            spinning: true,
            introductionData: {}
        }
    }
    componentDidMount() {
        Plublic.backTop();
        let that = this;
        axios.getCateDetailData(this.state.id).then(res => {
            if (res && res.code === 1 && res.data && res.data.detail) {
                that.setState({
                    introductionData: res.data.detail,
                    spinning: false
                })
            }
        });
    }
    render() {
        const { introductionData, spinning } = this.state;
        return (
            <div className={styles.BriefIntroductionBox}>
                <Header />
                {
                    spinning ? <div className={styles.spinBox}>
                        <Spin size="large" tip="Loading..."></Spin>
                    </div> : <div className={styles.centerBox}>
                            <p className={styles.PageTitle}>{introductionData.title}</p>
                            <p className={styles.PageTime}>发布日期：{Plublic.gettimeFormat(introductionData.createtime)}</p>
                            <div className={styles.PageCenter}>
                                <div className="dynamicDetails-content" dangerouslySetInnerHTML={{ __html: introductionData.description }}></div>
                            </div>
                        </div>
                }
                <Footer />
            </div>
        )
    }
}
export default BriefIntroduction;
