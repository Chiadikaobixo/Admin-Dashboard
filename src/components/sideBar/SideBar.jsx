import React, { useContext } from 'react';
import './sideBar.css'
import { Link } from 'react-router-dom'
import {
    LineStyle,
    Timeline,
    TrendingUp,
    Report,
    WorkOutline,
    PermIdentity,
    Storefront,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline
} from '@mui/icons-material'
import { DarkModeContext } from "../../context/darkModeContext";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const SideBar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to='/' className='link'>
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcons" />
                                Home
                            </li>
                        </Link>
                        <Link to='/analytics' className='link'>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcons" />
                            Analytics
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcons" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quik Menu</h3>
                    <ul className="sidebarList">
                        <Link to='/users' className='link'>
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcons" />
                                Users
                            </li>
                        </Link>
                        <Link to='/products' className='link'>
                            <li className="sidebarListItem">
                                <Storefront className="sidebarIcons" />
                                Products
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcons" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcons" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcons" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcons" />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcons" />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcons" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcons" />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
            </div>
            
            <div className="bottom">
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div>
        </div>
    )
}

export default SideBar