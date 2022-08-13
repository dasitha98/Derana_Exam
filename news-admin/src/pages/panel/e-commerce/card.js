import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';


export default function Dynamic() {

    const [items, setItems] = useState([]);

    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('accessToken'));
      if (items) {
       setItems(items.result.role);
      }
    }, []);
    
    return (
        <Container>
            <Row>
                    <Col xs={12} md={4} lg={12}>

                        {items == "Admin" ?
                                                <><Link to='/ecommerce/categories'>
                                                    <Card className='mb-4 ml-0' style={{ "border-radius": "1em" }}>
                                                        <div class="row p-2 mx-auto">
                                                            <div class="col-lg-12">
                                                                <h3 style={{ "color": "red" }} className='py-4 my-auto'>ADD CATEGORY</h3>
                                                            </div>
                                                        </div>
                                                    </Card>
                                                </Link><Link to='/ecommerce/editorList'>
                                                        <Card className='mb-4 ml-0' style={{ "border-radius": "1em" }}>
                                                            <div class="row p-2 mx-auto">
                                                                <div class="col-lg-12">
                                                                    <h3 style={{ "color": "red" }} className='py-4 my-auto'>ADD USERS</h3>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Link></>
                        :
                        <>
                                                    <h5 style={{ "color": "red" }} className='py-4 my-auto'>Editors cannot access</h5>
                                                    <Card className='mb-4 ml-0' style={{ "border-radius": "1em" }}>
                                                        <div class="row p-2 mx-auto">
                                                            <div class="col-lg-12">
                                                                <h3 style={{ "color": "red" }} className='py-4 my-auto'>ADD CATEGORY</h3>
                                                            </div>
                                                        </div>
                                                    </Card>
                                                        <Card className='mb-4 ml-0' style={{ "border-radius": "1em" }}>
                                                            <div class="row p-2 mx-auto">
                                                                <div class="col-lg-12">
                                                                    <h3 style={{ "color": "red" }} className='py-4 my-auto'>ADD USERS</h3>
                                                                </div>
                                                            </div>
                                                    </Card>
                        </>
                        }
                </Col>
            </Row>
        </Container>
    )
}