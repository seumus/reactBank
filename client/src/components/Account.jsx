var React = require('react');

var Account = React.createClass({

  handleAccountClick: function (event) {
    this.props.displayAccountInfo(event.target.id);
  },

  render: function() {
    return (
      <div>
        <button
          type='button'
          id={this.props.name}
          onClick={this.handleAccountClick}>{this.props.name}
        </button>
      </div>
    );
  }

});

module.exports = Account;
