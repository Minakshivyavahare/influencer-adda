import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { LogIn } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Features/auth/authSlice";
import { CircleUser } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logoutUser())
    navigate("/login")
  }

 
  return (
    <nav className="w-full bg-white shadow-md py-4 px-4 md:px-6 lg:px-8 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg">
              IH
            </div>
            <h1 className="text-2xl font-bold">
              <span className="text-influencer-black">Influence</span>
              <span className="text-orange-500">Adda</span>
            </h1>
          </div>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
          >
            Browse
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">

          {
            !user ? (
              <Link
              to={"/login"}
              className=" flex items-center px-5 py-2 text-sm font-medium text-white bg-orange-500 hover:from-amber-500 hover:to-influencer-orange rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Login <LogIn size={16} />
            </Link>
            ) : (
            <>
             <Link  to={user.isAdmin ? '/auth/admin' : "/auth/profile"} className=" flex items-center px-5 py-2 text-sm font-medium text-white bg-orange-500 hover:from-amber-500 hover:to-influencer-orange rounded-full shadow-lg hover:shadow-xl transition-all">
             <CircleUserRound size={16} className="mx-1"/>  Welcome {user?.name}   
             </Link>

              <button
            to={"/logout"}
            onClick={handleLogout} 
            className=" flex items-center gap-1 px-5 py-2 text-sm font-medium text-white bg-black hover:from-amber-500 hover:to-influencer-orange rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Logout
            <LogOut size={16} />
          </button>
            </>  
            
            )
          }
         

          
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-2 border-t border-gray-100">
          <div className="flex flex-col space-y-3 px-2">
            <a
              href="#"
              className="py-2 px-3 hover:bg-gray-50 rounded-md text-gray-700"
            >
              Home
            </a>
            <a
              href="#"
              className="py-2 px-3 hover:bg-gray-50 rounded-md text-gray-700"
            >
              Browse
            </a>
            <a
              href="#"
              className="py-2 px-3 hover:bg-gray-50 rounded-md text-gray-700"
            >
              About Us
            </a>
            <a
              href="#"
              className="py-2 px-3 hover:bg-gray-50 rounded-md text-gray-700"
            >
              Contact
            </a>
            <div className="pt-2 flex space-x-3">

              {
                !user ? (
                  <Link
                  to={"/login"}
                  className=" flex items-center px-5 py-2 text-sm font-medium text-white bg-orange-500 hover:from-amber-500 hover:to-influencer-orange rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Login <LogIn size={16} />
                </Link>
                ) : (
                  <Link
                to={"/logout"}
                className=" flex items-center gap-1 px-5 py-2 text-sm font-medium text-white bg-black hover:from-amber-500 hover:to-influencer-orange rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Logout
                <LogOut size={16} />
              </Link>
                )
              }
              
              
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
