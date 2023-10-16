import { Bar } from "react-chartjs-2";
import {Chart} from 'chart.js/auto';

// eslint-disable-next-line react/prop-types
export default function BarChart({chartData}) {

    return <Bar data={chartData}/>
}