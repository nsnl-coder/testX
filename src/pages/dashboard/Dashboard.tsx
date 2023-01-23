import { Outlet } from 'react-router-dom';
import Collections from './collections/Collections';

function Dashboard(): JSX.Element {
  return (
    <div className="flex bg-gray-100">
      <Collections />
      <Outlet />
    </div>
  );
}

export default Dashboard;
