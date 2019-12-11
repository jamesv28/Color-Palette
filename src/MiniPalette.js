import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        backgroundColor: 'purple',
        border: '3px solid black'
    }
}

function MiniPalette(props) {
    const { classes } = props;
    console.log(classes);
    return (
        <div>
            <h1 className={classes.root}>
                MiniPalette
            </h1>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);