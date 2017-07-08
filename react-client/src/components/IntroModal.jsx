import React from 'react';
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
        <Image width='100%' src='https://zortrax.com/wp-content/uploads/2016/06/wave.gif' />
        <Modal.Header style={{textAlign: 'center', marginTop: '-300px'}}>Hello Marcus, what can you do?</Modal.Header>
        <Modal.Content style={{margin: '0 auto', width: '30%'}}>
          <Modal.Description>
            <div>
              <h3>Directions</h3>
              <h3>Weather</h3>
              <h3>Food Recommendations</h3>
              <h3>GOATS</h3>
            </div>
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
