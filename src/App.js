import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Books, Main, Projects, Team } from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/books' element={<Books/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
