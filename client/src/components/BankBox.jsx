var data = require('../sample_accounts.js');
var AccountBox = require('./AccountBox.jsx');
var AccountForm = require('./AccountForm.jsx');
var AccountInfoBox = require('./AccountInfoBox.jsx');
var update = require('react-addons-update');

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
      return account.owner === id;
    })
    this.setState({selectedAccount: selectedAccount[0]});
  },

  getTotal: function(data) {
    var total = 0
    for(var account of data ) {
      total += account.amount;
    }
    return total;
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
  },

  handleClick: function() {
    console.log('button clicked');
    var updatedAccounts = []
    for(var account of this.state.accounts) {
      (account.amount *= 1.1)
      updatedAccounts.push(account)
    }
    this.setState({accounts:updatedAccounts})
    // for(var account of this.state.accounts) {
    //   var updatedAccounts = update(account, {account.amount: {$apply: function(amount) {return amount *= 1.10}}});
    //   this.setState({accounts:updatedAccounts})
    // }
  },

  render: function() {
    var displayInfoBox = null;
    if(this.state.selectedAccount) {
      displayInfoBox = <AccountInfoBox account={this.state.selectedAccount}/>
    }

    return (

      <div>
        <div className="main-header">
          <h1></h1>
        </div>
        <h2>
          Total value: £{this.getTotal(this.state.accounts).toFixed(2).toLocaleString()}
        </h2>

        <button className="add-btn btn" onClick={this.handleClick} type='button' >Add Interest</button>

        <AccountBox  title='Personal' data={this.sortAccounts("Personal")} getTotal={this.getTotal} displayAccountInfo={this.displayAccountInfo}/>

        {displayInfoBox}

        <AccountBox  title='Business' data={this.sortAccounts("Business")} getTotal={this.getTotal} displayAccountInfo={this.displayAccountInfo}/>

        <AccountForm onAddAccount={this.addAccount}/>

        <div className="footer">
          <footer>
            <p>&copy; 2016 ShayBex</p>
          </footer>
        </div>
      </div>
    );
  }

});

module.exports = BankBox;
