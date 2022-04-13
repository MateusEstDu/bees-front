import Credentials from './Credentials/Credentials';
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContextProvider } from '../contexts/UserContext';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Credentials />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  </UserContextProvider>
  );
}

export default App;