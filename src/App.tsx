import { Routes, Route } from 'react-router-dom';

//
import Home from '@src/pages/Home/Home';
import Dashboard from '@src/pages/dashboard/Dashboard';
import Quizzes from './pages/dashboard/quizzes/Quizzes';
import Test from './pages/dashboard/test/Test';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/dashboard/:id" element={<Dashboard />}>
          <Route path=":collectionId" element={<Quizzes />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
