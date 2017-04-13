class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: exampleVideoData,
      current: exampleVideoData[0],
      query: ''
    };
    this.changeVideo = this.changeVideo.bind(this);
    this.currentQuery = this.currentQuery.bind(this);
  }

  changeVideo(index) {
    this.setState({current: exampleVideoData[index]});
  }

  setData() {
    this.setData(/*get stuff from youtube*/);
  }

  // we need a currentQuery function that changes state of query 
  currentQuery(value) {
    console.log('bing', value);
    this.setState({query: value});
    console.log('bang', this.state);
  }


  render() {
    return (
      <div>
        <Nav currentQuery={this.currentQuery} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.current}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} changeVideo={this.changeVideo}/>
        </div>
      </div>
    );
  } 
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
