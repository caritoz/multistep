import React from 'react';
import { Message, List, Icon } from 'semantic-ui-react';
export default () => (
  <Message warning>
    <Message.Header>Password Requirements</Message.Header>
    <List>
      <List.Item>
        <Icon name="check" />
        <List.Content>
          <List.Description color={'red'}>
            Password must contain at least 9 characters
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <Icon name="check" />
        <List.Content>
          <List.Description color={'red'}>
            Password must contain at least 1 number character
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <Icon name="check" />
        <List.Content>
          <List.Description color={'red'}>
            Password must contain at least 1 uppercase character
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <Icon name="check" />
        <List.Content>
          <List.Description color={'red'}>
            Password must contain at least 1 lowercase character
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
  </Message>
);
