import { connect } from "react-redux";
import GMap from "./GMap";
import { getPositions, pollPositions } from "../../redux/actions";

const mapStateToProps = state => {
  const { GMap } = state;
  const positions = GMap.positions;
  const polling = GMap.polling;
  return { positions, polling };
};

const mapDispatchToProps = dispatch => ({
  getPositions: () => dispatch(getPositions()),
  pollPositions: () => dispatch(pollPositions()),
})

// export default TodoList;
export default connect(mapStateToProps, mapDispatchToProps)(GMap);
