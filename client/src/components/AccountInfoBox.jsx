var React = require('react');
var PropTypes = React.PropTypes;

var AccountInfoBox = React.createClass({

  render: function() {
    return (

      <div className='box info-box'>
        <h3 className='box-header'>{this.props.account.owner}s Account Info: </h3>
        <ul>
          <li>Amount: £{this.props.account.amount.toLocaleString()}</li>
          <li>Type: {this.props.account.type}</li>
        </ul>
      </div>
    );
  }

});

module.exports = AccountInfoBox;
