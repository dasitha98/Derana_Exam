import React, { useContext, useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { WhatsappShareButton, InstapaperShareButton, FacebookShareButton } from "react-share";
import { SocialIcon } from 'react-social-icons';
import { useDispatch, useSelector } from "react-redux";
import { Gettechnews } from "../../../actions/news";

const Tech = () => {
  
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
      dispatch(Gettechnews());
  },[]);

  const listDetails = useSelector((state) => state?.technews);


  return (
        <>
                <Row>
                        <Col xs={12} md={4} lg={12}>
                          {listDetails.map((item) => (
                            <div key={item.id} class="card mb-3" style={{"width":"385px"}}>
                              <img src={item.img} class="card-img-top" style={{"width":"385px","height":"200px"}} />
                              <div class="card-body">
                                <p style={{"color":"black"}} class="card-text">{item.title}</p>
                              </div>
                              <div className="">
                                <a href="#" style={{"color":"#2B9E0E", "background-color":"white"}} class="btn w-10">Read more</a>
                              </div>
                              <div class="card-footer">
                              <div className="d-flex justify-content-between">
                                <small class="text-muted">Last updated 5 mins ago</small>
                                <div className="d-flex justify-content-end">
                                  <WhatsappShareButton url={item.img}>
                                    <SocialIcon style={{ height: 30, width: 30 }} url="https://whatsapp.com/jaketrent" />
                                  </WhatsappShareButton>
                                  <FacebookShareButton url={item.img}>
                                    <SocialIcon className="mx-2" style={{ height: 30, width: 30 }} url="https://facebook.com/jaketrent" />
                                  </FacebookShareButton>
                                  <InstapaperShareButton url={item.img}>
                                    <SocialIcon style={{ height: 30, width: 30 }} url="https://instagram.com/jaketrent" />
                                  </InstapaperShareButton>
                                </div>
                              </div>
                            </div>
                            </div>
                          ))}
                        </Col>
                </Row>
        </>
  )
  }

export default Tech