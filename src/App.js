import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    isSaveButtonDisabled: false,
  };

  handleChange = ({ target: { name, type, checked, value } }) => {
    this.setState({
      [name]: (type === 'checkbox' ? checked : value),
    });
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
