import React from 'react';
import {Row, Col, Card} from "react-bootstrap";

export const OwnerView = () => {

    return (
        <>
        <div>
            <Row>
                <Col md={9}>
                    <div>
                        <Card>
                        <h1>pet col</h1>
                        </Card>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <div>
                        <h1>owner col</h1>
                    </div>
                </Col>
            </Row>
        </div>
        </>
    )
};

