import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import QuickContact from '../../components/QuickContact'

const Contact = () => {
  return (
    <div className="bg-grey section ">
      <div className="section-wrap flex section pt-120 pt-lg-80 pt-md-80 pt-sm-80 pt-xs-50 pb-120 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50">
        <Container>
          <Row style={{}}>
            <Col lg={46} className={'mb-sm-45 mb-xs-45'}>
              <Row>
                <Col lg={10} style={{ height: '520px' }}>
                  <QuickContact
                    phone={'your number'}
                    email={'your contact email'}
                    location={'Soas or PO box'}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Contact
