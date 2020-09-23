import React, { Component } from "react";
import styles from "./css/index.module.css";
import Plublic from '../../common/js/Plublic';
import { Carousel, Spin } from 'antd';
import axios from "../../axios";
import AsyncComponent from "../../common/js/AsyncComponent";
const Header = AsyncComponent(() => import("../../components/Header"));
const Footer = AsyncComponent(() => import("../../components/Footer"));

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeListData: {},
            dotsIndex: 1,
            spinning: true,
            isEllipsis: false

        }
    }
    componentDidMount() {
        let that = this;
        Plublic.backTop();
        axios.getHomeData().then(res => {
            if (res && res.code === 1) {
                that.setState({
                    homeListData: res.data,
                    spinning: false
                })
            }
        });
        setTimeout(function () {
            var descriptionFa = document.getElementById('descriptionFa');
            var descriptionChi = document.getElementById('descriptionChi');
            if (descriptionChi && descriptionFa && (descriptionChi.getBoundingClientRect().height > descriptionFa.getBoundingClientRect().height)) {
                that.setState({
                    isEllipsis: true
                })
            }
        }, 100);

    }
    afterChange = (e) => {
        this.setState({
            dotsIndex: e + 1
        })
    }
    onChangeImg = (index) => {
        this.slider && this.slider.innerSlider.slickGoTo(index)
    }
    onGoText = (item) => {
        window.location.href = '/Home/JournalismDetails?id=' + item.id;
    }
    render() {
        const { dotsIndex, spinning, homeListData, isEllipsis } = this.state;
        const article_suo_list = homeListData && homeListData.article_suo_list && homeListData.article_suo_list[0];
        const Rotation_news_list = homeListData && homeListData.Rotation_news_list && homeListData.Rotation_news_list[0];
        const lunboSetting = {
            dots: false,
            autoplay: true,
            effect: 'fade'
        };
        return (
            <div className={styles.homeBox}>
                <Header />
                {
                    spinning ? <div className={styles.spinBox}>
                        <Spin size="large" tip="Loading..."></Spin>
                    </div> : <div className={styles.centerBox}>
                            <div className={styles.homeLeft}>
                                <div className={styles.homeLeftTop}>
                                    <Carousel {...lunboSetting} afterChange={(e) => this.afterChange(e)} ref={el => (this.slider = el)}>
                                        {
                                            homeListData.rotation_list && homeListData.rotation_list.map((item, index) => (
                                                <div key={index}>
                                                    <img src={item.image.includes('http')?item.image:Plublic.getPrefixUrl() + item.image} alt="" />
                                                </div>
                                            ))
                                        }
                                    </Carousel>
                                    <div className={styles.homeDotsBox}>
                                        <p className={styles.homeDotsText}>
                                            {
                                                homeListData.rotation_list && homeListData.rotation_list.map((item, index) =>
                                                    (
                                                        <React.Fragment key={index}>
                                                            {
                                                                dotsIndex === index + 1 && item.name
                                                            }
                                                        </React.Fragment>
                                                    )
                                                )
                                            }
                                        </p>
                                        <p className={styles.homeDotsDian}>
                                            {
                                                homeListData.rotation_list && homeListData.rotation_list.map((item, index) => (
                                                    <span onClick={() => this.onChangeImg(index)} key={index} style={{ "background": dotsIndex === index + 1 ? "#990000" : "white" }}></span>
                                                ))
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.homeLeftBot}>
                                    <div className={styles.moduleTitle}><span>新闻动态</span></div>
                                    <div className={styles.homeLeftBotdec}>
                                        <img className={styles.homeLeftBotdec_img} src={Rotation_news_list.image.includes('http')?Rotation_news_list.image:Plublic.getPrefixUrl() + Rotation_news_list.image} alt="" />
                                        <ul className={styles.homeLeftBotdec_list}>
                                            {
                                                homeListData.article_news_list && homeListData.article_news_list.map((item, index) => (
                                                    <li key={index}><span></span><p className={styles.overhidden} onClick={() => this.onGoText(item)}>{item.title}</p></li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.homeRight}>
                                <div className={styles.homeRightTop}>
                                    <div className={styles.moduleTitle}><span>所长简介</span></div>
                                    <div className={styles.homeRightjianjie_box}>
                                        <div className={styles.homeRightjianjie_top}>
                                            <div className={styles.homeRightjianjie_img}>
                                                <img src={article_suo_list.image.includes('http')?article_suo_list.image:Plublic.getPrefixUrl() + article_suo_list.image} alt="" />
                                            </div>
                                            <div style={{ "display": "flex", "flexDirection": "column" }}>
                                                <div className={styles.homeRightjianjie_title} style={{ "display": "flex", "alignItems": "baseline" }}><span>{article_suo_list && article_suo_list.author}</span><span>{article_suo_list && article_suo_list.position}</span></div>
                                                <div className={styles.homeRightjianjie_xiaojie}>{article_suo_list && article_suo_list.desc}</div>
                                            </div>
                                        </div>
                                        <div id="descriptionFa" className={styles.homeRightjianjie_bot}>
                                            <div id="descriptionChi" className="dynamicDetails-content" dangerouslySetInnerHTML={{ __html: article_suo_list && article_suo_list.description }}></div>
                                            {
                                                isEllipsis && <div className={styles.ellipsisDian}>...</div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.homeRightBot}>
                                    <div className={styles.moduleTitle}><span>科研动态</span></div>
                                    <ul className={styles.homeRightBot_list}>
                                        {
                                            homeListData.article_keyan_list && homeListData.article_keyan_list.map((item, index) => (
                                                <li key={index} onClick={() => this.onGoText(item)}><span>{index + 1}</span><p className={styles.overhidden}>{item.title}</p></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                }
                <Footer />
            </div>
        )
    }
}
export default Home;
