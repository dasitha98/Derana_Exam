import React from 'react'
import deranaimage from '../../images/ada derana 1.png'
import { SocialIcon } from 'react-social-icons';
import { Container, Row, Col } from 'react-grid-system';
import { MDBCol, MDBFormInline, MDBIcon ,MDBBtn} from "mdbreact";

const Head = () => {
  return (
    <>
            <div className='container head'>
                <Row>
                    <Col lg={5} xs={12} md={7}>
                        <img style={{ height: 80, width: 300 }} src={deranaimage} alt='' />
                    </Col>
                    <Col lg={4} xs={0} md={0} className="my-auto">
                        <input style={{"border-color":"red"}} className="form-control" type="text" placeholder="Search" aria-label="Search" />
                    </Col>
                    <Col lg={3} xs={12} md={4} className="my-auto">
                        <Row className='mb-2'>
                            <Col xs={5} lg={8} md={9}>
                                <div className='d-flex justify-content-between'>
                                    <SocialIcon style={{ height: 30, width: 30 }} url="https://facebook.com/jaketrent" />
                                    <SocialIcon style={{ height: 30, width: 30 }} url="https://youtube.com/jaketrent" />
                                    <SocialIcon style={{ height: 30, width: 30 }} url="https://whatsapp.com/jaketrent" />
                                    <SocialIcon style={{ height: 30, width: 30 }} url="https://twitter.com/jaketrent" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={8} lg={12} md={12}>
                                <h6 style={{"color":"red"}}>ENGLISH | SINHALA | TAMIL</h6>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
    </>
  )
}

export default Head

