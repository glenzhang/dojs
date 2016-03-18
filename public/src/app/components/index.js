import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import App from './app.jsx';
//import Rule from './rule.jsx';
import NoMatch from './NoMatch.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render((
    <Router history={browserHistory}>
        <Route  path="/index" component={App}>
            <Route path="/index/rule" getComponent={(location, cb) => {
                require.ensure([], (require) => {
                  // Retrieve checkout page component
                  cb(null, require('./rule.jsx').default);
                });
            }} />
        </Route>
        <Route path="*" component={NoMatch}/>
    </Router>
), document.querySelector('#example'));

