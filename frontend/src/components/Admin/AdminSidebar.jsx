import {
  FaUsers,
  FaClipboardList,
  FaStore,
  FaBoxOpen,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="p-6">
      <div className="mb-6">
        <Link to="/admin" className="text-2xl font-medium">
          Buyzy
        </Link>
      </div>
      <h2 className="mb-6 text-xl font-medium text-center">Admin Dashboard</h2>

      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaUsers size={20} />
          <span>Users</span>
        </NavLink>
        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaBoxOpen size={20} />
          <span>Products</span>
        </NavLink>
        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaClipboardList size={20} />
          <span>Orders</span>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaStore size={20} />
          <span>Shop</span>
        </NavLink>
      </nav>
      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-white bg-red-500 rounded hover:bg-red-600"
        >
          <FaSignOutAlt size={20} />
          <span>Logout</span>
        </button>
      </div>

     
    </div>
  );
};

export default AdminSidebar;
