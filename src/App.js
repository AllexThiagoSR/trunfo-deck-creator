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
    rarity: 'normal',
  };

  handleChange = () => {
    console.log('Alouuuuuuuuuuuu');
  };

  render() {
    return (
      <main>
        <h1>Tryunfo</h1>
        <Form
          infos={ { ...this.state } }
          handleChange={ this.handleChange }
        />
      </main>
    );
  }
}

export default App;
