import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import CourseGrid from '../components/CourseGrid';
import CategoryFilter from '../components/CategoryFilter';
import AnimatedText from '../components/AnimatedText';
import FadeInSection from '../components/FadeInSection';
import { courses, categories } from '../data/courses';
import { Course } from '../types';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);

  useEffect(() => {
    let result = courses;
    
    if (searchQuery) {
      result = result.filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedCategory) {
      result = result.filter((course) => course.category === selectedCategory);
    }
    
    setFilteredCourses(result);
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 dark:from-indigo-900/30 dark:to-purple-900/30"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <AnimatedText
            text="Your Journey to Knowledge"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 dark:text-white"
            delay={1}
          />
          <AnimatedText
            text="Starts Here"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mt-2 mb-6"
            delay={2}
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-center text-gray-700 dark:text-gray-300 mb-10 max-w-3xl"
          >
            Discover the world's best online courses. Curated content for curious minds, organized in one beautiful platform.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full max-w-2xl"
          >
            <SearchBar onSearch={handleSearch} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <a 
              href="#courses" 
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
            >
              Explore Courses
            </a>
            <a 
              href="#" 
              className="px-8 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Zero University
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We've reimagined online education to be simpler, faster, and more beautiful.
            </p>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection delay={2} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl transform hover:scale-105 transition-transform duration-200">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Engineered for speed and performance, so you can focus on learning, not waiting.
              </p>
            </FadeInSection>
            
            <FadeInSection delay={3} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl transform hover:scale-105 transition-transform duration-200">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Beautifully Curated</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our content is hand-picked for quality and organized for seamless discovery.
              </p>
            </FadeInSection>
            
            <FadeInSection delay={4} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl transform hover:scale-105 transition-transform duration-200">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fully Customizable</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Personalize your learning experience with powerful filtering and organization tools.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>
      
      {/* Courses Section */}
      <section id="courses" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Explore Our Courses
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                Browse our collection of high-quality courses across various categories.
              </p>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={2}>
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />
          </FadeInSection>
          
          <FadeInSection delay={3}>
            <CourseGrid courses={filteredCourses} />
          </FadeInSection>
          
          {filteredCourses.length > 0 && (
            <FadeInSection delay={4} className="mt-12 text-center">
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
                Load More Courses
              </button>
            </FadeInSection>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-indigo-100 mb-10 text-xl max-w-3xl mx-auto">
              Join thousands of students already learning with Zero University.
              Get access to our growing library of courses.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#" 
                className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                Get Started — It's Free
              </a>
              <a 
                href="#" 
                className="px-8 py-3 bg-transparent text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-white"
              >
                Learn More
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}