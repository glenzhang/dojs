import React, {PropTypes} from 'react';

/**
 class extends React.Component的顺序
 1. static静态方法
 2. constructor
 3. getChildContext
 4. componentWillMount
 5. componentDidMount
 6. componentWillReceiveProps
 7. shouldComponentUpdate
 8. componentWillUpdate
 9. componentDidUpdate
 10. 事件回调, onClick()等
 11. render
*/

/**
    1. 采用React 的 controller view 模式, controller view组件只用来保存状态，然后将其转发给子组件
*/

export default class Rule extends React.Component {
    static proTypes = { }

    static defaultProps = { }

    state = {

    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('Rule => componentWillMount');
    }

    componentDidMount() {
        console.log('Rule => componentDidMount');
    }

    componentWillReceiveProps() {
        console.log('Rule => componentWillReceiveProps');
    }

    shouldComponentUpdate() {
        console.log('Rule => shouldComponentUpdate');

        return true;
    }

    componentWillUpdate() {
        console.log('Rule => componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('Rule => componentDidUpdate');
    }

    render() {
        return (
            <div>
                <p>推荐采用es6+写法来编写react组件，class内部顺序为：</p>
                <ol>
                     <li>static静态方法</li>
                     <li>constructor</li>
                     <li>getChildContext</li>
                     <li>componentWillMount</li>
                     <li>componentDidMount</li>
                     <li>componentWillReceiveProps</li>
                     <li>shouldComponentUpdate</li>
                     <li>componentWillUpdate</li>
                     <li>componentDidUpdate</li>
                     <li>事件回调, onClick()等</li>
                     <li>render</li>
                </ol>
            </div>
        );
    }
}