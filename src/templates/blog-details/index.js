import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import sanityClient from '../../sanity'

import BlockContent from '@sanity/block-content-to-react'

const TemplateBlogDetails = ({ sidebar, sidebarPosition }) => {
  const [singlePost, setSinglePost] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
          asset->{
            _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error)
  }, [slug])

  if (!singlePost) return <div>Loading...</div>

  return (
    <>
      <main className="main-wrapper">
        <article style={{ margin: '0px 40px' }}>
          <header className="relative">
            <div className="absolute h-full w-full flex items-center justify-center p-8">
              <div className="bg-white bg-opacity-75 rounded p-12">
                <h1
                  className="blog-title cursive  text-3xl lg:text-6xl mb-4"
                  style={{ marginTop: '10px' }}
                >
                  {singlePost.title}
                </h1>
                <p style={{ marginBottom: '5px' }}>by Charles Gore</p>
              </div>
            </div>
            <div className="blog-image-container">
              <img
                src={singlePost.mainImage.asset.url}
                alt={singlePost.title}
                className="w-full object-cover rounded-t "
                style={{ height: '300px' }}
              />
            </div>
          </header>
          <div
            className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full"
            style={{ marginTop: '10px' }}
          >
            <BlockContent
              blocks={singlePost.body}
              projectId="ph4hgpxb"
              dataset="production"
            />
          </div>
        </article>
      </main>
    </>
  )
}

TemplateBlogDetails.defaultProps = {
  sidebar: false,
  sidebarPosition: 'left',
}

export default TemplateBlogDetails
