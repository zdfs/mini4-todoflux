var AppDispatcher = require('../dispatcher/AppDispatcher'),
		AppConstants = require('../constants/AppConstants'),
		todoActions;

todoActions = {

	addItem (item) {

		AppDispatcher.handleAction({
			actionType:  AppConstants.ADD_ITEM,
			data: item
		});

	},

	removeItem (idx) {

		AppDispatcher.handleAction({
			actionType: AppConstants.REMOVE_ITEM,
			data: idx
		});

	}

};

module.exports = todoActions;