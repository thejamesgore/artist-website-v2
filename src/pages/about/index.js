import React from 'react'
import HeaderTwo from '../../components/header/HeaderTwo'
import SideHeader from '../../components/SideHeader'
import ContentAboutPage from '../../templates/about-page'

const AboutPage = () => {
  return (
    <div className={`main-wrapper has-side-header`}>
      <HeaderTwo />
      <SideHeader mobile={false} />
      <ContentAboutPage />
    </div>
  )
}

export default AboutPage
