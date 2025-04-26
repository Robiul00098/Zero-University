export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  url: string;
}

export type ThemeMode = 'light' | 'dark';