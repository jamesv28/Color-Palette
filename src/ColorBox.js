import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class ColorBox extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const {name, background} = this.props;
        return (
            <CopyToClipboard text={background}>
                <div style={{background: background}} className="colorBox hvr-pulse-grow">
                    <div className="copy-container">
                        <div className="body-content">
                            <span>{name}</span>
                            <button className="see-more ">More</button>
                        </div>
                        <button className="copy-button">Copy</button>
                    </div>
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox;