import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Container } from "react-bootstrap";
import { Getcategory } from '../../../../actions/category';
import { useDispatch, useSelector } from "react-redux";

import User1 from "../../../../images/avatar/i-1.svg";
import User2 from "../../../../images/avatar/i-2.svg";
import User3 from "../../../../images/avatar/i-3.svg";
import User4 from "../../../../images/avatar/i-4.svg";
import User5 from "../../../../images/avatar/i-5.svg";



export default function Dynamic() {

    const dispatch = useDispatch();
    // const navigate = useNavigate();

    useEffect(() => {
        dispatch(Getcategory());
    },[]);

    const listDetails = useSelector((state) => state?.category);


    return (
        <Container>
            <Row>
                {listDetails.map((item) => (
                    <Col key={item.id} xs={12} md={4} lg={4}>
                        <Card className='mb-4 ml-0' style={{"border-radius": "1em"}}>

                            <div class="row p-2 mx-auto">
                                <div class="col-lg-12">
                                    <h3 style={{"color":"red"}} className='py-4 my-auto'>{item.categoryName}</h3>
                                </div>
                            </div>
                            
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}