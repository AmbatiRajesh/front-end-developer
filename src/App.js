import img from './components/ch.jpg';
import Usform from './components/Usform';
import './components/Styles/chart.css';
import './components/Styles/chartBar.css';
import ChartBar from './components/ChartBar';
import { useState } from 'react';

function App() {
  const [visi, setVisi]=useState(false);
  function gcbar(){
    setVisi(false)
  }
  return (
    <div>
    {!visi && <div className='card'>
     <img src={img} alt="Not Supported" className='card__image'/>
     <div className='card__child'>
     <Usform barHide={setVisi}></Usform>
     </div>
     </div>}
    {visi && <ChartBar home={gcbar}></ChartBar>}
    </div>
  );
}

export default App;
