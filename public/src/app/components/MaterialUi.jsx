import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import {deepOrange500} from 'material-ui/lib/styles/colors';
import FlatButton from 'material-ui/lib/flat-button';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200
    }
};

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

export default class MaterialUi extends React.Component {
    state = {
        open: false
    }

    constructor(props, context){
        super(props, context);
    }

    handleRequestClose=()=>{
        this.setState({open: false});
    }

    handleTouchTap=()=>{
        this.setState({open: true});
    }

    render(){
        const standardActions = (
            <FlatButton
                label="Okey"
                secondary={true}
                onTouchTap={this.handleRequestClose}
            />
        );

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <Dialog
                        open={this.state.open}
                        title="Super Secret Password"
                        actions={standardActions}
                        onRequestClose={this.handleRequestClose}
                    >
                        1-2-3-4-5
                    </Dialog>
                    <h1>material-ui</h1>
                    <h2>demo component</h2>
                    <RaisedButton
                        label="Super Secret Password"
                        primary={true}
                        onTouchTap={this.handleTouchTap}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
} 