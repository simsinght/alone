import { connect } from "react-redux";
import { setSliderValueOnce } from '../../redux/actions';
import RightControl from "./RightControl";

// import { getPositions, pollPositions } from "../../redux/actions";

const mapStateToProps = state => {
  const { GMap } = state;
  const sliderValue = GMap.sliderValue;
  const day = GMap.day;
  const hour = GMap.hour;
  const count = GMap.count;
  const parity = GMap.parity;
  return { day, hour, count, sliderValue, parity };
};

const mapDispatchToProps = dispatch => ({
  setSliderValue: (val) => dispatch(setSliderValueOnce(val, false))
})

// export default TodoList;
export default connect(mapStateToProps, mapDispatchToProps)(RightControl);
