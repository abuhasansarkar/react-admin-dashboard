import { singleUser } from "../../../public/data";
import Single from "../../components/single/Single";
import "./User.scss";

const User = () => {
  // fetch single data and send single component
  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default User;
