import React from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import Fa from 'react-fontawesome';
import { LinkContainer } from 'react-router-bootstrap';

export default props => {
    return (
        <Grid>
            <Row>
                <Col>
                    <h2>Login or register to create and save polls!</h2> 
                    <Button bsStyle="primary" href="/auth/github">
                        <Fa name="github" size="2x" />
                        Connect to Github
                    </Button>
                </Col>
            </Row>
        </Grid>
    );
}