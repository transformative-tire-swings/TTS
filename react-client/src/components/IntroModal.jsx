import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

export default class IntroModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: true
    };
  }
  handleOpen() {
    this.setState({
      modalOpen: true,
    });
  }
  handleClose() {
    this.setState({
      modalOpen: false,
    });
  }

  render() {
    return (
      <Modal
        defaultOpen
        closeOnDocumentClick={true}
        basic
        size='large'
      >
        <Header icon='wheelchair' content='What can you do?' />
        <Modal.Content>
          <h3>Directions</h3>
          <h3>Weather</h3>
          <h3>Food</h3>
          <h3>GOATS</h3>
        </Modal.Content>
        <Modal.Actions>

        </Modal.Actions>
      </Modal>
    );
  }
}
