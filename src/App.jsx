import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Users from './pages/Users';
import Partners from './pages/Partners';
import './i18n/i18n'; // Подключение i18n
import './styles.css'; // Подключение стилей

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}> {/* Добавляем отступы для контента */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
