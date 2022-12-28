import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export function ContactPreview({ contact, onRemoveContact }) {
 
  return (
    <section className="contact-preview flex column" style={{backgroundImage: `url(${contact.imgUrl}${contact._id}?set=set5)`}}>
      <Link to={`/contact/${contact._id}`} className="flex space-between column">
        <h4>{contact.name}</h4>
      </Link>
      <section className="actions">
                <button onClick={() => onRemoveContact(contact._id)}>X</button>
                <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
            </section>
    </section>
  )
}
