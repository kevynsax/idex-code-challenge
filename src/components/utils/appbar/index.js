import React, {Component} from "react";
import "./appbar.scss";

export class AppBar extends Component{
    render = () => (
        <div className="appBar">
            <div className="title">
                {this.props.title}
            </div>
            <div className="userInfo">
                Super Admin
            </div>
        </div>
    )
}