import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <span className='featuredTitle'>Revenue</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>5,000</span>
                    <span className='featuredMoneyRate'>
                        -13.7 <ArrowDownward className='featuredIcon negative' />
                    </span>
                </div>
                <span className='featuredSub'>Compared to Last Month</span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>Sales</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>15,000</span>
                    <span className='featuredMoneyRate'>
                        -6.7 <ArrowDownward className='featuredIcon negative'/>
                    </span>
                </div>
                <span className='featuredSub'>Compared to Last Month</span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>Cost</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>8,800</span>
                    <span className='featuredMoneyRate'>
                        -3.7 <ArrowUpward className='featuredIcon'/>
                    </span>
                </div>
                <span className='featuredSub'>Compared to Last Month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo