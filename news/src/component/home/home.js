import React from 'react'
import Title from '../common/title.js'
import Section1 from './section1/section1.js'
import { Container, Row, Col } from 'react-grid-system';
import Video from './section2/video.js';
import Sport from './section3/sport.js';
import Tech from './section3/tech.js';
import Gallery from './section3/gallery.js';

const Home = () => {
  return (
    <>
        <Title title='Top Stories'/>
        <Section1 />
        <Title title='Youtube'/>
        <Video />

        <div className='container'>
          <Row>
                <Col lg={4} xs={12} md={7}>
                  <Title title='Sport'/>
                  <Sport />
                </Col>

                <Col lg={4} xs={12} md={7}>
                  <Title title='Tech'/>
                  <Tech />
                </Col>

                <Col lg={4} xs={12} md={7}>
                  <Title title='Gallery'/>
                  <Gallery />
                </Col>
          </Row>
        </div>

    </>
  )
}

export default Home







// const Home = () => {
//   return (
//     <>
//         <Section1 />
//         <Title title='Youtube'/>
//         <Video />

//         <div className='container'>
//           <Row>
//                 <Col lg={4} xs={12} md={7}>
//                   <Title title='Sport'/>
//                   <Sport />
//                 </Col>

//                 <Col lg={4} xs={12} md={7}>
//                   <Title title='Tech'/>
//                   <Tech />
//                 </Col>

//                 <Col lg={4} xs={12} md={7}>
//                   <Title title='Gallery'/>
//                   <Gallery />
//                 </Col>
//           </Row>
//         </div>
//     </>
//   )
// }

// export default Home