import './topBar.css'
import { NotificationsNone, Settings, Language } from '@mui/icons-material'

const TopBar = () => {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topleft'>
                    <span className='logo'>AdminXO</span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                        <NotificationsNone />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Settings />
                    </div>
                    <div className='topbarIconContainer'>
                        <Language />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <img src='https://www.linkpicture.com/q/IMG-0975.jpg' alt='chiadi' className='topAvatar'/>
                </div>
            </div>
        </div>
    )
}

export default TopBar