import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Pages from './containers';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Pages />
    </Provider>,
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
