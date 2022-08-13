import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import Title from '../common/title';
import Sportcard from './card';

const sport = () => {
  return (
    <>
        <Title title='Sport News'/>

        <Container>
          <Sportcard />
        </Container>

    </>
  )
}

export default sport