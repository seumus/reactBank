var Account = require('./Account.jsx')
var AccountInfoBox = require('./AccountInfoBox.jsx')
var React = require('react');


var AccountBox = React.createClass({

  render: function() {

    console.log(this.props.data);
    var accounts = this.props.data.map(function (account, index) {
      return(<Account key={index} name={account.owner} amount={account.amount} />)
    })

    return (
      <div className='accountBox'>
  

          <h2 className='cheese'> {this.props.title} Accounts</h2>
          {accounts}
          <h3>Total: {this.props.getTotal(this.props.data).toFixed(2)}</h3>

      </div>
    );
  }

});

module.exports = AccountBox;
