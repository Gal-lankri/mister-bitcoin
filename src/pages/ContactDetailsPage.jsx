import  { Component } from 'react'
import { Link } from 'react-router-dom'
import {contactService} from './../services/contact.service'

export class ContactDetailsPage extends Component {
    state = {
      contact: null
    }
    componentDidMount(){
      this.loadContact()
    }

    loadContact = async () => {
      const contact = await contactService.getContactById(this.props.match.params.id)
      this.setState({contact})
    }

  render() {
    const {contact} = this.state
    if (!contact) return <div>Loading...</div>
    return (
      <div className='contact-details flex column gap'>
        <img src={contact.imgUrl + contact._id + '?set=set5'} alt="" />
        <h3>Name: {contact.name}</h3>
        <h3>Phone: {contact.phone}</h3>
        <h3>Email: {contact.email}</h3>
      
      </div>
    )
  }
}
