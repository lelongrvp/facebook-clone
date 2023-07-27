import { Home } from "@mui/icons-material";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AddIcon from "@mui/icons-material/Add";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { Avatar, IconButton } from "@mui/material";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/900px-Facebook_Logo_%282019%29.png"
          alt="facebook-logo"
        />
        <div className="header-input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="middle">
        <div className="option">
          <Home fontSize="large" />
        </div>
        <div className="option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="option">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="option">
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="option">
          <SupervisorAccountIcon fontSize="large" />
        </div>
      </div>
      <div className="right">
        <div className="info">
          <Avatar src="" />
          <h4>Le Duc Long</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <MapsUgcIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <ArrowDownwardIcon />
        </IconButton>
      </div>
    </div>
  );
};
export default Header;
