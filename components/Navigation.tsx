import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' },
    { name: 'Admin Panel', path: '/admin' },
  ];

  return (
    <nav className="bg-white border-b border-[#E6D5B8] sticky top-0 z-50" style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)' }}>
      <div className="max-w-[1400px] mx-auto px-12 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl text-[#4A3A33]">
            Studio
          </Link>
          
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[15px] transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-[#E7A47C]'
                    : 'text-[#6E6560] hover:text-[#E7A47C]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <select
              value={location.pathname}
              onChange={(e) => window.location.href = e.target.value}
              className="px-4 py-2 rounded-full bg-[#F2E9E4] text-[#4A3A33] border-0"
            >
              {navItems.map((item) => (
                <option key={item.path} value={item.path}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
