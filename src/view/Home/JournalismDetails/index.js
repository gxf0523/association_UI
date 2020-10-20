import React, { Component } from "react";
import styles from "./css/index.module.css";
import Plublic from '../../../common/js/Plublic';
import axios from "../../../axios";
import { Spin } from 'antd';
import AsyncComponent from "../../../common/js/AsyncComponent";
const Header = AsyncComponent(() => import("../../../components/Header"));
const Footer = AsyncComponent(() => import("../../../components/Footer"));

class JournalismDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Plublic.getUrlParam("id"),
            newDetailData: {},
            spinning: true,
            headertabid:Plublic.getUrlParam("headertabid"),
            title:'',
        }
    }
    componentDidMount() {
        let that = this;
        Plublic.backTop();
        axios.getDetailData(this.state.id).then(res => {
            if (res && res.code === 1) {
                that.setState({
                    newDetailData: res.data,
                    spinning: false
                })
            }
        });
        axios.getCateData().then(res => {
            if (res && res.code === 1) {
                let data = res.data.detail;
                for (var i = 0; i < data.length; i++) {
                    if (that.state.headertabid == data[i].id) {
                        that.setState({
                            title: data[i].name
                        })
                    }
                }

            }
        });
    }
    // 上一篇   下一篇
    onPiece = (id) => {
        window.location.href = '/Home/JournalismDetails?id=' + id;
    }
    render() {
        const { newDetailData, spinning, title } = this.state;
        const detail = newDetailData && newDetailData.detail;
        const up = newDetailData && newDetailData.up;
        const next = newDetailData && newDetailData.next;
        return (
            <div className={styles.detailsBox}>
                <Header />
                {
                    spinning ? <div className={styles.spinBox}>
                        <Spin size="large" tip="Loading..."></Spin>
                    </div> : <div className={styles.centerBox}>
                <p className={styles.textTitle}>当前位置：{title?title:'首页'}&gt;正文</p>
                            <p className={styles.PageTitle}>{detail.title}</p>
                            <p className={styles.PageTime}>发布日期：{Plublic.gettimeFormat(detail.createtime)}</p>
                            <div className={styles.PageCenter}>
                                <div className="dynamicDetails-content" dangerouslySetInnerHTML={{ __html: detail.description }}></div>
                            </div>
                            <div className={styles.pageBtnBox}>
                                {
                                    up && <p onClick={() => this.onPiece(up.id)}><span>上一篇：</span>{up.title}</p>
                                }
                                {
                                    next && <p onClick={() => this.onPiece(next.id)}><span>下一篇：</span>{next.title}</p>
                                }
                            </div>
                        </div>
                }
                <Footer />
            </div>
        )
    }
}
export default JournalismDetails;
