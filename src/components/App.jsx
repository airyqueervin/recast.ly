class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      current: exampleVideoData[0],
      query: ''
    };
    this.changeVideo = this.changeVideo.bind(this);
    this.currentQuery = this.currentQuery.bind(this);
  }

  changeVideo(index) {
    this.setState({current: this.state.videos[index]});
  }

  currentQuery(value) {
    this.setState({query: value});
  }

  componentDidMount() {
    this.searchTheTubes({ key: window.YOUTUBE_API_KEY, query: this.state.query, max: 5});
  }

  searchTheTubes(options) {
    this.props.searchYouTube( options, function(result) {
      this.setState({videos: result, current: result[0]});
    }.bind(this));
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
