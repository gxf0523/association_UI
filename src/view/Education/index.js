import React, {Component} from "react";
import styles from "./css/index.module.css"
import Plublic from '../../common/js/Plublic'
import AsyncComponent from "../../common/js/AsyncComponent";
const Header = AsyncComponent(() => import("../../components/Header"));
const Footer = AsyncComponent(() => import("../../components/Footer"));

class Education extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    componentDidMount(){
        Plublic.backTop();
    }
    render(){
        return(
            <div className={styles.EducationBox}>
                <Header/>
                培训教育
                <Footer/>
            </div>
        )
    }
}
export default Education;
