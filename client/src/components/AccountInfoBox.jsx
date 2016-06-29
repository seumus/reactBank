var React = require('react');
var PropTypes = React.PropTypes;

var AccountInfoBox = React.createClass({

  render: function() {
    console.log("t",this.props.account)
    return (

      <div className='infoBox'>
        <h2 className='cheese'>{this.props.account.owner}'s Account Info: </h2>
        <ul>
          <li>Amount: {this.props.account.amount}</li>
          <li>Type: {this.props.account.type}</li>
        </ul>
      </div>
    );
  }

});

module.exports = AccountInfoBox;
