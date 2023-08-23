import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./single.scss";

type Props = {
  id: number;
  title: string;
  img?: string;
  info: object;
  chart?: {
    dataKeys: {
      name: string;
      color: string;
    }[];
    data: object[];
  };
  activities: { time: string; text: string }[];
};
const Single = (props: Props) => {
  return (
    <div className="single">
      <div className="info">
        <div className="userInfo">
          {props.img && <img src={props.img} alt="user" />}
          <h3> {props.title} </h3>
          <button>Update Info</button>
        </div>
        <div className="textInfo">
          {Object.entries(props.info).map((item, i) => (
            <p key={i}>
              <strong>{item[0]}:</strong> {item[1]}{" "}
            </p>
          ))}
        </div>
        <hr />
        {props.chart && (
          <div className="userChart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={400}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKeys.map((dataKey, i) => (
                  <Line
                    key={i}
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                    activeDot={{ r: 8 }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="activities">
        <h2>Latest activities</h2>
        {props.activities && (
          <ul>
            {props.activities.map((activity, i) => (
              <li>
                <div key={i}>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Single;
