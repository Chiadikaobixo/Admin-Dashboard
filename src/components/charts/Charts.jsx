import './charts.css'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer
} from 'recharts';

const Charts = ({data, dataKey, grid, title}) => {
    

    return (
        <div className='chart'>
            <h3 className='chartTitle'>{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis stroke="#8884d8"/>
                    <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />}
                    </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Charts