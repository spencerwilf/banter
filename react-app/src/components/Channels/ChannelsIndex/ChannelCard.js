import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadActiveChannelThunk } from "../../../store/activeChannel";

const ChannelCard = ({ channel }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleCardClick = (e) => {
    e.preventDefault();
    dispatch(loadActiveChannelThunk(channel.id))
    history.push(`/dashboard/${channel.workspace_id}/${channel.id}`);
  };

  return (
    <div onClick={handleCardClick}>
      <h2>{`# ${channel.name}`}</h2>
    </div>
  );
};
export default ChannelCard;
