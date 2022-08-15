import React, { Fragment } from 'react'
import Contact from '../../container/contact'
import HeaderTwo from '../../components/header/HeaderTwo'
import SideHeader from '../../components/SideHeader'

const ContactPage = () => {
  return (
    <Fragment>
      <HeaderTwo />
      <SideHeader mobile={false} />
      <Contact />
    </Fragment>
  )
}

export default ContactPage
