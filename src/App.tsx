import { Routes, Route } from "react-router-dom"
import {Home} from './Modules/Home';
import {Details} from './Modules/Details';
import {Header} from './Components/Header'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="details" element={ <Details/>} />
      </Routes>
    </div>
  );
}

export default App;
