var React = require('react'),
		ListContainer = require('./ListContainer'),
		App;

App = React.createClass({

	render () {

		return (
			<div className="container">
				<div className="row">
					<ListContainer />
				</div>
			</div>
		);

	}

});

React.render(
	<App/>,
	document.getElementById('app')
);