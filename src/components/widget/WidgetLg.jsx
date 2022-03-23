import './widgetLg.css'

const WidgetLg = () => {
    const Button = ({ type }) => (
        <button className={'widgetLgButton ' + type}>{type}</button>
    )
    return (
        <div className='widgetLg'>
            <h3 className='widgetLgTitle'>Latest Transactions</h3>
            <table className='widgetLgTable'>
                <tr className='widgetLgTr'>
                    <th className='widgetLgTh'>Customer</th>
                    <th className='widgetLgTh'>Date</th>
                    <th className='widgetLgTh'>Amount</th>
                    <th className='widgetLgTh'>Status</th>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src='https://www.linkpicture.com/q/IMG-0975.jpg' alt='chiadi' className='widgetLgImg' />
                        <span className='widgetLgName'>Eyed Raven</span>
                    </td>
                    <td className='widgetLgDate'>22 March 2022</td>
                    <td className='widgetLgAmount'>$780.89</td>
                    <td className='widgetLgStatus'><Button type="Approved" /></td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src='https://www.linkpicture.com/q/IMG-0975.jpg' alt='chiadi' className='widgetLgImg' />
                        <span className='widgetLgName'>Eyed Raven</span>
                    </td>
                    <td className='widgetLgDate'>22 March 2022</td>
                    <td className='widgetLgAmount'>$780.89</td>
                    <td className='widgetLgStatus'><Button type="Pending" /></td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src='https://www.linkpicture.com/q/IMG-0975.jpg' alt='chiadi' className='widgetLgImg' />
                        <span className='widgetLgName'>Eyed Raven</span>
                    </td>
                    <td className='widgetLgDate'>22 March 2022</td>
                    <td className='widgetLgAmount'>$780.89</td>
                    <td className='widgetLgStatus'><Button type="Approved" /></td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src='https://www.linkpicture.com/q/IMG-0975.jpg' alt='chiadi' className='widgetLgImg' />
                        <span className='widgetLgName'>Eyed Raven</span>
                    </td>
                    <td className='widgetLgDate'>22 March 2022</td>
                    <td className='widgetLgAmount'>$780.89</td>
                    <td className='widgetLgStatus'><Button type="Declined" /></td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg