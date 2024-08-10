import React from 'react';
import {storiesOf} from '@storybook/react';
import styled from 'styled-components';

import Grid from './index';

const RandomColorDiv = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${({theme}) => theme.colors.primary};
`;

storiesOf('Atoms', module)
  .add('Grid', () => (
    <Grid.Container>
      <Grid.Row>
        <Grid.Column span={1}>
          <RandomColorDiv />
        </Grid.Column>
        <Grid.Column span={1}>
          <RandomColorDiv />
        </Grid.Column>
        <Grid.Column span={1}>
          <RandomColorDiv />
        </Grid.Column>
        <Grid.Column span={1}>
          <RandomColorDiv />
        </Grid.Column>
        <Grid.Column span={1}>
          <RandomColorDiv />
        </Grid.Column>
        <Grid.Column span={1}>
          <RandomColorDiv />
        </Grid.Column>
        <Grid.Column span={1}>
          <RandomColorDiv />
        </Grid.Column>
        <Grid.Column span={1}>
          <RandomColorDiv />
        </Grid.Column>
        <Grid.Column span={1}>
          <RandomColorDiv />
        </Grid.Column>
        <Grid.Column span={1}>
          <RandomColorDiv />
        </Grid.Column>
        <Grid.Column span={1}>
          <RandomColorDiv />
        </Grid.Column>
        <Grid.Column span={1}>
          <RandomColorDiv />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column span={2}>
          <RandomColorDiv />
        </Grid.Column>
        <Grid.Column span={2}>
          <RandomColorDiv />
        </Grid.Column>
        <Grid.Column span={2}>
          <RandomColorDiv />
        </Grid.Column>
        <Grid.Column span={2}>
          <RandomColorDiv />
        </Grid.Column>
        <Grid.Column span={2}>
          <RandomColorDiv />
        </Grid.Column>
        <Grid.Column span={2}>
          <RandomColorDiv />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column span={3}>
          <RandomColorDiv />
        </Grid.Column>
        <Grid.Column span={3}>
          <RandomColorDiv />
        </Grid.Column>
        <Grid.Column span={3}>
          <RandomColorDiv />
        </Grid.Column>
        <Grid.Column span={3}>
          <RandomColorDiv />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column span={4}>
          <RandomColorDiv />
        </Grid.Column>
        <Grid.Column span={4}>
          <RandomColorDiv />
        </Grid.Column>
        <Grid.Column span={4}>
          <RandomColorDiv />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column span={6}>
          <RandomColorDiv />
        </Grid.Column>
        <Grid.Column span={6}>
          <RandomColorDiv />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column span={12}>
          <RandomColorDiv />
        </Grid.Column>
      </Grid.Row>
    </Grid.Container>
  ));
