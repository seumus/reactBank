var React = require('react');

var AccountForm = React.createClass({

  getInitialState: function () {
    return {owner: "", amount: 0, type: "Personal"};
  },

  handleOwnerChange: function (event) {
    this.setState({owner: event.target.value})
  },

  handleAmountChange: function (event) {
    this.setState({amount: parseInt(event.target.value)})
  },

  handleTypeChange: function (event) {
    this.setState({type: event.target.options[event.target.selectedIndex].value})
  },

  handleSubmit: function (event) {
    event.preventDefault()
    this.props.onAddAccount({owner: this.state.owner, amount: this.state.amount, type: this.state.type})
    this.setState({owner: "", amount: 0, type: ""})
  },

  render: function() {
    return (
      <form>
        <label>Owner: <input type='text' value={this.state.owner} onChange={this.handleOwnerChange}/></label>
        <label>Amount: <input type='number' value={this.state.amount} onChange={this.handleAmountChange}/></label>
        <label>Type: <select onChange={this.handleTypeChange} value={this.state.type}>
          <option value='Personal'>Personal</option>
          <option value='Business'>Business</option>
        </select></label>
        <button type="button" onClick={this.handleSubmit} >Add Account</button>
      </form>
    );
  }

});

module.exports = AccountForm;
