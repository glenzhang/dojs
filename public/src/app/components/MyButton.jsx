import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

const style = {
    margin: 12
};

export default class MyButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map((listItem, i) => {
                      return (
                        <li key={i}>{listItem} <a href="javascript:void(0);" onClick={this.props.onDelete.bind(this, i)}>del</a></li>
                      );
                    })}
                </ul>
                <RaisedButton label="Add" primary={true} style={style} onMouseDown={this.props.onClick} />
                <input type="text" ref="myInput" defaultValue={this.props.value} onKeyUp={this.props.onKeyUp.bind(this)} placeholder="item name" /><button onClick={this.props.onClick}>New Item</button>
            </div>
        );
    }
};