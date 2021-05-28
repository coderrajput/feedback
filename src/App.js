import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddFeedBack from './components/AddFeedBack';
import SignUpForm from './components/SignUpForm';
import ShowFeedBack from "./components/ShowFeedBack";


function App() {
  return (
    <div >
         <Switch>
         
          <Route path="/feedback/new">
              <AddFeedBack />
          </Route>
          <Route path="/feedback">
              <ShowFeedBack />
          </Route>

          <Route path="/">
              <SignUpForm />
          </Route>
        </Switch>
      
    </div>
  );
}

export default App;
