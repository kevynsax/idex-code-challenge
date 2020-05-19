import React,{Component} from "react";
import {getChosenLanguage} from "../../reducers";
import {changeLanguage} from "../../actions";
import {connect} from "react-redux";
import {AppBar} from "../utils/appbar";
import './profile.scss';

class Profile extends Component{
    chooseLanguage = (event) => {
        console.log(event.target.value);
        this.props.changeLanguage(event.target.value);
    };
    
    render = () => {
        const languageOptions = ["English", "French"];
        return (
            <div className="profile">
                <AppBar title="Profile"/>
                <div className="container">
                    <div className="section">
                        <span onClick={() => alert("change password")} className="label action">Change Password</span>
                    </div>
                    <div className="section">
                        <span className="label">
                            Change default language
                            <select onChange={this.chooseLanguage}>
                                {languageOptions.map(this.renderOptions)}
                            </select>
                        </span>
                    </div>
                </div>
            </div>
        );
    };
    
    renderOptions = (option, index) => (
        <option key={index} value={option}>{option}</option>
    )
}

const mapStateToProps = state => ({
    language: getChosenLanguage(state)
});

export default connect(
    mapStateToProps,
    {changeLanguage}
)(Profile)