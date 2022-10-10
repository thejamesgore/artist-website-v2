import React, { useEffect, useState } from 'react'

import sanityClient from '../../sanity'

import { Carousel } from 'react-bootstrap'

const HomeBlogPageHeader = () => {
  const [singlePost, setSinglePost] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "oilpainting-i"]{
        _id,
  title,
  slug,
image1{
  asset -> {
  _id,
  url
}
},
image2{
  asset -> {
  _id,
  url
}
},
image3{
  asset -> {
  _id,
  url
}
},
image4{
  asset -> {
  _id,
  url
}
},
image5{
  asset -> {
  _id,
  url
}
},
image6{
  asset -> {
  _id,
  url
}
},
image7{
  asset -> {
  _id,
  url
}
},
image8{
  asset -> {
  _id,
  url
}
},
image9{
  asset -> {
  _id,
  url
}
},
image10{
  asset -> {
  _id,
  url
}
},
image11{
  asset -> {
  _id,
  url
}
},
image12{
  asset -> {
  _id,
  url
}
},
image13{
  asset -> {
  _id,
  url
}
},
image14{
  asset -> {
  _id,
  url
}
},
image15{
  asset -> {
  _id,
  url
}
},
image16{
  asset -> {
  _id,
  url
}
},
image17{
  asset -> {
  _id,
  url
}
},
image18{
  asset -> {
  _id,
  url
}
},
image19{
  asset -> {
  _id,
  url
}
},
image12{
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
      .then((data) => setSinglePost(data[0]))
      .catch(console.error)
  }, [])

  return (
    <div className="blog-home-hero">
      <div className="container">
        <div className="row">
          <div className="blog-home-hero-content text-center col">
            {/*  */}

            <div>
              <Carousel controls={false} indicators={false} interval={5000}>
                {singlePost?.image1 && (
                  <Carousel.Item>
                    <img
                      src={singlePost.image1.asset.url}
                      alt={singlePost.title}
                      style={{ maxHeight: '800px' }}
                    />
                  </Carousel.Item>
                )}

                {singlePost?.image2 && (
                  <Carousel.Item>
                    <img
                      src={singlePost.image2.asset.url}
                      alt={singlePost.title}
                      style={{ maxHeight: '800px' }}
                    />
                  </Carousel.Item>
                )}

                {singlePost?.image3 && (
                  <Carousel.Item>
                    <img
                      src={singlePost.image3.asset.url}
                      alt={singlePost.title}
                      style={{ maxHeight: '800px' }}
                    />
                  </Carousel.Item>
                )}

                {singlePost?.image4 && (
                  <Carousel.Item>
                    <img
                      src={singlePost.image4.asset.url}
                      alt={singlePost.title}
                      style={{ maxHeight: '800px' }}
                    />
                  </Carousel.Item>
                )}

                {singlePost?.image5 && (
                  <Carousel.Item>
                    <img
                      src={singlePost.image5.asset.url}
                      alt={singlePost.title}
                      style={{ maxHeight: '800px' }}
                    />
                  </Carousel.Item>
                )}
                {singlePost?.image6 && (
                  <Carousel.Item>
                    <img
                      src={singlePost.image6.asset.url}
                      alt={singlePost.title}
                      style={{ maxHeight: '800px' }}
                    />
                  </Carousel.Item>
                )}

                {singlePost?.image7 && (
                  <Carousel.Item>
                    <img
                      src={singlePost.image7.asset.url}
                      alt={singlePost.title}
                      style={{ maxHeight: '800px' }}
                    />
                  </Carousel.Item>
                )}

                {singlePost?.image8 && (
                  <Carousel.Item>
                    <img
                      src={singlePost.image8.asset.url}
                      alt={singlePost.title}
                      style={{ maxHeight: '800px' }}
                    />
                  </Carousel.Item>
                )}

                {singlePost?.image9 && (
                  <Carousel.Item>
                    <img
                      src={singlePost.image9.asset.url}
                      alt={singlePost.title}
                      style={{ maxHeight: '800px' }}
                    />
                  </Carousel.Item>
                )}

                {singlePost?.image10 && (
                  <Carousel.Item>
                    <img
                      src={singlePost.image10.asset.url}
                      alt={singlePost.title}
                      style={{ maxHeight: '800px' }}
                    />
                  </Carousel.Item>
                )}
                {singlePost?.image10 && (
                  <Carousel.Item>
                    <img
                      src={singlePost.image10.asset.url}
                      alt={singlePost.title}
                      style={{ maxHeight: '800px' }}
                    />
                  </Carousel.Item>
                )}
                {singlePost?.image11 && (
                  <Carousel.Item>
                    <img
                      src={singlePost.image11.asset.url}
                      alt={singlePost.title}
                      style={{ maxHeight: '800px' }}
                    />
                  </Carousel.Item>
                )}
                {singlePost?.image12 && (
                  <Carousel.Item>
                    <img
                      src={singlePost.image12.asset.url}
                      alt={singlePost.title}
                      style={{ maxHeight: '800px' }}
                    />
                  </Carousel.Item>
                )}
                {singlePost?.image13 && (
                  <Carousel.Item>
                    <img
                      src={singlePost.image13.asset.url}
                      alt={singlePost.title}
                      style={{ maxHeight: '800px' }}
                    />
                  </Carousel.Item>
                )}
                {singlePost?.image14 && (
                  <Carousel.Item>
                    <img
                      src={singlePost.image15.asset.url}
                      alt={singlePost.title}
                      style={{ maxHeight: '800px' }}
                    />
                  </Carousel.Item>
                )}
                {singlePost?.image15 && (
                  <Carousel.Item>
                    <img
                      src={singlePost.image15.asset.url}
                      alt={singlePost.title}
                      style={{ maxHeight: '800px' }}
                    />
                  </Carousel.Item>
                )}
                {singlePost?.image16 && (
                  <Carousel.Item>
                    <img
                      src={singlePost.image16.asset.url}
                      alt={singlePost.title}
                      style={{ maxHeight: '800px' }}
                    />
                  </Carousel.Item>
                )}
                {singlePost?.image17 && (
                  <Carousel.Item>
                    <img
                      src={singlePost.image17.asset.url}
                      alt={singlePost.title}
                      style={{ maxHeight: '800px' }}
                    />
                  </Carousel.Item>
                )}
                {singlePost?.image18 && (
                  <Carousel.Item>
                    <img
                      src={singlePost.image18.asset.url}
                      alt={singlePost.title}
                      style={{ maxHeight: '800px' }}
                    />
                  </Carousel.Item>
                )}
                {singlePost?.image19 && (
                  <Carousel.Item>
                    <img
                      src={singlePost.image19.asset.url}
                      alt={singlePost.title}
                      style={{ maxHeight: '800px' }}
                    />
                  </Carousel.Item>
                )}
                {singlePost?.image20 && (
                  <Carousel.Item>
                    <img
                      src={singlePost.image20.asset.url}
                      alt={singlePost.title}
                      style={{ maxHeight: '800px' }}
                    />
                  </Carousel.Item>
                )}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBlogPageHeader
