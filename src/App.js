import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FilmDetail from './FilmDetail';
import FilmLibrary from './FilmLibrary';
import HomePage from './HomePage';
import NotFound from './NotFound';


function App() {
  return (
      <Routes>
        <Route path="/films" element={<FilmLibrary />} >
           <Route path=":filmID" element={<FilmDetail />} />
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
