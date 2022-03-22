import './sideBar.css'
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


const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                           <LineStyle className="sidebarIcons" />
                           Home
                        </li>
                        <li className="sidebarListItem">
                           <Timeline className="sidebarIcons" />
                           Analytics
                        </li>
                        <li className="sidebarListItem">
                           <TrendingUp className="sidebarIcons" />
                           Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quik Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                           <PermIdentity className="sidebarIcons" />
                           Users
                        </li>
                        <li className="sidebarListItem">
                           <Storefront className="sidebarIcons" />
                           Products
                        </li>
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
            </div>
        </div>
    )
}

export default SideBar