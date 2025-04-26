import React from 'react';
import CourseCard from './CourseCard';
import { Course } from '../types';

interface CourseGridProps {
  courses: Course[];
}

export default function CourseGrid({ courses }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
          No courses found. Try a different search.
        </h3>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}