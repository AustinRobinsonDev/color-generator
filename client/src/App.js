import {useState} from 'react'
import './App.css';
import Navbar from './layout/Navbar';
import ColorList from './components/ColorList';
import Footer from './layout/Footer';


function App() {
  const [color, setColor] = useState('#f15025')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])
  return (
    <div className='App'>
      <Navbar setList={setList} error={error} color={color} setColor={setColor}/>
      <ColorList list={list} />
      <Footer />
    </div>
  );
}

export default App;