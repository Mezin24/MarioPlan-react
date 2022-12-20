import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}

export default App;
