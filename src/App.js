import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    attr1: 0,
    attr2: 0,
    attr3: 0,
    description: '',
    image: '',
    trunfo: false,
  };

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form infos={ { ...this.state } } />
      </div>
    );
  }
}

export default App;
