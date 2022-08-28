import './App.css';
import Info from './components/Info'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import {useState} from 'react'


function App() {
  const [changer, setChanger] = useState(false)
  if(changer === false){
    document.body.style.backgroundColor = "#FDEEDC";
  }
  if(changer === true){
    document.body.style.backgroundColor = "#483838";
  }
  return (
    <div className='container'>
      <Info changer={changer} />
      <Home changer={changer} />
      <Sidebar setChanger={setChanger} changer={changer} />
    </div>
  );
}

export default App;
