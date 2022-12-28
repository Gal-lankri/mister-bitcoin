import { Component } from 'react'
import { Link } from 'react-router-dom'
import { contactService } from './../services/contact.service'
import { TransferFound } from '../cmps/TransferFund'
import { userService } from '../services/user.service'

export class ContactDetailsPage extends Component {
  state = {
    contact: null,
    user: userService.getUser()
  }
  componentDidMount() {
    this.loadContact()
  }

  onTransferCoins = (amount) => {
    const updatedUser = userService.addMove(this.state.contact, amount)
    this.setState({ user: updatedUser })
}

  loadContact = async () => {
    const contact = await contactService.getContactById(this.props.match.params.id)
    this.setState({ contact })
  }

  render() {
    const { contact, user } = this.state
    if (!contact) return <div>Loading...</div>
    return (
      <>

        <section className="contact-details flex column gap">
          <img src={contact.imgUrl + contact._id + '?set=set5'} alt="" />
          <h3>
            <span className="fa-regular user-icon"></span>
            {contact.name}
          </h3>
          <h3>
            <span className="fa-regular phone-icon"></span>
            {contact.phone}
          </h3>
          <h3>
            <span className="fa-regular email-icon"></span>
            {contact.email}
          </h3>
        </section>
        <section className='transfer-container'>
          <TransferFound contact={contact.name} maxCoins={user.coins} onTransferCoins={this.onTransferCoins}/>
        </section>
      </>
    )
  }
}
