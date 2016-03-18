import React from 'react';
import ListStore from '../stores/ListStore';
import ButtonActions from '../actions/ButtonActions';
import MyButton from './MyButton.jsx';

export default class MyButtonController extends React.Component {

    state = {
        items: ListStore.getAll(),
        value: ""
    }

    componentDidMount() {
        ListStore.addListener('change', this.onChange);
    }

    componentWillUnmount(){
        ListStore.removeListener('change', this.onChange);
    }

    onChange = () => {
        this.setState({items: ListStore.getAll()});
    }

    createNewItem = () => {
        ButtonActions.addNewItem( this.state.value || 'new item1');
    }

    deleteItem = (idx, ev) => {
        ev.preventDefault();
        ButtonActions.deleteItem(idx);
    }

    onKeyUp = (ev) => {
        this.setState({value: ev.target.value});
    }

    render() {
        return (
            <MyButton
                items={this.state.items}
                onClick={this.createNewItem}
                onDelete={this.deleteItem}
                value={this.state.value}
                onKeyUp={this.onKeyUp}
            />
        );
    }

};

