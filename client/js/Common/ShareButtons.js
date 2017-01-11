import React from 'react';
import { ShareButtons } from 'react-share';
import { Button } from 'react-bootstrap';
import Fa from 'react-fontawesome';

const { FacebookShareButton } = ShareButtons;

export default props => (
    <FacebookShareButton url={props.url} title={props.title}>
        <Button bsStyle="primary">
            <Fa name="facebook" size="2x" />
            Share on Facebook
        </Button>
    </FacebookShareButton>
);