import React,{Component} from "react";
import {getChosenLanguage} from "../../reducers";
import {changeLanguage} from "../../actions";
import {connect} from "react-redux";

class Profile extends Component{
    render = () => (
        <div>Profile is here! {this.props.language}</div>
    )
}

const mapStateToProps = state => ({
    language: getChosenLanguage(state)
});

export default connect(
    mapStateToProps,
    {changeLanguage}
)(Profile)