import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Display from './pages/Display';
import Form from './pages/Form';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/display" component={Display}></Route>
        <Route path="/" component={Form}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
