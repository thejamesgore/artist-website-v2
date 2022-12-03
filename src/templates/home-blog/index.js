import React, { useState, useEffect } from 'react'
import sanityClient from '../../sanity'

import HomeBlogPageHeader from '../../components/PageHeader/HomeBlog'

const ContentHomeBlogPage = () => {
  const [postData, setPostData] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `

          *[_type =="post"]{
            _id,
            title,
            slug,
            mainImage{
                asset->{
                  _id,
                  url
                },
                alt
            },
            body
          }`
      )
      .then((data) => setPostData(data))
      .catch(console.error)
  }, [])

  console.log(`blog data >>>`, postData)

  return (
    <div className="content-body section custom-scroll">
      <div className="section-wrap section">
        <HomeBlogPageHeader />
        {/* <div className="blog-wrap bg-grey section-padding pl-15 pl-xs-0 pr-15 pr-xs-0">
          <div className="container">
            <div className="row blog-content-wrap">
              {postData &&
                postData.map((post, index) => (
                  <div key={index}>
                    <div className="blog-image">
                      <Link
                        to={`/blog/${
                          process.env.PUBLIC_URL + post.slug.current
                        }`}
                      >
                        <img
                          style={{ maxHeight: '100vh' }}
                          src={post.mainImage.asset.url}
                          alt={post.title}
                        />
                      </Link>
                    </div>

                    <div className="blog-content">
                      <h4 className="blog-title">
                        <Link
                          to={`/blog/${
                            process.env.PUBLIC_URL + post.slug.current
                          }`}
                        >
                          {post.title}
                        </Link>
                      </h4>

                      <ul className="blog-meta">
                        <li>
                          By{' '}
                          <Link
                            to={`/blog/${
                              process.env.PUBLIC_URL + post.slug.current
                            }`}
                          >
                            Charles Gore
                          </Link>
                        </li>
                      </ul>

                      <div className="blog-desc">
                        <p>{post?.body?.children?.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default ContentHomeBlogPage
