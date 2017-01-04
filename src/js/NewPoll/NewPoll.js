// @flow
import React from 'react';
import { Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import Fa from 'react-fontawesome';
import AnswerInputConnect from './AnswerInputConnect';

export default class NewPoll extends React.Component {
    render() {
        return (
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
                        <Button disabled={this.props.isSaving} onClick={() => this.props.addNewAnswer()}>Add New Answer</Button>
                    </Col>
                </Row>
                <Row>    
                    <Col xs={12} md={8} mdOffset={2}>            
                        <Button 
                            onClick={() => this.props.savePoll(this.props.poll)}
                            disabled={this.props.isSaving}
                        >
                            {this.props.isSaving ? <Fa name="circle-o-notch" size="2x" spin /> : "Save Poll"}
                        </Button>
                    </Col>
                </Row>
            </form>
          
        );
    }
}