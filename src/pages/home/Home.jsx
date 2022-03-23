import Charts from '../../components/charts/Charts'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetLg from '../../components/widget/WidgetLg'
import WidgetSm from '../../components/widget/WidgetSm'
import { userData } from '../../userData'
import './home.css'

const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Charts data={userData} title='User Analytics' grid dataKey='activeUser' />
            <div className='homeWidgets'>
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home