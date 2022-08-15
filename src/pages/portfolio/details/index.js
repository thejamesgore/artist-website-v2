import React, { Fragment } from 'react'
import SideHeader from '../../../components/SideHeader'
import HeaderTwo from '../../../components/header/HeaderTwo'
import TemplatePortfolioDetails from '../../../templates/portfolio/details'

const PortfolioDetailsPage = () => {
  return (
    <Fragment>
      <HeaderTwo />
      <SideHeader mobile={false} />
      <TemplatePortfolioDetails />
    </Fragment>
  )
}

export default PortfolioDetailsPage
