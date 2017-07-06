import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Utils from './utils.js';
import client_env from './client_env.js';
import houndifyclient from './houndify-client.js';
import frequencyBars from './frequency-bars.js';
import ResponseCard from './components/ResponseCard.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      response: {type: "text", api: "default", text: "This is your moment. Ask a question.", data: Object},
      location: {},
      micOn: false,
      textQuery: 'directions'
    };

    const clientID = client_env.client_env.houndify_clientID;

    this.requestInfo = {
      ClientID: clientID,
      UserID: "test_user"
    };
  }

  componentDidMount() {
    Utils.location().
    then((data) => {
      this.setState({
        location: {
          lat: data.coords.latitude,
          lon: data.coords.longitude
        }
      })
      
      // REMOVE WHEN READY!
        // runs text query when component added to page!
        // makes testing easy!
      var test = _ => {
        this.textQuery();
      }

      test();
      // REMOVE WHEN READY
    })
  }

  // trigger response state to change when getting back reply from Fred
  handleServerResponse(error, response) {
    if (error) {
      console.log('handleServerResponse error: ', error);
    } else {
      console.log('handleServerResponse: ', response);
      this.setState({
        response: response
      })
      console.log("after changing state: ", this.state.response);
      this.responseTextToSpeech(response.text);
    }
  }

  // convert text to speech using chrome built in function
  responseTextToSpeech(text) {
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.text = text;
    msg.rate = 12 / 10;
    msg.pitch = 0;
    speechSynthesis.speak(msg);
  }

  setMicState() {
    this.setState({
      micOn: false
    });
  }

  setLoadingState() {
    this.setState({
      response: {type: "text", api: "loading", text: "Hang on a moment...", data: Object},
    });
  }

  //handle voice button click
  startStopVoiceSearch() {
    let myClient = new Houndify.HoundifyClient(houndifyclient.houndifyClient(this.state.location, this.handleServerResponse.bind(this), this.setMicState.bind(this), this.setLoadingState.bind(this)));
    if (myClient.voiceSearch.isStreaming()) {
      console.log('window object stop', window);
      //stops streaming voice search requests, expects the final response from backend
      myClient.voiceSearch.stop();
    } else {
      // console.log('inside index.jsx',this);
      frequencyBars.bars.call(this, this);

      this.setState({
        micOn: true
      });

      myClient.voiceSearch.startRecording(this.requestInfo);

      //display frequency bars
      ///audio frequency stop
      //starts streaming of voice search requests to Houndify backend
      document.getElementById("voiceIcon").className = "loading circle notched icon big";
      // document.getElementById("textSearchButton").disabled = true;
      // document.getElementById("query").readOnly = true;
    }
  }

  inputChange(event) {
    this.setState({
      textQuery: event.target.value
    });
  }

  //for testing only: handle user text input
  textQuery() {
    let query = this.state.textQuery;
    $.ajax({
      url: '/voice',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        RawTranscription: query,
        WrittenResponseLong: query,
        location: this.state.location}),
      success: (data) => {
        console.log('text query response from server: ', data.data);
        this.setState({
          response: data
        });
        this.responseTextToSpeech(data.text);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }


  render () {
    const border = {border: 0, outline: 'none'};
    const textStyle ={ marginTop: '10px', fontSize: '20px', borderStyle: 'none', boxShadow:'none', wordWrap: 'normal', wordBreak: 'break-all', whiteSpace: 'normal' };
    const visualizerStyle = {width: '100%'};

    return (
      <div className="wrapper">
        <div className="ui centered grid">
          <ResponseCard response={this.state.response} />
        </div>
        <div className="ui centered grid">
          <form id="form" className="ui form" action="javascript:void(0);">
            <div className="ui action big labeled fluid input field">
              <div className="ui icon basic label button" onClick= {this.startStopVoiceSearch.bind(this)} style={border}>
                <i id="voiceIcon" className="unmute huge icon"></i>
              </div>
            </div>
          </form>
        </div>
        <div className="ui center aligned segment" style={textStyle}>
          <input onKeyPress={e => { if (e.key === 'Enter') {this.textQuery();} }} type="text" value={this.state.textQuery} onChange={this.inputChange.bind(this)}/>
          <button onClick={this.textQuery.bind(this)}>Submit Text Query</button>
        </div>
        <canvas className="visualizer" style={visualizerStyle}></canvas>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


