import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AsyncComponent from "../common/js/AsyncComponent";

const Home = AsyncComponent(() => import("../view/Home")); //网站首页
const JournalismDetails = AsyncComponent(() => import("../view/Home/JournalismDetails")); //网站首页-正文 新闻详情
const DynamicList = AsyncComponent(() => import("../view/Home/DynamicList")); //新闻动态，科研动态列表
const BriefIntroduction = AsyncComponent(() => import("../view/BriefIntroduction")); //企业简介
// const ResearchDevelopment = AsyncComponent(() => import("../view/ResearchDevelopment")); //科技研发
// const Service = AsyncComponent(() => import("../view/Service")); //科研服务
// const Education = AsyncComponent(() => import("../view/Education")); //培训教育
// const ContactUs = AsyncComponent(() => import("../view/ContactUs")); //联系我们


class RoutesIndex extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Home/JournalismDetails" component={JournalismDetails} />
                <Route exact path="/Home/DynamicList" component={DynamicList} />
                <Route path="/BriefIntroduction" component={BriefIntroduction} />
                {/* <Route path="/ResearchDevelopment" component={ResearchDevelopment} />
                <Route path="/Service" component={Service} />
                <Route path="/Education" component={Education} />
                <Route path="/ContactUs" component={ContactUs} /> */}
                <Redirect to="/Home" />
            </Switch>
        );
    }
}

export default RoutesIndex;
