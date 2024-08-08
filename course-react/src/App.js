
import './App.css'; 

import AnotherComponent from './components/AnotherComponent';
import FirstComponent from './components/FirstComponent';
import Hanger from './components/Hanger';
import Images from './components/Images';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <h1>Hello World React</h1>
      <FirstComponent/>
      <AnotherComponent />
      <Images />
      <Hanger />
      <List />
    </div>
  );
}

export default App;
