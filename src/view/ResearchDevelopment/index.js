import React, { Component } from "react";
import styles from "./css/index.module.css";
import { Spin } from 'antd';
import Plublic from '../../common/js/Plublic';
import axios from "../../axios";
import AsyncComponent from "../../common/js/AsyncComponent";
import Item from "antd/lib/list/Item";
const Header = AsyncComponent(() => import("../../components/Header"));
const Footer = AsyncComponent(() => import("../../components/Footer"));

class ResearchDevelopment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Plublic.getUrlParam("id"),
            spinning: true,
            introductionData: {},
            title: '',
            listData: [],
        }
    }
    componentDidMount() {
        Plublic.backTop();
        let that = this;
        axios.getCateDetailData(this.state.id).then(res => {
            if (res && res.code === 1 && res.data && res.data.detail) {
                that.setState({
                    introductionData: res.data.detail,
                    listData: res.data.list,
                    spinning: false
                })
            }
        });
        axios.getCateData().then(res => {
            if (res && res.code === 1) {
                let data = res.data.detail;
                for (var i = 0; i < data.length; i++) {
                    if (that.state.id == data[i].id) {
                        that.setState({
                            title: data[i].name
                        })
                    }
                }

            }
        });
    }
    onGoText = (item) => {
        window.location.href = '/ResearchDevelopment?id=' + item.id;
    }
    render() {
        const { introductionData, spinning, title, listData } = this.state;
        return (
            <div className={styles.ResearchDevelopmentBox}>
                <Header />
                {
                    spinning ? <div className={styles.spinBox}>
                        <Spin size="large" tip="Loading..."></Spin>
                    </div> : <div className={styles.centerBox}>
                            <div className={styles.centerLeft}>
                                <p className={styles.listTop}>{title}</p>
                                <ul className={styles.homeLeftBotdec_list}>
                                    {
                                        listData && listData.length && listData.map((item, index) => (
                                            <li key={index}><span></span><p className={styles.overhidden} onClick={() => this.onGoText(item)}>{item.title}</p></li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className={styles.centerRight}>
                                <p className={styles.PageTitle}>{introductionData.title}</p>
                                <p className={styles.PageTime}>发布日期：{Plublic.gettimeFormat(introductionData.createtime)}</p>
                                <div className={styles.PageCenter}>
                                    <div className="dynamicDetails-content" dangerouslySetInnerHTML={{ __html: introductionData.description }}></div>
                                </div>
                            </div>
                        </div>
                }
                <Footer />
            </div>
        )
    }
}
export default ResearchDevelopment;
