import "./barChartBox.scss";
import { ResponsiveContainer, BarChart, Bar, Tooltip } from "recharts";

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

const BarChartBox = (props: Props) => {
  return (
    <div className="barChartBox">
      <h2>{props.title}</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={props.chartData}>
          <Tooltip
            contentStyle={{ background: "#2A3447", borderRadius: '5px' }}
            labelStyle={{ display: "none" }}
            cursor={{ fill: "none" }}
          />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartBox;
