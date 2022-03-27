import React from "react";
import Charts from "../../components/charts/Charts";
import { userData } from "../../userData";
import './analytics.css'

const Analytics = () => (
    <div className="analytics">
        <Charts data={userData} title='User Analytics' grid dataKey='activeUser' />
    </div>
)

export default Analytics