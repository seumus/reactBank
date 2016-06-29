var data = require('../sample_accounts.js')
var AccountBox = require('./AccountBox.jsx')
var AccountForm = require('./AccountForm.jsx')
var AccountInfoBox = require('./AccountInfoBox.jsx')
// var Account = require('./Account.jsx')
var update = require('react-addons-update')

var React = require('react');

var BankBox = React.createClass({
  getInitialState: function() {
    return {
      accounts: data,
      selectedAccount: null
    };
  },

  displayAccountInfo: function(id) {
    var selectedAccount = this.state.accounts.filter(function (account) {
      // console.log('ham', account);
      return account.owner === id;
    })
    this.setState({selectedAccount: selectedAccount[0]})
    // console.log("cheese",this.state.selectedAccount);
  },

  getTotal: function(data) {
    var total = 0
    for(var account of data ) {
      total += account.amount
    }
    return total
  },

  sortAccounts: function (type) {
    var sortedAccounts = this.state.accounts.filter(function (account) {
      return account.type === type;
    })
    return sortedAccounts;
  },

  addAccount: function (account) {
    var newAccounts = this.state.accounts.concat([account]);
    this.setState({accounts: newAccounts});
    console.log('t',newAccounts);
  },

  handleClick: function() {
    console.log('button clicked');
    var updatedAccounts = []
    for(var account of this.state.accounts) {
      (account.amount *= 1.1)
      // account.amount = account.amount.toFixed(2)
      updatedAccounts.push(account)
    }
    this.setState({accounts:updatedAccounts})
    // for(var account of this.state.accounts) {
    //   var updatedAccounts = update(account, {account.amount: {$apply: function(amount) {return amount *= 1.10}}});
    //   this.setState({accounts:updatedAccounts})
    // }
  },

  render: function() {
    var displayInfoBox = <h4> No Account Selected</h4>
      if(this.state.selectedAccount) {
        displayInfoBox = <AccountInfoBox account={this.state.selectedAccount}/>
      }
    return (
      <div>
        <div className="main-header">
          <h1></h1>
        </div>

      <h2>Total: {this.getTotal(this.state.accounts).toFixed(2)}</h2>

      <div>
        <AccountBox  title='Personal' data={this.sortAccounts("Personal")} getTotal={this.getTotal} displayAccountInfo={this.displayAccountInfo}/>

        <AccountBox  title='Business' data={this.sortAccounts("Business")} getTotal={this.getTotal} displayAccountInfo={this.displayAccountInfo}/>
        {displayInfoBox}

      </div>

      <button onClick={this.handleClick} type='button' >Add Interest</button>
      <AccountForm onAddAccount={this.addAccount}/>
      </div>
    );
  }

});

module.exports = BankBox;
