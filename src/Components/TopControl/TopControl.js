import React, { Component } from 'react';
import {Grid, Header, Segment} from 'semantic-ui-react';
import { Slider } from "react-semantic-ui-range";

class TopControl extends Component {

  render() {
    return (
      <Grid.Row columns={2} style={{height: '20%'}}>
        <Grid.Column width={4} style={{'height': 'fit-content'}}>
            <Grid.Row>
              <Header style={{'fontSize': 'calc(24px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))', 'paddingBottom': '0'}}
                      textAlign="center"
                      inverted
              >
                <span style={{'color': 'red'}}>SOME</span>
                <span style={{'color': 'white'}}>ONE </span>
                <span style={{'color': 'red'}}>WALKS HOME ALONE AT NIGHT</span>
              </Header>
            </Grid.Row>
            <Grid.Row width={16}>
              <p style={{'color': 'white', 'textAlign': 'center'}}>
                <i>a different kind of 9 to 5</i>
              </p>
            </Grid.Row>
        </Grid.Column>
        <Grid.Column width={12}>
          <Header textAlign='center' style={{marginBottom: 0, paddingTop: 20}}>
            <span style={{'color': 'white'}}>{this.props.day} </span>
            <span style={{'color': 'red'}}>{this.props.hour}</span>
          </Header>
          <p style={{'color': 'white', 'textAlign': 'center'}}>
            total count: {this.props.count}
          </p>
          <Grid.Row columns={7}>
            <Slider color="red" style={{'.semantic_ui_range_inner > div:firstchild': {'backgroundColor': 'white'}}}/>
            <Segment.Group horizontal style={{marginTop: 0, backgroundColor: 'black', color: 'white'}}>
              <Segment inverted style={{paddingTop: 5}}>Mon</Segment>
              <Segment inverted style={{paddingTop: 5}}>Tue</Segment>
              <Segment inverted style={{paddingTop: 5}}>Wed</Segment>
              <Segment inverted style={{paddingTop: 5}}>Thu</Segment>
              <Segment inverted style={{paddingTop: 5}}>Fri</Segment>
              <Segment inverted style={{paddingTop: 5}}>Sat</Segment>
              <Segment inverted style={{paddingTop: 5}}>Sun</Segment>
            </Segment.Group>
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default TopControl;
