import React from 'react';
import { Button } from 'antd';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-zinc-800">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">C</span>
        </div>
        <span className="text-xl font-bold text-gray-900 dark:text-white">CodeBlocks</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Templates</a>
        <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Features</a>
        <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Pricing</a>
        <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Docs</a>
      </div>

      <div className="flex items-center gap-4">
        <Button type="text" className="dark:text-gray-300">Log in</Button>
        <Button type="primary" shape="round">Sign up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
