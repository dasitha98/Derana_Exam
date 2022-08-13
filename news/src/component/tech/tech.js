import React from 'react'
import { Container, Row, Col} from 'react-grid-system';
import Title from '../common/title';
import Techcard from './card';

const tech = () => {
  return (
    <>
        <Title title='Tech News'/>
        
        <Container>
          <Techcard />
        </Container>

    </>
  )
}

export default tech