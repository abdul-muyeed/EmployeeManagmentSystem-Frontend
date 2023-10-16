import { Bar } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import {Chart} from 'chart.js/auto';

// eslint-disable-next-line react/prop-types
export default function BarChart({chartData}) {

    return <Bar data={chartData}/>
}