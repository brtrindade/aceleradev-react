import React from 'react';
import moment from 'moment';

import './Contact.scss';

class Contact extends React.Component {

  render() {
    const { data } = this.props;
    return (
      <article data-testid="contact" className="contact">
        <span className="contact__avatar">
          <img src={ data.avatar } alt={ data.name } />
        </span>
        <span data-testid="contact-name" className="contact__data">{ data.name }</span>
        <span data-testid="contact-phone" className="contact__data">{ data.phone }</span>
        <span data-testid="contact-country" className="contact__data">{ data.country }</span>
        <span data-testid="contact-date" className="contact__data">{ moment(data.admissionDate).format('DD/MM/YYYY')}</span>
        <span data-testid="contact-company" className="contact__data">{ data.company }</span>
        <span data-testid="contact-department" className="contact__data">{ data.department }</span>
      </article>
    );
  }
}

export default Contact;
