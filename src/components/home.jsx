import React from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      identifiers: [
        'web developer', 'rock climber', 'food lover', 'javascript enthusiast'
      ],
      activeIdentifier: 0,
      intervalID: 0
    }
  }

  componentDidMount() {
    let intervalID = setInterval(() => {
      let nextIdentifier = (this.state.activeIdentifier + 1) % this.state.identifiers.length;
      return this.setState({activeIdentifier: nextIdentifier});
    }, 3000);

    this.setState({intervalID: intervalID});
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalID);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <img src="lib/img/1.jpg" alt="picture of ryan" className="avatar" />
          <h1>ryan <em>chua</em></h1>
          <ReactCSSTransitionReplace
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            <p key={this.state.activeIdentifier}>{this.state.identifiers[this.state.activeIdentifier]}</p>
          </ReactCSSTransitionReplace>
          <a href="files/resume.pdf" className="btn">r&#233;sum&#233;</a>
        </div>

        <div className="row">
          <div className="social">
            <a href="https://github.com/StraylightSky" className="social--item">
              <i className="fa fa-github fa-2x" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/PaperCoversRyan" className="social--item">
              <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/prerendered" className="social--item">
              <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
