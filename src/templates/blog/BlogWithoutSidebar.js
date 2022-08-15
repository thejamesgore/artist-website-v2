import React, { useState, useEffect } from 'react'
import blogData from '../../data/blog'
import Loading from '../../components/loading'
import LoadMore from '../../components/loadmore'
import { Container, Row, Col } from 'react-bootstrap'
import PageContainer from '../../container/CustomPage'
import sanityClient from '../../sanity'
import { Link } from 'react-router-dom'

const TemplateBlogWithoutSidebar = ({ blogColumnClass }) => {
  const [postsPerPage, setPostsPerPage] = useState(6)
  const [loading, setLoading] = useState(false)

  const [postData, setPostData] = useState(null)

  const loadMore = () => {
    setLoading(true)
    setTimeout(() => {
      setPostsPerPage(postsPerPage + 3)
      setLoading(false)
    }, 200)
  }

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

  const totalPosts = postsPerPage >= blogData.length

  return (
    <PageContainer classes={'bg-grey'}>
      <Container>
        <Row className="blog-content-wrap">
          {postData &&
            postData.reverse().map((post, index) => (
              <Col key={index} className={blogColumnClass}>
                <div
                  key={index}
                  className="blog-item"
                  style={{ margin: '10px 10px' }}
                >
                  <div className="blog-image">
                    <Link
                      to={`/blog/${process.env.PUBLIC_URL + post.slug.current}`}
                    >
                      <img
                        style={{ maxHeight: '230px', maxWidth: '370px' }}
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
              </Col>
            ))}
        </Row>

        <Row>
          <LoadMore loadBlog={loadMore} totalPosts={totalPosts} />
        </Row>
      </Container>

      {loading ? <Loading /> : null}
    </PageContainer>
  )
}

export default TemplateBlogWithoutSidebar
