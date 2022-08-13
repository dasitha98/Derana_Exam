import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player';

const Video = () => {
  return (
    <div className='section2'>
        <div className='container'>
                <Row>
                    <Col lg={4} xs={12} md={7} >
                    <ReactPlayer width='440px' height='300px' controls url='https://www.youtube.com/watch?v=Gs0ERLKQD8E' />
                    </Col>

                    <Col lg={4} xs={12} md={7}>
                        <ReactPlayer width='440px' height='300px' controls url='https://www.youtube.com/watch?v=5acA_7FnqRE' />
                    </Col>

                    <Col lg={4} xs={12} md={7} >
                    <ReactPlayer width='410px' height='300px' controls url='https://www.youtube.com/watch?v=duEkhnvEvu0' />
                    </Col>
                </Row>
        </div>
    </div>
  )
}

export default Video