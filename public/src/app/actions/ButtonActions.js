import AppDispatcher from '../dispatcher/AppDispatcher';
import ItemConstants from '../constants/ItemConstants';

export default {
    addNewItem: function(text) {
        AppDispatcher.dispatch({
            actionType: ItemConstants.ADD_NEW_ITEM,
            text: text
        });
    },

    deleteItem: function(idx) {
        AppDispatcher.dispatch({
            actionType: ItemConstants.DELETE_ITEM,
            idx: idx
        });
    }
};
