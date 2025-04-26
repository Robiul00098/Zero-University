import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <GraduationCap className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
      <span className="font-bold text-xl tracking-tight">
        Zero<span className="text-indigo-600 dark:text-indigo-400">University</span>
      </span>
    </div>
  );
}