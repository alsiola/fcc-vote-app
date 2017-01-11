import React from 'react';
import { ShareButtons } from 'react-share';
import { Button } from 'react-bootstrap';
import Fa from 'react-fontawesome';

const { TwitterShareButton } = ShareButtons;

export default props => (
    <TwitterShareButton url={props.url} title={props.title}>
        <Button bsStyle="primary">
            <Fa name="twitter" size="2x" />
            Share on Twitter
        </Button>
    </TwitterShareButton>
);