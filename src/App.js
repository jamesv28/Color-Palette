import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalette} from './helpers/colorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

class App extends Component {

  findPalette(id) {
     return seedColors.find(function(palette) {
      return palette.id = id;
    })
  }

  render() {
    return (
      <Switch>
        <Route 
          exact path="/" 
          render={routeProps => 
            <PaletteList palettes={seedColors} {...routeProps}/> }
        />
        <Route
          exact path="/palette/new"
          render={ () => <NewPaletteForm /> }
        />
        <Route
          exact path="/palette/:paletteId/:colorId"
          render={(routeProps) => 
          <SingleColorPalette 
            palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
            colorId={routeProps.match.params.colorId}
            /> }
        />
        <Route 
          exact path='/palette/:id' 
          render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/> } 
        />
      </Switch>

    );
  }
}

export default App;
