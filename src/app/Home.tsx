import React, { Component } from 'react';
import { Converter } from 'showdown';

export class Home extends Component {
  render() {
    console.log('Home.render()');

    let mkdown: string = '### hello, markdown!';
    let converter: Converter = new Converter();
    let html: string = converter.makeHtml(mkdown);
    console.log('HTML: ' + html);

    return (
      <div className={'page'}>
        <h2>Home</h2>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  }
}
