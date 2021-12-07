
import './App.css';
import 'bootstrap';

import'./Component/menu'
import Nav from './Component/menu';
import Photo from './Component/carousel'
import V from'./Component/video'
import Info from'./Component/info'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Nav/>
       
        </header>
        <div className="carousel">
        <Photo/>
        </div>
        <div className="video">
           <V/>

        </div>
        <div className="video">
           <Info/>

        </div>
      
     
    </div>
  );
}

export default App ;
