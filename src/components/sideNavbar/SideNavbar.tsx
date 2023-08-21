import { Link } from "react-router-dom";
import "./sidenavbar.scss";

const SideNavbar = () => {
  return (
    <div className="side-navbar">
      <h4>MAIN</h4>
      <Link className="nav-item" to="/">
        <img src="../../../public/home.svg" alt="icon" />
        <span>Home</span>
      </Link>
      <Link className="nav-item" to="profile">
        <img src="../../../public/user.svg" alt="icon" />
        <span>Profile</span>
      </Link>

      <h4>LISTS</h4>
      <Link className="nav-item" to="users">
        <img src="../../../public/user.svg" alt="icon" />
        <span>Users</span>
      </Link>
      <Link className="nav-item" to="products">
        <img src="../../../public/product.svg" alt="icon" />
        <span>Products</span>
      </Link>
      <Link className="nav-item" to="/">
        <img src="../../../public/order.svg" alt="icon" />
        <span>Orders</span>
      </Link>
      <Link className="nav-item" to="/">
        <img src="../../../public/log.svg" alt="icon" />
        <span>Posts</span>
      </Link>

      <h4>GENERAL</h4>
      <Link className="nav-item" to="/">
        <img src="../../../public/element.svg" alt="icon" />
        <span>Elements</span>
      </Link>
      <Link className="nav-item" to="/">
        <img src="../../../public/note.svg" alt="icon" />
        <span>Notes</span>
      </Link>
      <Link className="nav-item" to="/">
        <img src="../../../public/form.svg" alt="icon" />
        <span>Forms</span>
      </Link>
      <Link className="nav-item" to="/">
        <img src="../../../public/calendar.svg" alt="icon" />
        <span>Calendar</span>
      </Link>

      <h4>MAINTENANCE</h4>
      <Link className="nav-item" to="/">
        <img src="../../../public/setting.svg" alt="icon" />
        <span>Setting</span>
      </Link>
      <Link className="nav-item" to="/">
        <img src="../../../public/backup.svg" alt="icon" />
        <span>Backups</span>
      </Link>

      <h4>ANALYTICS</h4>
      <Link className="nav-item" to="/">
        <img src="../../../public/chart.svg" alt="icon" />
        <span>Charts</span>
      </Link>
      <Link className="nav-item" to="/">
        <img src="../../../public/log.svg" alt="icon" />
        <span>Logs</span>
      </Link>
    </div>
  );
};

export default SideNavbar;
