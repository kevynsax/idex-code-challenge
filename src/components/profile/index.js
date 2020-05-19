import React,{Component} from "react";
import {getChosenLanguage} from "../../reducers";
import {changeLanguage} from "../../actions";
import {connect} from "react-redux";
import {AppBar} from "../utils/appbar";
import './profile.scss';

class Profile extends Component{
    render = () => (
        <div className="profile">
            <AppBar title="Profile" />
            <div>Profile is here! {this.props.language}</div>
        </div>
    )
}

const mapStateToProps = state => ({
    language: getChosenLanguage(state)
});

export default connect(
    mapStateToProps,
    {changeLanguage}
)(Profile)