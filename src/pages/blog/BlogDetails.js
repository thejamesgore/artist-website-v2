import React from 'react'
import TemplateBlogDetails from '../../templates/blog-details'
import SideHeader from '../../components/SideHeader'
import HeaderTwo from '../../components/header/HeaderTwo'

const BlogDetailsRightSidebarPage = () => {
  return (
    <div className={'main-wrapper has-side-header'}>
      <HeaderTwo />
      <SideHeader mobile={false} />
      <TemplateBlogDetails sidebarPosition="right" />
    </div>
  )
}

export default BlogDetailsRightSidebarPage
