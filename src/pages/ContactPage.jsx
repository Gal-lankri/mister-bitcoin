import { Component } from 'react'
import { ContactList } from '../cmps/ContactList'
import { contactService } from '../services/contact.service'
import { ContactFilter } from '../cmps/ContactFilter'

export class ContactPage extends Component {
  state = {
    contacts: null,
    filterBy: {
      name: '',
    },
  }

  componentDidMount() {
    this.loadContacts()
  }

  onRemoveContact = async (contactId) => {
    try {
      await contactService.deleteContact(contactId)
      this.setState(({ contacts }) => ({
        contacts: contacts.filter((contact) => contact._id !== contactId),
      }))
    } catch (err) {
      console.log('err:', err)
    }
  }

  loadContacts = async () => {
    try {
      const contacts = await contactService.getContacts(this.state.filterBy)
      this.setState({ contacts })
    } catch (err) {
      console.log('err', err)
    }
  }
  onChangeFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadContacts)
  }

  render() {
    const { contacts, filterBy } = this.state
    if (!contacts) return <div>Loading...</div>
    console.log(contacts)
    return (
      <section className='contacts-container flex column gap'>
        <h1>Contacts</h1>
        <ContactFilter onChangeFilter={this.onChangeFilter} filterBy={filterBy} />
        <ContactList contacts={contacts} onRemoveContact={this.onRemoveContact} />
        
      </section>
    )
  }
}
