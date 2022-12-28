import { Component } from 'react'

export class TransferFound extends Component {
  state = {
    amount: '',
  }

  onTransfer = (ev) => {
    ev.preventDefault()
    const { amount } = this.state
    const { maxCoins } = this.props
    if (amount > maxCoins || amount <= 0) return alert("Sorry, you don't have enough mony") 
    this.props.onTransferCoins(amount)
    this.setState({ amount: ''})
}

  handleChange = ({ target }) => {
    const field = target.name
    let value = target.value
    switch (target.type) {
      case 'number':
      case 'range':
        value = +value || ''
        break
      case 'checkbox':
        value = target.checked
        break
      default:
        break
    }

    this.setState({ [field]: value })
  }

  render() {
    const {amount} = this.state
    const {contact, maxCoins} = this.props
    return (
      <section className="transfer">
        <form onSubmit={this.onTransfer} className="simple-form">
        <h3>Transfer coins to: {contact}</h3>
          <label htmlFor="amount"></label>
          <input type="number" name="amount" id="amount" value={amount} onChange={this.handleChange} placeholder="Amount"/>
          <button className='simple-btn'>Transfer</button>
        </form>
      </section>
    )
  }
}
