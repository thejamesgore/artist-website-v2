import React, { Fragment, useState } from 'react'
import SideHeader from '../../../components/SideHeader'

import PortfolioMasonryTwoColumn from '../../../templates/portfolio/masonry/two-column'
import HeaderTwo from '../../../components/header/HeaderTwo'

const Works = () => {
  const [loading, setLoading] = useState(false)

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
