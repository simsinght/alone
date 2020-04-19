import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import {Grid, Image, Header} from 'semantic-ui-react';
import title from '../../title.png';

class LeftColumn extends Component {

  render() {
    return (
      <Grid.Column style={{paddingRight: 0}} verticalAlign={'middle'} centered width={4}>
        {/*<Header style={{'fontSize': 'calc(24px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))'}}
                textAlign="center"
                inverted
        >
          <span style={{'color': 'white'}}>SOME</span>
          <span style={{'color': 'red'}}>ONE </span>
          <span style={{'color': 'white'}}>WALKS HOME ALONE AT NIGHT</span>
        </Header>*/}
        <Image src={title}/>
        <p style={{'color': 'white', 'textAlign': 'center'}}>
          <i>a different kind of 9 to 5</i>
        </p>
        <Header textAlign='center' style={{marginBottom: 0}}>
          <span style={{'color': 'white'}}>{this.props.day} </span>
          <span style={{'color': 'red'}}>{this.props.hour}</span>
        </Header>
        <p style={{'color': 'white', 'textAlign': 'center'}}>
          total count: {this.props.count}
        </p>
      </Grid.Column>
    )
  }
}

export default LeftColumn;
