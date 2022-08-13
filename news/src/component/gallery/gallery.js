import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import Title from '../common/title';
import Gallerycard from './card';

const gallery = () => {
  return (
    <>
        <Title title='Gallery News'/>

        <Container>
          <Gallerycard/>
        </Container>
    </>
  )
}

export default gallery