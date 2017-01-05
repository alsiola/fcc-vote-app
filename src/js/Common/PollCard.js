import React from 'react';
import connect from '../Redux/connect';
import { deletePoll, showDeletePollConfirm, cancelDelete } from '../Redux/ActionCreators/PollActions';
import { LinkContainer } from 'react-router-bootstrap';
import { ButtonToolbar, Button, Panel } from 'react-bootstrap';
import Fa from 'react-fontawesome';

class PollCard extends React.Component {
    constructor() {
        super();
        this.state = {
            confirmDelete: false
        }
    }

    toggleDeleteConfirm(show) {
        this.setState({
            confirmDelete: show
        })
    }

    render() {
        const deleteButton = (
            <Button bsStyle="danger" onClick={() => this.toggleDeleteConfirm(true)}>
                <Fa name="trash-o" />
                Delete poll
            </Button>
        );

        const deleteCancel = (
            <Button bsStyle="info" onClick={() => this.toggleDeleteConfirm(false)}>
                Not Really
            </Button>
        );
        const deleteConfirm = (
            <Button bsStyle="danger" onClick={() => this.props.deletePoll(this.props.poll._id)}>
                Seriously Delete!
            </Button>
        );

        return (
            <Panel>
                <h3>{this.props.poll.question}</h3>
                <h5>{this.props.poll.answers.length} options to choose from!</h5>
                <ButtonToolbar>
                    <LinkContainer to={"/polls/view/" + this.props.poll._id}>
                        <Button bsStyle="primary">
                            View Results
                        </Button>
                    </LinkContainer>
                    {this.props.showDelete && !this.state.confirmDelete && deleteButton}                      
                    {this.props.showDelete && this.state.confirmDelete && deleteCancel}                  
                    {this.props.showDelete && this.state.confirmDelete && deleteConfirm}
                </ButtonToolbar>
            </Panel>
        );   
    }
     
};

export default connect(
    null,
    {
        deletePoll
    }
)(PollCard);
    