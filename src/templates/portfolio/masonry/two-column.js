import React, { Fragment, useEffect, useState } from 'react'
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'
import PageContainer from '../../../container/CustomPage'
import Loading from '../../../components/loading'
import { Link } from 'react-router-dom'
import sanityClient from '../../../sanity'

const PortfolioMasonryTwoColumn = ({ loading, fullWidth }) => {
  useEffect(() => {
    const grid = document.querySelector('.masonry-grid')
    imagesLoaded(grid, () => {
      new Masonry(grid, {
        itemSelector: '.masonry-grid [class*="col-"]',
      })
    })
  }, [])

  const [postData, setPostData] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `
         *[_type == "gallery"]{
  _id,
  title,
  slug,
image1{
  asset -> {
  _id,
  url
}
},
categories,
publishedAt,
  body,
  author -> {
  name,
  image
}
}`
      )
      .then((data) => setPostData(data))
      .catch(console.error)
  }, [])

  return (
    <Fragment>
      <PageContainer classes={'bg-grey'} fullWidth={fullWidth}>
        <div
          classname={`portfolio-item `}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingTop: '10',

            // flexDirection: 'column',
          }}
        >
          {postData &&
            postData.map((post, index) => (
              <div style={{ paddingTop: 10 }} key={index}>
                <Link
                  to={'/works/' + post.slug.current}
                  key={post?.slug.current}
                  className={'d-block'}
                >
                  <div className="portfolio-image container">
                    <img
                      src={post.image1.asset.url}
                      alt={post.title}
                      className="gallery-img image"
                      style={{ maxWidth: '600px' }}
                    />
                    <div className="portfolio-content overlay">
                      <div className="title text">{post?.title}</div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>

        {loading ? <Loading /> : null}
      </PageContainer>
    </Fragment>
  )
}

export default PortfolioMasonryTwoColumn
