import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app/App';
import { PollyService } from '../app/Polly';
import { getByText } from '@testing-library/react';

describe('Main test entry point', () => {
  test('Test App component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);

    let element: HTMLElement = (div.querySelector("div.app") as HTMLElement);
    expect(element).not.toBeNull();

    ReactDOM.unmountComponentAtNode(div);
  });

  test('Test Polly component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PollyService />, div);

    let testElement: HTMLElement = getByText(div, /Amazon Polly Service/i);
    expect(testElement).not.toBeNull();

    ReactDOM.unmountComponentAtNode(div);
  });

});
