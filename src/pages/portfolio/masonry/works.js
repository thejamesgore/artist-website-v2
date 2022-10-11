import React, { Fragment } from 'react'
import SideHeader from '../../../components/SideHeader'

import PortfolioMasonryTwoColumn from '../../../templates/portfolio/masonry/two-column'
import HeaderTwo from '../../../components/header/HeaderTwo'

const Works = () => {
  const loading = null

  return (
    <Fragment>
      <div className={'main-wrapper has-side-header'}>
        <HeaderTwo />
        <SideHeader mobile={false} />
        <PortfolioMasonryTwoColumn loading={loading} />
      </div>
    </Fragment>
  )
}

export default Works
