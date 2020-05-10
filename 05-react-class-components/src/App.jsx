import React from 'react';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: null,
    }
  }

  componentDidMount() {
    const url = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';
    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({contacts: result}))
      .catch(err => {
        console.error('Failed retrieving information', err); 
      })
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters />
        <Contacts data={this.state.contacts}/>
      </React.Fragment>
    )
  }
}

export default App;
