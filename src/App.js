import logo from './logo.svg';
import './App.css';
import Exclusive from './components/home/exclusive';
import {Switch,Route} from 'react-router-dom';
import Homeservicepage from './components/home/Homeservicepage';
import Servicecarddetail from './components/home/servicecarddetail';
function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Exclusive}/>
      <Route exact path="/Homeservicepage" component={Homeservicepage}/>
      <Route exact path="/Servicecarddetail" component={Servicecarddetail}/>
    </Switch>
     
    </>
  );
}

export default App;
