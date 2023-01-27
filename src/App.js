import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: false,
  };

  handleChange = () => {
    console.log('Alouuuuuuuuuuuu');
  };

  handleClick = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <main>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleClick }
        />
        <Card { ...this.state } />
      </main>
    );
  }
}

export default App;
