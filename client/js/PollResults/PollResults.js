import React from 'react';
import {Bar as BarChart} from 'react-chartjs';
import {Grid, Row, Col} from 'react-bootstrap';

export default class YourPolls extends React.Component {
    componentDidMount() {
      this.props.loadPollById(this.props.params.pollId);
    }
    
    render() {
      let data = {};

      if (this.props.poll) {
        const labels = this.props.poll.answers.map(answer => answer.answer);
        const datapoints = this.props.poll.answers.map(answer => answer.votes.length);

        data = {
          labels,
          datasets: [{
            label: "# of votes",
            data: datapoints
          }]
        }
      }
        
      console.log(data);

        return (
          <Grid>
            <Row>
              <Col xs={12} md={8} mdOffset={2}>
                {this.props.poll &&
                  <div>
                    <h2>{this.props.poll.question}</h2>
                    <BarChart data={data} width="600" height="250" />
                  </div>
                }
              </Col>
            </Row>
          </Grid>
        );
    }
}