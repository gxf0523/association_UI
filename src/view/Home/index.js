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
            homeListData: {
                "article_suo_list": [{
                    "id": 5,
                    "cid": 14,
                    "title": "黄正明",
                    "author": "黄正明",
                    "desc": "医药教育家，药理学专家， 博士生、硕士生导师。",
                    "position": "教授",
                    "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598526730816&di=bd5a7f7890ce616b92aa8384e562bf7e&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F9c16fdfaaf51f3de9ba8ee1194eef01f3a2979a8.jpg",
                    "description": "<p style=\"text-align: left;\">黄正明，教授，医药教育家，药理学专家，博士生、硕士生导师。1992年至2004年工作于解放军北京军医学院药理学教研室，曾任院首席专家。2004年起任302医院药学部临床药理研究室主任。现任中国医药教育协会会长、北京卫健基业生物技术研究所所长。<\/p>\r\n<p style=\"text-align: left;\">黄正明教授从事药理学教学和科学研究35年，主攻方向为中药药理与抗肝炎新药研发。他先后主持了国家863、自然科学基金、国家重大专项、军队重点攻关等课题十余项，承担横向课题6项。科研期间，填补了国内近代史上对水芹研究的空白，成功开发了水芹颗粒、芹龙颗粒等中药复方制剂，从水芹中提取出有效部位水芹总酚酸，成为中国近代水芹研发的第一人。化药研究方面，他的研究团队参与了抗乙肝化药1类新药替芬泰的药理学研究，获得新药临床批件。曾获得军队人才培养最高奖&ldquo;伯乐奖&rdquo;称号，获得国家部级和军队科学进步奖二等奖2项，三等奖7项，申请\/授权专利7项，发表论文百余篇。主编《临床药理学》、《药理学》、《抗肝炎中药的现代研究与应用》等教材9部，主编《中国临床药物大辞典》等专著10部，总编医药科普《合理用药一册通晓》系列丛书36本。<\/p>\r\n<p style=\"text-align: left;\">黄正明教授任职北京卫健基业生物技术研究所所长以来，先后承接了三类医疗器械骨黏合剂的研究、抗乙肝中药AH40的药理学研究、牛樟芝液对烫伤动物模型作用的试验研究、水芹总酚酸抗HIV药效学作用及机制的研究等科研项目，并与多所高校、科研机构以及医药企业建立了良好的合作关系，为研究所的发展打下了坚实的基础。<\/p>"
                }],
                "article_news_list": [{
                    "id": 1,
                    "cid": 15,
                    "title": "中国食品安全教育高峰论坛在汉举行，专家共话与…"
                }, {
                    "id": 6,
                    "cid": 15,
                    "title": "新闻冬天"
                }, {
                    "id": 7,
                    "cid": 15,
                    "title": "北京卫健基业生物研究关于举办全国医疗质量管"
                }],
                "article_keyan_list": [{
                    "id": 2,
                    "cid": 16,
                    "title": "2020年新春团拜会在北京召开"
                }, {
                    "id": 3,
                    "cid": 16,
                    "title": "新型冠状肺炎科学防止线上研讨会"
                }, {
                    "id": 4,
                    "cid": 16,
                    "title": "全国20多万人次参与 四川省人民"
                }],
                "rotation_list": [{
                    "id": 1,
                    "cid": 1,
                    "name": "轮播",
                    "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598526730816&di=bd5a7f7890ce616b92aa8384e562bf7e&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F9c16fdfaaf51f3de9ba8ee1194eef01f3a2979a8.jpg"
                }, {
                    "id": 2,
                    "cid": 17,
                    "name": "麒麟",
                    "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598526307604&di=12607c9fd5b2ef3421b3617fd3ba1b19&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg"
                }],
                "Rotation_news_list": [{
                    "id": 3,
                    "cid": 16,
                    "name": "tutu",
                    "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598526730816&di=bd5a7f7890ce616b92aa8384e562bf7e&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F9c16fdfaaf51f3de9ba8ee1194eef01f3a2979a8.jpg"
                }]
            },
            dotsIndex: 1,
            spinning: true,
            isEllipsis: false

        }
    }
    componentDidMount() {
        let that = this;
        Plublic.backTop();
        axios.getHomeData().then(res => {
            console.log(res)
            if (res && res.code === 1) {
                that.setState({
                    homeListData:res.data,
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
                                                    <img src={item.image} alt="" />
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
                                        <img className={styles.homeLeftBotdec_img} src={Rotation_news_list && Rotation_news_list.image} alt="" />
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
                                                <img src={article_suo_list && article_suo_list.image} alt="" />
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
