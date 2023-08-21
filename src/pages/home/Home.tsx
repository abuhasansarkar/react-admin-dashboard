import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../../public/data";
import AnalyticsChart from "../../components/analyticsChart/AnalyticsChart";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import TopDeals from "../../components/topDeals/TopDeals";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopDeals />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        <AnalyticsChart />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxVisit} />
      </div>
    </div>
  );
};

export default Home;
