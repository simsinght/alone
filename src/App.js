import React from 'react';
import GMap from './Components/Map';
import LeftColumn from './Components/LeftColumn'
import {Grid, Image, Header} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import border from './border.png';

function App() {
  return (
    <Grid centered style={{height: '100vh', 'backgroundColor': 'black'}}>
      <LeftColumn/>
      <Grid.Column width={12}>
        {/*<Image src={border} floated='left' style={{'z-index': '100000000', 'height': '95vh'}}/>*/}
        <GMap/>
      </Grid.Column>
    </Grid>
  );
}

export default App;
