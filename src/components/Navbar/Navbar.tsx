import  { useState } from "react";
import { Link, } from "react-router-dom";
import {
  Menu,
  Filter,
  ChevronRight,
  Mountain,
  Home,
  Waves,
  MountainSnow,
  Music,
  Landmark,
  Gem,
  Ship,
  Trees,
  Search,
  User,
  Globe,
} from "lucide-react";
import log from '../../assets/Frame 1 (1).png';
import backgroundImage from '../../assets/frame08.jpg';

function Navbar() {
  const categories = [
    { name: "Amazing views", icon: <Mountain /> },
    { name: "Cabins", icon: <Home /> },
    { name: "Beachfront", icon: <Waves /> },
    { name: "Skiing", icon: <MountainSnow /> },
    { name: "Grand pianos", icon: <Music /> },
    { name: "Mansions", icon: <Landmark /> },
    { name: "OMG!", icon: <Gem /> },
    { name: "Amazing pools", icon: <Waves /> },
    { name: "Luxe", icon: <Gem /> },
    { name: "Boats", icon: <Ship /> },
    { name: "Lakefront", icon: <Waves /> },
    { name: "Treehouses", icon: <Trees /> },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const  = useLocation();

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Apply background image
    >
    
      <nav className="flex justify-between items-center p-4 shadow-xl relative bg-white rounded-2xl mt-2">
        {/* 👇👇*/}
        <div className="text-red-500 font-bold text-xl flex">
          <img className="animate-pulse" src={log} alt="" />
        </div>

        {/* 👇👇*/}
        <div className="hidden md:flex items-center border border-red-400 rounded-full shadow-md px-4 py-2 space-x-2">
          <div className="text-gray-700 font-medium">Anywhere</div>
          <span className="text-gray-400">|</span>
          <div className="text-gray-700 font-medium">Any week</div>
          <span className="text-gray-400">|</span>
          <div className="text-gray-400">Add guests</div>
          <button className="bg-red-500 text-white rounded-full p-2">
            <Search size={14} />
          </button>
        </div>

        {/* User Menu */}
        <div className="flex items-center space-x-4 relative">
          <button className="hidden md:block text-gray-700">Airbnb your home</button>
          <button className="hidden md:block text-gray-700">
            <Globe />
          </button>
          <div
            className="flex items-center border border-red-400 rounded-full px-3 py-1 space-x-2 shadow-md cursor-pointer relative"
            onClick={handleToggle}
          >
            <Menu />
            <User className="text-gray-500" size={20} />
          </div>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 w-48 bg-white shadow-lg shadow-fuchsia-400 rounded-lg py-2 z-10 mt-72">
              <Link
                to="/"
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Home
              </Link>
              <Link
                to="/Signin"
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Signin
              </Link>
              <Link
                to="/signup"
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Signup
              </Link>
              <Link
                to="/HelpCenter"
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Help Center
              </Link>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Airbnb your home
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Categories Section */}
      <div className="hidden md:flex items-center space-x-6 overflow-x-auto px-6 mt-6 border-b text-gray-700 shadow-2xl shadow-fuchsia-100 bg-white">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer text-sm"
          >
            <div className="text-2xl">{category.icon}</div>
            <span className="mt-1">{category.name}</span>
          </div>
        ))}
        <button className="p-2 border rounded-full">
          <ChevronRight />
        </button>
        <button className="flex items-center px-4 py-2 border rounded-lg text-sm font-semibold ml-4">
          <Filter className="mr-2" /> Filters
        </button>
      </div>
    </div>
  );
}

export default Navbar;