import './App.css';
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes} from 'react-router-dom';

import {makeStyles} from  "@material-ui/core";
import CoinPage from './Pages/CoinPage';

function App() {
const useStyles =  makeStyles(() => 
({
App: {
  backgroundColor: "#14161a",
  color: "white",
  minHeight: "100vh"
}

})


);


const classes = useStyles();




  return (
    <Router>

    <div className={classes.App}>
    <Header className = ""/>
    <Routes>

    <Route path='/' element={<Homepage/>}/> 
  
    <Route path="coins/:id" element= {<CoinPage/>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
