var React = require('react');

var Account = React.createClass({

  render: function() {
    return (
      <div>
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Amount: {this.props.amount.toFixed(2)}</li>
        </ul>
      </div>
    );
  }

});

module.exports = Account;
