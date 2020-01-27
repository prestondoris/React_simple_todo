import React, {Component} from 'react';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      inputText: ''
    };
    this.createTodo = this.createTodo.bind(this);
  }

  createTodo(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.state.inputText]
    this.setState({todos, inputText:''});
  }

  render() {
    return (
      <div className="App">
        <h1>Simple Todo App</h1>
        <form onSubmit={this.createTodo} className="input-group">
          <input 
            type="text"
            name="inputText"
            value={this.state.inputText}
            onChange={(e) => {
              this.setState({[e.target.name]: e.target.value});
            }}
          /> 
          <button type="submit">Add Todo</button>
        </form>
        <TodoList todos={this.state.todos}/>

      </div>
    )
  }
}

export default App;
