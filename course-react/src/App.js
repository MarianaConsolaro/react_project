
import './App.css'; 

import AnotherComponent from './components/AnotherComponent';
import FirstComponent from './components/FirstComponent';
import Hanger from './components/Hanger';
import Images from './components/Images';

function App() {
  return (
    <div className="App">
      <h1>Hello World React</h1>
      <FirstComponent/>
      <AnotherComponent />
      <Images />
      <Hanger />
    </div>
  );
}

export default App;
