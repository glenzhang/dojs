import React from 'react';
import ReactDOM from 'react-dom';
import MyButtonController from './MyButtonController.jsx';
import MaterialUi from './MaterialUi.jsx';
import {Router, Route, Link, browserHistory} from 'react-router';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <MyButtonController />
                <MaterialUi />
                {this.props.children}
                <ul>
                <li><Link to="/index/rule" activeClassName="active">Rule</Link></li>
                </ul>
            </div>
        );
    }
};