import { Dispatcher } from 'flux';
import ListStore from '../stores/ListStore.js';

var AppDispatcher = new Dispatcher();

AppDispatcher.register(function(action) {
    switch (action.actionType) {
        case 'ADD_NEW_ITEM':
            ListStore.addNewItemHandler(action.text);
            ListStore.emitChange(); //手动触发更新
            break;

        case 'DELETE_ITEM': 
            ListStore.deleteItemHandler(action.idx);
            ListStore.emitChange();
            break;

        default:
            // no op
    }
});

export default AppDispatcher;
