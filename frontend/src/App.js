import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayerList from "./component/PlayerList";
import AddPlayer from "./component/AddPlayer";
import EditPlayer from './component/EditPlayer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<PlayerList/>} />
        <Route path='add' element={<AddPlayer/>} />
        <Route path='edit/:id' element={<EditPlayer/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
