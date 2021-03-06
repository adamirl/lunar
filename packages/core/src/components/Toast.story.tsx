import React from 'react';
import { storiesOf } from '@storybook/react';
import Toast from './Toast';

const TRANSITION_ANIMATION = 300;

storiesOf('Core/Toast', module)
  .addParameters({
    happo: { delay: 250 + TRANSITION_ANIMATION },
    inspectComponents: [Toast],
  })
  .add('A standard toast.', () => (
    <Toast id="foo" message="This is a message within a toast." duration={0} />
  ))
  .add(
    'An error toast that has a delay before displaying.',
    () => (
      <Toast
        id="bar"
        message="This is a message within a toast."
        duration={0}
        delay={1000}
        danger
      />
    ),
    {
      happo: { delay: 1000 + TRANSITION_ANIMATION },
    },
  )
  .add('A success toast with a title.', () => (
    <Toast
      id="baz"
      message="This is a message within a toast."
      title="Success!"
      duration={0}
      success
    />
  ))
  .add('A refresh toast denoting a new version.', () => (
    <Toast id="qux" message="This is a message within a toast." duration={0} refresh />
  ));
