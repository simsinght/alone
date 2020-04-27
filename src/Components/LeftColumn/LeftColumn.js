import React, { Component } from 'react';
import {Grid, Button, Image, Header, Icon} from 'semantic-ui-react';
import title from '../../title.png';

class LeftColumn extends Component {

  render() {
    return (
      <Grid.Column style={{paddingRight: 0}} verticalAlign={'middle'} centered width={4}>
        {!this.props.looping ?
          <div className='redoTime'>
            <Button icon color='black' onClick={() => this.props.continueTicking(this.props.sliderValue)}>
              <Icon name='play' color='red'/>
            </Button>
          </div> : null
        }
        <br/>
        <div className={'controlInfo'}>
        <Header textAlign='center' style={{marginBottom: 0}}>
          <span style={{'color': 'white'}}>{this.props.day} </span>
          <span style={{'color': 'red'}}>{this.props.hour}</span>
        </Header>
        <p style={{'color': 'white', 'textAlign': 'center'}}>
          total count: {this.props.count}
        </p>
        </div>
        <br/>
        <br/>
        <br/>
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
        <br/>
        <br/>
        <br/>
      </Grid.Column>
    )
  }
}

export default LeftColumn;
