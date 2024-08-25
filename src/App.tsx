import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Component from './components/TaxWebsite';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <div className='top-0 sticky overflow-hidden'>
        </div>
        <div className="flex-grow">
          <Routes>
            <Route path='/' element={< Component/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
