import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Thumbnail from '../../components/thumbnail'
import Content from '../../components/content'
import aboutData from '../../data/about-me'
import sanityClient from '../../sanity'

const AboutMe = ({ type }) => {
  const [authorBio, setAuthorBio] = useState(null)
  const [authorImg, setAuthorImg] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "author"]{
      bio[0],
      
    }
    `
      )
      .then((data) => setAuthorBio(data[0].bio.children[0].text))
      .catch(console.error)

    sanityClient
      .fetch(
        `
        *[_type == "author"]{
      bio[0],
      
      image{
        asset -> {
          url
        }
      }
    }`
      )
      .then((data) => setAuthorImg(data[0].image.asset.url))
  }, [])

  console.log(`author data is`, authorImg)

  return (
    <div className={type !== 'page' ? 'section-padding section' : null}>
      <Container>
        <Row style={{ margin: '10px 10px' }}>
          <Col lg={6}>
            <Thumbnail
              classes={'about-thumbnail mb-md-30 mb-sm-30 mb-xs-30'}
              thumb={authorImg}
              style={{}}
            />
          </Col>

          <Col lg={6}>
            <Content classes={'about-content'}>
              {type !== 'page' ? (
                <h3 className="block-title">ABOUT ME</h3>
              ) : null}
              <p>{authorBio}</p>
            </Content>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutMe
