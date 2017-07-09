import React from 'react';
import Tabs from './Tabs.jsx';
import { Button, Header, Icon, Modal, Image } from 'semantic-ui-react';

export default class IntroModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: true
    };
  }

  handleClose() {
    this.setState({
      modalOpen: false,
    });
  }
  render() {
    return (
      <Modal
        // defaultOpen
        open={this.state.modalOpen}
        basic
        size='fullscreen'
        onClose={this.handleClose}
      >
        <Modal.Header style={{textAlign: 'center', marginTop: '-100px', fontSize: '36px'}}>Hello Marcus, what can you do?</Modal.Header>
        <Modal.Content style={{margin: '0 auto', width: '70%'}}>
          <Modal.Description>
            <Tabs />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose.bind(this)} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
