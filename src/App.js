import './App.css';
import Landing from './components/landing/Landing';
import { context } from './data/constants.js'

function App() {
  return <Landing setJourney={context.options} />;
}

export default App;
