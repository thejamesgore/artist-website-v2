import React from 'react'
import PortfolioDetailsContent from './content'
import { Container, Row } from 'react-bootstrap'
import PageContainer from '../../../container/CustomPage'

const TemplatePortfolioDetails = () => {
  return (
    <PageContainer classes={'bg-grey'}>
      <Container>
        <Row style={{ display: 'flex', justifyContent: 'space-around' }}>
          <PortfolioDetailsContent />
        </Row>
      </Container>
    </PageContainer>
  )
}

export default TemplatePortfolioDetails
