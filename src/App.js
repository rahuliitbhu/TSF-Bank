import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar';
import {BrowserRouter,Route,NavLink,Routes} from 'react-router-dom'
import Home from './Component/screens/Home';
import Transaction from './Component/screens/Transaction';
import History from './Component/screens/History';

function App() {
  return (
    <div>

<NavBar/>
<BrowserRouter>
   
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/usertransaction" element={<Transaction/>}/>
   <Route path="/history" element={<History/>}/>

   </Routes>
        
    </BrowserRouter>

    </div>
    
      
    
  );
}

export default App;
