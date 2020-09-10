import React, { Component } from "react";
import styles from "./css/index.module.css";
import Plublic from '../../../common/js/Plublic';
import axios from "../../../axios";
import AsyncComponent from "../../../common/js/AsyncComponent";
const Header = AsyncComponent(() => import("../../../components/Header"));
const Footer = AsyncComponent(() => import("../../../components/Footer"));

class JournalismDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newDetailData: {
                "detail": {
                    "id": 3,
                    "title": "新型冠状肺炎科学防止线上研讨会",
                    "description": "<p style=\"text-align: left;\">黄正明，教授，医药教育家，药理学专家，博士生、硕士生导师。1992年至2004年工作于解放军北京军医学院药理学教研室，曾任院首席专家。2004年起任302医院药学部临床药理研究室主任。现任中国医药教育协会会长、北京卫健基业生物技术研究所所长。<\/p>\r\n<p style=\"text-align: left;\">黄正明教授从事药理学教学和科学研究35年，主攻方向为中药药理与抗肝炎新药研发。他先后主持了国家863、自然科学基金、国家重大专项、军队重点攻关等课题十余项，承担横向课题6项。科研期间，填补了国内近代史上对水芹研究的空白，成功开发了水芹颗粒、芹龙颗粒等中药复方制剂，从水芹中提取出有效部位水芹总酚酸，成为中国近代水芹研发的第一人。化药研究方面，他的研究团队参与了抗乙肝化药1类新药替芬泰的药理学研究，获得新药临床批件。曾获得军队人才培养最高奖&ldquo;伯乐奖&rdquo;称号，获得国家部级和军队科学进步奖二等奖2项，三等奖7项，申请\/授权专利7项，发表论文百余篇。主编《临床药理学》、《药理学》、《抗肝炎中药的现代研究与应用》等教材9部，主编《中国临床药物大辞典》等专著10部，总编医药科普《合理用药一册通晓》系列丛书36本。<\/p>\r\n<p style=\"text-align: left;\">黄正明教授任职北京卫健基业生物技术研究所所长以来，先后承接了三类医疗器械骨黏合剂的研究、抗乙肝中药AH40的药理学研究、牛樟芝液对烫伤动物模型作用的试验研究、水芹总酚酸抗HIV药效学作用及机制的研究等科研项目，并与多所高校、科研机构以及医药企业建立了良好的合作关系，为研究所的发展打下了坚实的基础。<\/p>",
                    "createtime": Date.parse(new Date()),
                },
                "up": {
                    "id": 2,
                    "title": "新型冠状肺炎科学防止线上研讨会"
                },
                "next": {
                    "id": 4,
                    "title": "2020年新春团拜会在北京召开"
                }
            }
        }
    }
    componentDidMount() {
        Plublic.backTop();
    }
    // 上一篇   下一篇
    onPiece = (id) => {
        window.location.href = '/Home/JournalismDetails?id=' + id;
    }
    render() {
        const { newDetailData } = this.state;
        const detail = newDetailData && newDetailData.detail;
        const up = newDetailData && newDetailData.up;
        const next = newDetailData && newDetailData.next;
        return (
            <div className={styles.detailsBox}>
                <Header />
                <div className={styles.centerBox}>
                    <p className={styles.textTitle}>当前位置：首页&gt;正文</p>
                    <p className={styles.PageTitle}>{detail.title}</p>
                    <p className={styles.PageTime}>发布日期：{Plublic.gettimeFormat(detail.createtime)}</p>
                    <div className={styles.PageCenter}>
                        <div className="dynamicDetails-content" dangerouslySetInnerHTML={{ __html: detail.description }}></div>
                    </div>
                    <div className={styles.pageBtnBox}>
                        <p onClick={() => this.onPiece(up.id)}><span>上一篇：</span>{up.title}</p>
                        <p onClick={() => this.onPiece(next.id)}><span>下一篇：</span>{next.title}</p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default JournalismDetails;
