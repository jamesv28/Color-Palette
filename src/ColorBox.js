import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

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
        const {name, background} = this.props;
        const {copied} = this.state;

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