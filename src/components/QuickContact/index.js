import React from 'react'

const QuickContact = ({ phone, email, location }) => {
  return (
    <div className="contact-info">
      <h3>CONTACT</h3>
      <ul>
        <li>
          <span>Instagram:</span>
          <a href="http://instagram.com/charlieg201">@charlieg201</a>
        </li>
        {/* <li>
          <span>Email:</span>
          <a href={`mailto:${email}`}>{email}</a>
        </li> */}
      </ul>
    </div>
  )
}

export default QuickContact
