import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Sep",
    uv: 3990,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    uv: 2490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 3290,
    pv: 300,
    amt: 2100,
  },
  {
    name: "Dec",
    uv: 3990,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/synchronized-line-charts-zc3nl";

  render() {
    return (
      <div style={{ width: "100%" }}>
        <ResponsiveContainer width={1200} height={280}>
          <LineChart width={600} height={200} data={data} syncId="anyId">
            {/** <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" style={{ backgroundColor: "blue" }} />

            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#000" width={500} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
