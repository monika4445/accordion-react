import React, { Component } from 'react';
import Accordion from './Accordion';
import './Accordion.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('https://countriesnow.space/api/v0.1/countries/capital')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(data => {
        this.setState({ countries: data.data, isLoading: false });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { countries, isLoading, error } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Countries and Capitals</h1>
        <Accordion items={countries} />
      </div>
    );
  }
}

export default App;


