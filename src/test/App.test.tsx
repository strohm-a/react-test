import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app/App';
import { getByText } from '@testing-library/react';

describe('Main test entry point', () => {
  test('Test App component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);

    let element: HTMLElement = (div.querySelector("div.app") as HTMLElement);
    expect(element).not.toBeNull();

    ReactDOM.unmountComponentAtNode(div);
  });

});
