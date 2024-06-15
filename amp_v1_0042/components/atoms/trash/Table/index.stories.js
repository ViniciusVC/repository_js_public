import React from 'react';
import {storiesOf} from '@storybook/react';


import {Table} from './index';
// import tests from './index.test';

import Link from '../Link';
import Icon from '../Icon';

storiesOf('Atoms/Table', module)
  .add('simple', () => (
    <Table width="600px">
      <Table.Head>
        <Table.Row>
          {['Name', 'Phone', 'Address', 'Document'].map(title => <Table.Title fontFamily="SimplonHeadline">{title}</Table.Title>)}
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          {['Andrea', '5521999999999', 'Rua Caixa Prego, 0', <Link><Icon type="invoice" size={24} fillColor="primary" /></Link>].map(content => <Table.Cell>{content}</Table.Cell>)}
        </Table.Row>
        <Table.Row>
          {['Angellus', '5521938947837', 'Avenida Luis Machado, 0', <Link><Icon type="invoice" size={24} fillColor="primary" /></Link>].map(content => <Table.Cell>{content}</Table.Cell>)}
        </Table.Row>
      </Table.Body>
      <Table.Foot>
        <Table.Row>
          <Table.Cell colSpan={4} style={{textAlign: 'center'}}>Table Footer Content</Table.Cell>
        </Table.Row>
      </Table.Foot>
    </Table>
  ));
