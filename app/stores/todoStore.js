var AppDispatcher = require('../dispatcher/AppDispatcher'),
		AppConstants = require('../constants/AppConstants'),
		EventEmitter = require('events').EventEmitter,
		assign = require('react/lib/Object.assign'),
		CHANGE_EVENT = "change",
		_store,
		todoStore;

_store = {
	list: []
};

function addItem (item) {

	_store.list.push(item);

}

function removeItem (idx) {

	_store.list.splice(idx, 1);

}

/**
 * Our To do store extends the EventEmitter prototype.
 */

todoStore = assign({}, EventEmitter.prototype, {

	addChangeListener (cb) {
		this.on(CHANGE_EVENT, cb);
	},

	removeChangeListener (cb) {
		this.removeListener(CHANGE_EVENT, cb);
	},

	getList () {
		return _store.list;
	}

});

AppDispatcher.register(payload => {

	var action = payload.action;

	switch(action.actionType) {

		case AppConstants.ADD_ITEM:
			addItem(action.data);
			todoStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.REMOVE_ITEM:
			removeItem(action.data);
			todoStore.emit(CHANGE_EVENT);
			break;
		default:
			return true;

	}

});

module.exports = todoStore;