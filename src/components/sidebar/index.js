import React,{Component} from "react";
import Logo from '../../app_logo.png';
import './sidebar.scss';


export default class Sidebar extends Component{
    render = () => {
        const menus = [
            {label: "Profile", route: "/profile"},
            {label: "Help", route: "/contactUs"}
        ];
        
        return (
            <div className="sidebar">
                <div className="logo">
                    <img src={Logo} alt="IDEX"/>
                </div>
                <div className="menus">
                    {menus.map(this.renderMenu)}
                </div>
            </div>
        );
    };
    
    renderMenu = (menu, index) => (
        <div key={index} className="menu" onClick={() => document.location.assign(menu.route)}>
            {menu.label}
        </div>
    )
}