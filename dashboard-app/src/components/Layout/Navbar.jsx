import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">My Dashboard</Link>
        <div>
          <Link to="/dashboard" className="text-gray-300 hover:text-white mr-4">Dashboard</Link>
          <Link to="/datasources" className="text-gray-300 hover:text-white mr-4">Data Sources</Link>
          <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
