import * as React from "react";
import "./Sidebar.css";
import SideRow from "./SideRow";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const { useState } = React;

const Sidebar: React.FC = () => {
  const titles = ["Friends", "Feeds", "Groups", "Marketplace", "Video"];
  const icons: string[] = [
    "group",
    "Newspaper",
    "Diversity3",
    "Storefront",
    "Video",
  ];
  const menu: { title: string; icon: string }[] = titles.map(
    (title, index) => ({
      title,
      icon: icons[index],
    })
  );

  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="sidebar">
      <ul>
        {showMore
          ? menu.map((item, index) => (
              <li className="sidebar-item">
                <SideRow key={index} title={item.title} icon={item.icon} />
              </li>
            ))
          : menu.slice(0, 4).map((item, index) => (
              <li className="sidebar-item">
                <SideRow key={index} title={item.title} icon={item.icon} />
              </li>
            ))}
      </ul>
      {showMore ? (
        <button onClick={handleShowMore}>
          <ArrowUpwardIcon />
          <h4>See Less</h4>
        </button>
      ) : (
        <button onClick={handleShowMore}>
          <ArrowDownwardIcon />
          <h4>See More</h4>
        </button>
      )}
    </div>
  );
};

export default Sidebar;
