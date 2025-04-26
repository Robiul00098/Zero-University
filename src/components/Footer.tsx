import React from 'react';
import { Heart } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Logo />
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
              The simplest, fastest, and most beautiful online university for AI-created courses.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Platform
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Browse Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Popular Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  New Releases
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Support
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Zero University. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center items-center">
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              Made with 
            </span>
            <Heart size={16} className="mx-1 text-red-500 inline" />
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              for education
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}