import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-red-900">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-bold text-red-900 hover:text-red-700">
          🕰️ WatchStore
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-red-900 hover:text-red-700">Home</Link>
          <Link to="/test" className="text-red-900 hover:text-red-700">Test</Link>
          <Link to="/products" className="text-red-900 hover:text-red-700">Watches</Link>
          <Link to="/about" className="text-red-900 hover:text-red-700">About</Link>
          <Link to="/cart" className="text-red-900 hover:text-red-700">Cart</Link>
        </div>
      </div>
    </nav>
  );
}
