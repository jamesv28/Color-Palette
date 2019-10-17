import React, { Component } from 'react';

class ColorBox extends Component {
    render() {
        const {name, background} = this.props;
        return (
            <div style={{background: background}} className="colorBox">
                <div className="copy-container">
                    <div className="body-content">
                        <span>{name}</span>
                        <button className="see-more">More</button>
                    </div>
                    <button className="copy-button">Copy</button>
                </div>
            </div>
        )
    }
}

export default ColorBox;