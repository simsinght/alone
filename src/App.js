import React, {Component} from 'react';
import GMap from './Components/Map';
import LeftColumn from './Components/LeftColumn';
import TopControl from './Components/TopControl';
import RightControl from './Components/RightControl';
import Tour from 'reactour'
import {Grid} from 'semantic-ui-react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  state = {
    isTourOpen: true
  };

  closeTour = () => {
    this.props.onDismiss();
    this.setState({
      isTourOpen: false
    })
  }


  render() {
    let row = false;
    return (
      <Grid centered style={{height: '100vh', 'backgroundColor': 'black'}}>
      { row ? <TopControl/> : <LeftColumn/> }
      {
        row ?
        <Grid.Row style={{height: '80%', paddingBottom: 0}}>
        <Grid.Column width={16}>
        {/*<Image src={border} floated='left' style={{'z-index': '100000000', 'height': '95vh'}}/>*/}
        <GMap/>
        </Grid.Column>
        </Grid.Row>
        :
        <Grid.Column width={12}>
        <RightControl/>
        </Grid.Column>
      }
      <Tour
      steps={steps}
      isOpen={this.state.isTourOpen}
      onRequestClose={this.closeTour}
      />
      </Grid>
    );
  }
}

const steps = [
  {
    selector: '.timeline',
    content: 'You can move the slider to view data throughout the week. Try clicking and dragging above "Wed".'
  },
  {
    selector: '.mapContainer',
    content: 'Try clicking any of the red dots. Each one symbolizes a person that was spotted at that position by a camera. This information is precise to the second.'
  },
  {
    selector: '.controlInfo',
    content: 'Only a few of the total people seen are shown on the map. You can see complete number of people spotted during the hour here.'
  },
  {
    selector: '.redoTime',
    content: 'Any time the time ticking is paused, you can click here to continue or restart it.'
  }
]

export default App;
