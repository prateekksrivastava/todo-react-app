import react from 'react';
import logo from './GeekyAnts.png';
import './App.css';

class App extends react.Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      list: [],
    };
  }

  addNewItems(todovalue) {
    if (todovalue !== "") {
      const newItem = {
        id: Date.now(),
        value: todovalue,
        isDone: false,
      };

      const list = [...this.state.list];
      
      list.push(newItem);
      
      this.setState({
        list,
        newItem: ""
      });
    }
  }

  setDone() {

  }
  
  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({list: updatedList});
  }

  updateInput(input) {
    this.setState({newItem: input});
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Todo App</h1>
          <img src={logo} className="" width="100px" />
        </header>

        <section>
          <h3>Add New Items</h3>
          <input 
            type="text" 
            class="input-form"
            placeholder="Enter todo" 
            name="new-item" 
            required 
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)}
            />
          
          <button
            class="btn"
            onClick={() => this.addNewItems(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >
            Add
          </button>
        </section>

        <section>
          <h3>CheckList</h3>
          
          {this.state.list.map(item => {
            return(
                <div key={item.id} className="todo-item">
                
                <input 
                  type="checkbox"
                  name="item-listing"
                  checked={item.isDone} 
                  onChange={() => {}}
                  />
            
                <label>
                  {item.value}
                </label>

                <button class="btn"
                  onClick={() => this.deleteItem(item.id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
          
        </section>
      </div>
      

    );
  }
}

export default App;