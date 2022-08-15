import React from 'react'

import HeaderTwo from '../../components/header/HeaderTwo'
import SideHeader from '../../components/SideHeader'
import TemplateBlogWithoutSidebar from '../../templates/blog/BlogWithoutSidebar'

const BlogThreeColumnPage = () => {
  return (
    <div className={'main-wrapper has-side-header'}>
      <HeaderTwo />
      <SideHeader mobile={false} />
      <TemplateBlogWithoutSidebar
        blogColumnClass={'col-12 col-lg-4 col-md-6'}
      />
    </div>
  )
}

export default BlogThreeColumnPage
