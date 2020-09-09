import React, {Component} from "react";
import styles from "./css/index.module.css"
import Plublic from '../../common/js/Plublic'
import AsyncComponent from "../../common/js/AsyncComponent";
const Header = AsyncComponent(() => import("../../components/Header"));
const Footer = AsyncComponent(() => import("../../components/Footer"));

class ContactUs extends Component{
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
            <div className={styles.ContactUsBox}>
                <Header/>
                联系我们
                <Footer/>
            </div>
        )
    }
}
export default ContactUs;
