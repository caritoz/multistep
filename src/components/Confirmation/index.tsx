import React, { useContext } from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';
import { FormContext } from '../../context';

export default () => {
  const { values } = useContext(FormContext);
  console.log(JSON.stringify(values));
  return (
    <Segment attached placeholder>
      <Header color="green" icon>
        <Icon color="green" name="check" />
        Please verify your email address, you should have receives and email
        from us already!
      </Header>
    </Segment>
  );
};
