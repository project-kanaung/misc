import './App.css';
import Indicator from './component/Indicator';
import Buttons from './component/Buttons';

function App() {
  return (
    <div className="App">
      <h1>MOBX Demo</h1>

      <Indicator></Indicator>
      <br />
      <Buttons/>
    </div>
  );
}

export default App;
