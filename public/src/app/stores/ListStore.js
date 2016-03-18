import { EventEmitter } from 'events';
import assign from 'object-assign';

export default assign({}, EventEmitter.prototype, {

    items: [],

    getAll: function() {
        return this.items;
    },

    addNewItemHandler: function(text) {
        this.items.push(text);
    },

    deleteItemHandler: function(idx) {
        this.items.splice(idx, 1);
    },

    emitChange: function() {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }

});
