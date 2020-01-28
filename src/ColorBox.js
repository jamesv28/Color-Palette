import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import chroma from 'chroma-js';

class ColorBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            copied: false
        }
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState() {
        this.setState({
            copied: true
        }, () => {
            setTimeout( () => this.setState({copied: false}), 1500)
        })
    }

    render() {
        const {name, background, paletteId, colorId, showLink} = this.props;
        const {copied} = this.state;
        const isDarkColor = chroma(background).luminance() <= 0.06;
        const isLightColor = chroma(background).luminance() >= 0.8;
        
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState} >
                <div style={{background: background}} className="colorBox">
                    <div style={{ background}} className={`color-overlay ${copied ? 'show' : ''}`}/>
                    <div className={`copy-msg ${copied ? 'show' : ''}`}>
                        <h1 >Copied!!!</h1>
                        <p>{this.props.background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="body-content">
                            <span className={isDarkColor && 'lightText'}>{name}</span>
                            { showLink && (
                                <Link to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
                                    <button className={`see-more ${isLightColor && "darkText"}`}>More</button>
                                </Link>
                            ) }
                        </div>
                        <button className="copy-button">Copy</button>
                    </div>
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox;