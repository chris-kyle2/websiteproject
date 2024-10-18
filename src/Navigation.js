import { NavLink } from 'react-router-dom';

export const Navigation = ({ children }) => {
  return (
    <nav className="col-span-3 flex flex-col border-r-2 border-yellow-400 h-full bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold p-4 text-center text-gray-700">Navigation</h2>
      <div className="flex-grow overflow-y-auto">{children}</div>
    </nav>
  );
};

export const NavigationLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center p-4 rounded-lg transition duration-300 ease-in-out ${
          isActive
            ? 'bg-pink-300 text-white shadow-md'
            : 'bg-white text-gray-700 hover:bg-yellow-100 hover:text-gray-900'
        }`
      }
    >
      <span className="material-icons mr-2">arrow_forward</span> {/* Example icon */}
      {children}
    </NavLink>
  );
};
