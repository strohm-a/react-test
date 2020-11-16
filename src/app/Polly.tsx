import React, { Component } from 'react';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import { Polly, SynthesizeSpeechInput } from '@aws-sdk/client-polly';
import { getSynthesizeSpeechUrl } from '@aws-sdk/polly-request-presigner';

export class PollyService extends Component {
  client: Polly;

  // Set the parameters
  speechParams: SynthesizeSpeechInput = {
    OutputFormat: 'mp3', // For example, 'mp3'
    SampleRate: '16000', // For example, '16000
    Text: '', // The 'speakText' function supplies this value
    TextType: 'text', // For example, "text"
    VoiceId: 'Vicki' // For example, "Matthew"
  };

  constructor(props: any) {
    super(props);

    this.client = new Polly({
      region: 'us-west-2',
      credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({ region: 'us-west-2' }),
        identityPoolId: 'us-west-2:dbc19702-b097-4242-8f29-521c943443d4' // IDENTITY_POOL_ID
      })
    });
  }

  render() {
    console.log('PollyService.render()');

    return (
      <div className={'page'}>
        <h2>Amazon Polly Service</h2>

        <div id="textToSynth">
          <input size={23} type="text" id="textEntry" defaultValue="Hello world!" />
          <button className="btn default" onClick={this.speakText.bind(this)}>
            Synthesize
          </button>
          <p id="result">
            Enter text above then click <b>Synthesize</b>
          </p>
        </div>
        <audio id="audioPlayback" controls>
          <source id="audioSource" type="audio/mp3" src="" />
        </audio>
      </div>
    );
  }

  textElement: HTMLInputElement;
  audioSourceElement: HTMLSourceElement;
  audioPlaybackElement: HTMLAudioElement;
  resultElement: HTMLElement;

  componentDidMount() {
    this.textElement = (document.getElementById('textEntry') as HTMLInputElement);

    this.audioSourceElement = (document.getElementById('audioSource') as HTMLSourceElement);

    this.audioPlaybackElement = (document.getElementById('audioPlayback') as HTMLAudioElement);

    this.resultElement = document.getElementById('result');
  }

  async speakText(): Promise<any> {
    // Update the Text parameter with the text entered by the user
    this.speechParams.Text = this.textElement.value;
    // console.log('text: ' + this.speechParams.Text);

    try {
      let url = await getSynthesizeSpeechUrl({
        client: this.client,
        params: this.speechParams
      });

      // console.log(url);
      
      // Load the URL of the voice recording into the browser
      this.audioSourceElement.src = url as string;
      this.audioPlaybackElement.load();
      this.resultElement.innerHTML = 'Speech ready to play.';
    } catch (err) {
      console.log('Error', err);
      this.resultElement.innerHTML = err;
    }
  }
}
