import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-xl 
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                   placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                   focus:border-indigo-500 transition-colors duration-200"
          placeholder="Search for courses..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button 
        type="submit" 
        className="absolute right-2 top-2 px-4 py-1 bg-indigo-600 text-white rounded-lg 
                 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                 focus:ring-indigo-500 transition-colors duration-200"
      >
        Search
      </button>
    </form>
  );
}