

import './App.css'; 

import AnotherComponent from './components/AnotherComponent';
import Container from './components/Container';
import FirstComponent from './components/FirstComponent';
import Fragment from './components/Fragment';
import Hanger from './components/Hanger';
import Images from './components/Images';
import List from './components/List';
import RenderCond from './components/RenderCond';

function App() {
  return (
    <div className="App">
      <h1>Hello World React</h1>
      <FirstComponent/>
      <AnotherComponent />
      <Images />
      <Hanger />
      <List />
      <RenderCond x={8} y={10}/>
      <Fragment />
      <Container>
        <h1>Este é filho do container</h1>
      </Container>
    </div>
  );
}

export default App;
