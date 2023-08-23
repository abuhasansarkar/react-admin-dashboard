import { singleProduct } from "../../../public/data";
import Single from "../../components/single/Single";
import "./product.scss";

const Product = () => {
  // fetch single data and send single component
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;
