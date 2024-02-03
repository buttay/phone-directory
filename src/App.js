import { Component } from 'react';
import Header from './Header';

class App extends Component {


  render() {
    return (
      <>
        <Header />
        <button>Add</button><div>
          <span>Name</span><br />
          <span>Phone</span>
        </div>
      </>
    );
  }

}

export default App;
