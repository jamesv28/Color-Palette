import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {

    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    }

    gatherShades(palette, colorFilterBy) {
        let shades = [];
        let allColors =  palette.colors;
        for(let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorFilterBy)
            )
        }
        return shades.slice(1);
    }

    render() {
        const colorBoxes = this._shades.map(color => (
            <ColorBox 
                background={color.hex} 
                name={color.name} 
                key={color.name}
                showLink={false}
            />
        ))
        return (
            <div className="palette">
                React Single Color
                <div className="palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default SingleColorPalette;