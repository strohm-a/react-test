import React, { Component } from 'react';
import { Converter } from 'showdown';

export class Home extends Component {
  render() {
    console.log('Home.render()');

    let mkdown: string = '### hello, markdown!';
    let converter: Converter = new Converter();
    let markdownHtml: string = converter.makeHtml(mkdown);
    console.log('HTML: ' + markdownHtml);

    markdownHtml += `<div>Hi Strohm</div>`;

    return (
      <div className={'page'}>
        <h2>Home</h2>

        <div className={'markdown'} dangerouslySetInnerHTML={{ __html: markdownHtml }} />
      </div>
    );
  }
}
