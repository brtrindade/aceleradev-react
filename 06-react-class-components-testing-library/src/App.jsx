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
      filteredContacts: null
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

  handleFilterByName = (name) => {
    console.log('handleFilterByName', name)
    let filtered = this.state.contacts.filter(contact => {
      let filter = new RegExp(`${name}\\w`, 'i')
      return contact.name.match(filter)
    })
    this.setState({filteredContacts: filtered})
  }

  handleOrderByAtt = (att) => {
    let filteredContacts = this.state.contacts.sort((a, b) => (
      a[att] < b[att] ? -1 : a[att] > b[att] ? 1 : 0
    ))
    this.setState({ filteredContacts })
  }

  render() {
    return (
      <div data-testid="app" className="app">
        <Topbar />
        <Filters 
          handleOrderByAtt={this.handleOrderByAtt}
          handleFilterByName={this.handleFilterByName}
        />
        <Contacts data={this.state.filteredContacts || this.state.contacts}/>
      </div>
    )
  }
}

export default App;
