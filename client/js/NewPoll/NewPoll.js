// @flow
import React from 'react';
import { Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar, Alert } from 'react-bootstrap';
import Fa from 'react-fontawesome';
import AnswerInputConnect from './AnswerInputConnect';

export default class NewPoll extends React.Component {
    render() {
        const saveButtonInner = (
            <span>
                <Fa name="save" />
                Save poll
            </span>
        );

        const savingButtonInner = (
            <Fa name="circle-o-notch" spin />
        );

        const warningMsg = (
            <Alert bsStyle="warning">{this.props.poll.errorMsg}</Alert>
        );

        return (
            <Grid>
                <form>            
                    <Row>
                        <Col xs={12} md={8} mdOffset={2}>
                            <FormGroup>
                                <ControlLabel>Your question:</ControlLabel>
                                <FormControl 
                                    type="text"
                                    disabled={this.props.isSaving}
                                    value={this.props.poll.question} 
                                    onChange={e => this.props.questionUpdated(e.target.value)} 
                                />
                            </FormGroup>                        
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={8} mdOffset={2}>
                            {this.props.poll.answers.map((answer, i) => (
                                <AnswerInputConnect 
                                    key={i} 
                                    number={i} 
                                    answer={answer}
                                />
                            ))}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={8} mdOffset={2}>
                            {this.props.poll.errorMsg.length > 0 && warningMsg}
                        </Col>
                    </Row>
                    <Row>    
                        <Col xs={12} md={8} mdOffset={2}>
                            <ButtonToolbar>
                                <Button 
                                    disabled={this.props.isSaving} 
                                    onClick={() => this.props.addNewAnswer()}>
                                    <span>
                                        <Fa name="plus" />
                                        Add New Answer
                                    </span>
                                </Button>          
                                <Button 
                                    onClick={() => this.props.savePoll(this.props.poll)}
                                    disabled={this.props.isSaving}
                                    bsStyle="success"
                                >
                                    { this.props.isSaving ? savingButtonInner : saveButtonInner }
                                </Button>
                            </ButtonToolbar>
                        </Col>
                    </Row>
                </form>
            </Grid>
          
        );
    }
}