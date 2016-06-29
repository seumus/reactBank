var Account = require('./Account.jsx')
var AccountInfoBox = require('./AccountInfoBox.jsx')
var React = require('react');


var AccountBox = React.createClass({

  render: function() {

    console.log(this.props.data);
    var accounts = this.props.data.map(function (account, index) {
      return(<Account key={index} name={account.owner} displayAccountInfo={this.props.displayAccountInfo}/>)
    }.bind(this))

    return (
      <div className='box'>
          <h3 className='box-header'> {this.props.title} Accounts</h3>
          {accounts}
          <h4>Total: £{this.props.getTotal(this.props.data).toFixed(2) .toLocaleString()}</h4>
      </div>
    );
  }

});

module.exports = AccountBox;
