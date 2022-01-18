import './App.css';
import ReactPlayer from 'react-player';
import { useState } from 'react';
import Menu from './Menu';
import { Shows } from './pages/Pages';


function App() {
  var [currentPage, setCurrentPage] = useState(Shows)

  return (
    <div className="App">
      <header className="App-header">
        His Father's Voice
      </header>
      <div className='App-body'>
        <Menu setPage={setCurrentPage} />
        <div className='page'>
          {currentPage}
        </div>
      </div>
    </div>
  );
}

export default App;
