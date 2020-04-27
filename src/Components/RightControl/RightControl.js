import React, { Component } from 'react';
import {Grid, Segment} from 'semantic-ui-react';
import { Slider } from "react-semantic-ui-range";
import GMap from '../Map';

class RightControl extends Component {

  /*
  state = {
    value: 0
  };

  FUCK YEAH MATH
  Day, Hour
  7, 24
  7 * 24 = 168
  valid times:
    12AM to 5AM? -> 0 <= n % 24 and 4 >= n % 24
      5AM to 12PM -> drop to 4AM
    8PM to 12AM  -> 20 <= n % 24 and 23 >= n % 24
      12PM to 8PM -> jump to 8PM
  setValue = (val) => {
    // if (0 <= (val % 24) && 4 >= (val % 24)) || (20 <= (val % 24) && 23 >= (val % 24)) {
    if (5 <= (val % 24) && 12 >= (val % 24)) {
      val = val - (val % 24) + 4;
    } else if (12 < (val % 24) && 20 >= (val % 24)) {
      val = val - (val % 24) + 20;
    }
    console.log(val);
    this.setState({
      value: val
    });
  };
  */

  settings = {
    start: 0,
    min: 0,
    max: 167,
    step: 1,
    onChange: value => {
      //{console.log('on change');
      this.props.setSliderValue(value);
    }
  };

  render() {
    //console.log('sliderval at render', this.props.sliderValue, this.props.parity);
    return (
        <div style={{height: '100vh'}}>
          <Grid.Row className='timeline' columns={7}>
            <br/>
            <Slider parity={this.props.parity} value={this.props.sliderValue} color="red" settings={this.settings}/>
            <Segment.Group horizontal style={{margin: 0, backgroundColor: 'black', color: 'white'}}>
              <Segment inverted style={{paddingTop: 5, textAlign: 'center'}}>Mon</Segment>
              <Segment inverted style={{paddingTop: 5, textAlign: 'center'}}>Tue</Segment>
              <Segment inverted style={{paddingTop: 5, textAlign: 'center'}}>Wed</Segment>
              <Segment inverted style={{paddingTop: 5, textAlign: 'center'}}>Thu</Segment>
              <Segment inverted style={{paddingTop: 5, textAlign: 'center'}}>Fri</Segment>
              <Segment inverted style={{paddingTop: 5, textAlign: 'center'}}>Sat</Segment>
              <Segment inverted style={{paddingTop: 5, textAlign: 'center'}}>Sun</Segment>
            </Segment.Group>
          </Grid.Row>
          <div style={{height: '90vh'}}>
          <GMap/>
          </div>
        </div>
    )
  }
}

export default RightControl;
