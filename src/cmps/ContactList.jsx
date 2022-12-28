import { Component } from 'react'
import { ContactPreview } from './ContactPreview'
import { Link } from 'react-router-dom';

export function ContactList({ contacts, onRemoveContact }) {
    console.log(contacts);
  return (
    <section className="contact-list simple-cards-grid">
      {contacts.map((contact) => (
        <ContactPreview key={contact._id} contact={contact} onRemoveContact={onRemoveContact} />
      ))}
      <Link to={'/contact/edit/'}><button className="add-contact-btn fa-solid circle-plus-icon"></button></Link>
    </section>
  )
}
