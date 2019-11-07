import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalette} from './helpers/colorHelpers';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>this is the main route </h1>}/>
      <Route exact path='/palette/:id' />
    </Switch>
    // <div >
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
