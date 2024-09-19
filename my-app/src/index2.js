import React, { Component } from 'react';
import './styles.css'; 

class App extends Component {
  
  state = { 
    name: '',
    price: '',
    
  };

  handleChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value, 
      [e.target.price]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name);
    console.log(this.state.price);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label> Name of product: </label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
          <br />

          <label>price:</label>
            <input type="number" name="price" value={this.state.price} onChange={this.handleChange}/>
          <br />
          <button type="submit">Submit</button>
         
        </form>
        <p>{this.state.name}</p>
        <p>{this.state.price}</p>
      </div>
    );
  }
}

export default App;
