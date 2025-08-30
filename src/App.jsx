import './App.css'
import '/node_modules/bootstrap/dist/js/bootstrap.js'
import Power from './Components/Power';
import Buttons from './Components/Buttons';
import Display from './Components/Display';
import Volume from './Components/Volume';
import Bank from './Components/Bank';

const FLEX_CENTERED = 'd-flex flex-column justify-content-center align-items-center'

function App() {

  return (
    <div 
      id="drum-machine"
      className = {`${FLEX_CENTERED} gap-2 p-3`}
    >
      <h2>Drum Machine</h2>
      <Power />
      <Buttons />
      <Display />
      <Volume />
      <Bank />
    </div>
  )
}

export default App
