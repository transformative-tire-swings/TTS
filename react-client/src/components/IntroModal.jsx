import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

export default class IntroModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        defaultOpen
        closeOnDocumentClick={true}
        basic
        size='small'
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
