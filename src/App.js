
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NontFound from './components/NontFound/NontFound';
import PostDetails from './components/PostDetails/PostDetails';


function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/post/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route path="*">
            <NontFound></NontFound>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
