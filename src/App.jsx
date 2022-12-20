import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/projects/:id' element={<ProjectDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
