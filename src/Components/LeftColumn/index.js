import { connect } from "react-redux";
import LeftColumn from "./LeftColumn";
import { startLoop } from "../../redux/actions";

const mapStateToProps = state => {
  const { GMap } = state;
  const day = GMap.day;
  const hour = GMap.hour;
  const count = GMap.count;
  const sliderValue = GMap.sliderValue;
  const looping = GMap.looping;
  return { day, hour, count, sliderValue, looping };
};

const mapDispatchToProps = dispatch => ({
  continueTicking: (val, looping) => dispatch(startLoop(val, looping))
})

// export default TodoList;
export default connect(mapStateToProps, mapDispatchToProps)(LeftColumn);
