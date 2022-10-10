import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Thumbnail from '../../components/thumbnail'
import Content from '../../components/content'
import aboutData from '../../data/about-me'
import sanityClient from '../../sanity'

const AboutMe = ({ type }) => {
  const [author, setAuthor] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "author"]{
      bio,
      image{
        asset -> {
          _id,
          url
        }
      }
    }
    `
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error)
  }, [])

  console.log(`author data is`, author)

  return (
    <div className={type !== 'page' ? 'section-padding section' : null}>
      <Container>
        <Row style={{ margin: '10px 10px' }}>
          <Col lg={6}>
            <Thumbnail
              classes={'about-thumbnail mb-md-30 mb-sm-30 mb-xs-30'}
              thumb={`about/${aboutData.thumb}`}
            />
          </Col>

          <Col lg={6}>
            <Content classes={'about-content'}>
              {type !== 'page' ? (
                <h3 className="block-title">ABOUT ME</h3>
              ) : null}
              <p>{aboutData.bio}</p>
            </Content>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutMe
