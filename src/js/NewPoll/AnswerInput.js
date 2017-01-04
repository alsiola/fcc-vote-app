import React from 'react';
import {FormGroup, ControlLabel, FormControl, Row, Col, Button} from 'react-bootstrap';
import Fa from 'react-fontawesome';

export default class AnswerInput extends React.Component {
    render() {
        return (
            <Row>
                <FormGroup>       
                    <Col xs={2}>       
                        <ControlLabel>Answer {this.props.number + 1}:</ControlLabel>
                    </Col>
                    <Col xs={8}>               
                        <FormControl 
                            disabled={this.props.isSaving} 
                            type="text" 
                            value={this.props.answer.answer} 
                            onChange={e => this.props.editAnswer(this.props.number, e.target.value)} 
                        />
                    </Col>
                    <Col xs={2}>
                        <Button 
                            disabled={this.props.isSaving} 
                            onClick={() => this.props.removeAnswer()}
                            bsStyle="warning"
                        >
                            <span>
                                <Fa name="minus" />
                                Remove
                            </span>
                        </Button>
                    </Col>
                </FormGroup>
            </Row>
        );
    }
}