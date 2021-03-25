// import logo from './logo.svg';
// import './App.css';
import {Router, Link} from '@reach/router';
import AllNinjas from './components/AllNinjas';
import OneNinja from './components/OneNinja';
import CreateNinja from './components/CreateNinja';
import EditNinja from './components/EditNinja';

function App() {
  return (
    <div className="App">
      <button><Link to= "/">Home</Link></button>
      <button><Link to= "/ninjas/create/new">Add new Ninja</Link></button>


      <div className="d-flex justify-content-center flex-column">
        <h1 className="text-center">Ninjas Wall of Fame!</h1>
        
        <Router>
          <AllNinjas path="/"></AllNinjas>
          <OneNinja path= "/ninjas/:studentID"></OneNinja>
          <CreateNinja path="/ninjas/create/new"></CreateNinja>
          <EditNinja path="/ninjas/edit/:studentID"></EditNinja>
          

        </Router>
      </div>
    </div>
  );
}

export default App;
