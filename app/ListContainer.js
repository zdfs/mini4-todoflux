var React = require('react'),
		AddItem = require('./AddItem'),
		List = require('./List'),
		ListContainer;

ListContainer = React.createClass({

	getInitialState () {

		return {
			list: []
		}

	},

	/**
	 * Treat your state as an immutable object. Don't interact with the list array
	 * directly. Use setState().
	 */

	handleAddItem (item) {

		this.setState({
			list: this.state.list.concat([item])
		})

	},

	handleRemoveItem (index) {

		var newList = this.state.list;

		newList.splice(index, 1);

		this.setState({
			list: newList
		});

	},

	render () {

		return (
			<div className="col-sm-6 col-md-offset-3">
				<div className="col-sm-12">
					<h3 className="text-center">Todo List</h3>
					<AddItem add={this.handleAddItem} />
					<List items={this.state.list} remove={this.handleRemoveItem} />
				</div>
			</div>
		);

	}

});

module.exports = ListContainer;