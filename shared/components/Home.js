import React from 'react';
import fetch from 'isomorphic-fetch';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resHello: 'Loading...',
      resQuote: 'Loading...'
    };
  }
  componentDidMount() {
    // Get hello message
    this.callApi('http://localhost:3000/api/hello')
      .then(res => this.setState({ resHello: res.express }))
      .catch(err => console.log(err));

    // Get random quote
    const rand = Math.random();
    this.callApi(`http://localhost:3000/api/quote/${rand}`)
      .then(res => this.setState({ resQuote: res.express }))
      .catch(err => console.log(err));
  }
  async callApi(endpoint) {
    const response = await fetch(endpoint);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  render() {
    console.log('rendering: Home');
    return (
      <div className="container">
        <h1>Home page</h1>
        <h6>
          {`Message from the server: ${this.state.resHello}`}
        </h6>
        <h5>Random Quote</h5>
        <blockquote>
          {this.state.resQuote}
        </blockquote>
      </div>
    );
  }
}

export default Home;
