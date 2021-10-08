
import { BrowserRouter ,Route} from 'react-router-dom';
import './App.css';
import Users from './components/Users';
import Edituser from './components/Edituser'
import Createuser from './components/Createuser'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div class="d-flex" id="wrapper">
          
            <Route path="/edit_user/:index" component={Edituser} exact={true} />
            <Route path="/" component={Users} exact={true} />
            <Route path="/create_user" component={Createuser} exact={true} />
          
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
