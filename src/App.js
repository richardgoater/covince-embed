import logo from './logo.svg';
import './App.css';

import Covince from 'covince/src/Covince'

function App() {
  return (
    <div className="flex flex-col justify-start max-h-full p-3">
      <header className='h-20'></header>
      <Covince />
    </div>
  );
}

export default App;
