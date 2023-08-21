import "./topdeals.scss";
import { topDealUsers } from "../../../public/data";

const TopDeals = () => {
  return (
    <div className="topdeatls">
      <h2>Top Deals</h2>
      {topDealUsers.map(user => (
        <div key={user.id} className="user-deals">
          <div className="user">
            <img src={user.img} alt="user" />
            <div className="user-info">
              <h6>{user.username}</h6>
              <span>{user.email}</span>
            </div>
          </div>
          <strong>{user.amount}</strong>
        </div>
      ))}
    </div>
  );
};

export default TopDeals;
