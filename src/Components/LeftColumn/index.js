import { connect } from "react-redux";
import LeftColumn from "./LeftColumn";
// import { getPositions, pollPositions } from "../../redux/actions";

const mapStateToProps = state => {
  const { GMap } = state;
  const day = GMap.day;
  const hour = GMap.hour;
  const count = GMap.count;
  return { day, hour, count };
};

const mapDispatchToProps = dispatch => ({
})

// export default TodoList;
export default connect(mapStateToProps, mapDispatchToProps)(LeftColumn);
