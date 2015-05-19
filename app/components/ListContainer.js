var React = require('react'),
		AddItem = require('./AddItem'),
		List = require('./List'),
		todoStore = require('../stores/todoStore'),
		todoActions = require('../actions/todoActions'),
		ListContainer;

ListContainer = React.createClass({

	getInitialState () {

		return {
			list: todoStore.getList()
		}

	},

	_onChange () {

		this.setState({
			list: todoStore.getList()
		});

	},

	componentDidMount () {

		todoStore.addChangeListener(this._onChange);

	},

	componentWillUnmount () {

		todoStore.removeChangeListener(this._onChange);

	},

	handleAddItem (item) {

		todoActions.addItem(item)

	},

	handleRemoveItem (index) {

		todoActions.removeItem(index);

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