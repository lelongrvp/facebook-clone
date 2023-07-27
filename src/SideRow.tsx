import Icon from "@mui/material/Icon";
import "./SideRow.css";

interface Props {
  title: string;
  icon: string;
}

const SideRow: React.FC<Props> = ({ title, icon }) => {
  return (
    <div className="sidebar-row">
      <Icon>{icon}</Icon>
      <h4>{title}</h4>
    </div>
  );
};

export default SideRow;
