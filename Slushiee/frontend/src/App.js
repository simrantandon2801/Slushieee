import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landingpage from './Landingpage';
import Signup from './Signup';
import Header from './Header';
import Footer from './Footer';
import Otp from './Otp';
import Entries from './Entries';
import Login from './Login';
import Welcome from './Welcome';
import Choices from './Choices';
import Ch from './Ch';
import Selected from './Selected';
import Done from './Done';
import Logged from './Logged';

function App() {
  return (
  
     <Routes>
      
        <Route path="landing" element={<Landingpage />} />
        <Route path="Signup" element={<Signup />} />

        <Route path="Header" element={<Header />} />
        <Route path="Footer" element={<Footer />} />
        <Route path="Otp" element={<Otp />} />
        <Route path="Entries" element={<Entries />} />
        <Route path="Login" element={<Login />} />
        <Route path="Welcome" element={<Welcome />} />
        <Route path="Choices" element={<Choices />} />
        <Route path="Ch" element={<Ch />} />
        <Route path="Selected" element={<Selected />} />
        <Route path="Done" element={<Done />} />
        <Route path="Logged" element={<Logged />} />
      </Routes>

  
  );
}

export default App;
