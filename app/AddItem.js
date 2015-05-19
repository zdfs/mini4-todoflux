var React = require('react'),
		AddItem;

AddItem = React.createClass({

	/**
	 * Use getInitialState to set the initial state of the component with
	 * a newItem property with a value of an empty string.
	 */

	getInitialState () {

		return {
			newItem: ''
		}

	},

	/**
	 * Create a handleChange() method that uses setState() to update newItem
	 * with the value of whatever element is passed in with the event.
	 */

	handleChange (e) {

		this.setState({
			newItem: e.target.value
		});

	},

	/**
	 * Create a handleSubmit() to be called onKeyDown. Check to see if the current pressed key
	 * is the enter key and if so, call the add() method in the props object, passing the
	 * current state of newItem. Afterwards, reset the state of newItem to an empty string.
	 */

	handleSubmit (e) {

		if (e.keyCode === 13) {

			this.props.add(this.state.newItem);

			this.setState({
				newItem: ''
			});

		}

	},

	/**
	 * Render the component. Should be a text input utilizing all of our helper methods.
	 */

	render () {

		return (
			<div>
				<input type="text"
							 className="form-control"
							 value={this.state.newItem}
							 onKeyDown={this.handleSubmit}
							 onChange={this.handleChange} />
			</div>
		);

	}

});

/**
 * Export the component.
 */

module.exports = AddItem;