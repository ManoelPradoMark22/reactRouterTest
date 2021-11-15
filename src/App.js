// This is a React Router v6 app
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Qrcode } from './pages/Qrcode';
import { SearchParams } from './pages/SearchParams';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h2>Inicio</h2>} />
        <Route path="users/*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

function Users() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Routes>
        <Route path=":id" element={<Qrcode/>} />
        <Route path="me" element={<SearchParams/>} />
      </Routes>
    </div>
  );
}