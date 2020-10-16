import React, { Component } from "react";
import styles from "./css/index.module.css";
import Plublic from '../../../common/js/Plublic';
import axios from "../../../axios";
import { Spin, Pagination } from 'antd';
import AsyncComponent from "../../../common/js/AsyncComponent";
const Header = AsyncComponent(() => import("../../../components/Header"));
const Footer = AsyncComponent(() => import("../../../components/Footer"));

class DynamicList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Plublic.getUrlParam("id"),
            listData: {},
            spinning: true,
            total: 0,
            pageSize:10,
            offset:1,
        }
    }
    componentDidMount() {
        Plublic.backTop();
        this.getListData();
    }
    getListData = ()=>{
        let that = this;
        axios.getCateDetailData(this.state.id+'?offset='+this.state.offset).then(res => {
            if (res && res.code === 1) {
                that.setState({
                    listData: res.data.list,
                    total: res.data.totle,
                    spinning: false
                })
            }
        });
    }
    onPaginationchange=(index)=>{
        let that = this;
        this.setState({
            offset:index
        },()=>{
            that.getListData();
        })
    }
    onGoText = (item) => {
        window.location.href = '/Home/JournalismDetails?id=' + item.id;
    }
    render() {
        const { listData, spinning, id, total, pageSize } = this.state;
        return (
            <div className={styles.detailsBox}>
                <Header />
                {
                    spinning ? <div className={styles.spinBox}>
                        <Spin size="large" tip="Loading..."></Spin>
                    </div> : <div>
                            <div className={styles.centerBox}>
                                <div className={styles.centerTop}>
                                    <span>{id == '14' ? '科研动态' : '新闻动态'}</span>
                                </div>
                                <div className={styles.centerListBox}>
                                    {
                                        listData && listData.length && listData.map((item, index) => (
                                            <div className={styles.listItem} key={index}>
                                                <div className={styles.itemBox} onClick={() => this.onGoText(item)}>
                                                    <p>{item.title}</p>
                                                    <span>{Plublic.gettimeFormathmm(item.createtime)}</span>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={styles.PaginationBox}>
                                <Pagination pageSize={pageSize} total={total} showSizeChanger={false} showQuickJumper onChange={(index)=>this.onPaginationchange(index)} />
                            </div>
                        </div>
                }
                <Footer />
            </div>
        )
    }
}
export default DynamicList;
