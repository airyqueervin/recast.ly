class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: exampleVideoData,
      current: exampleVideoData[0]
    };
    this.changeVideo = this.changeVideo.bind(this);
  }

  changeVideo(index) {
    this.setState({current: exampleVideoData[index]});
  }

  render() {
    return (
      <div>
        <Nav />
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
