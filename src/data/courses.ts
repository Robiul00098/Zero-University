import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Artificial Intelligence',
    description: 'Learn the fundamentals of AI, machine learning, and neural networks in this comprehensive course.',
    thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Technology',
    url: 'https://example.com/ai-course',
  },
  {
    id: '2',
    title: 'The Complete Web Development Bootcamp',
    description: 'Master HTML, CSS, JavaScript, React, Node, and more to become a full-stack web developer.',
    thumbnail: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Programming',
    url: 'https://example.com/web-dev',
  },
  {
    id: '3',
    title: 'Business Strategy Masterclass',
    description: 'Develop strategic thinking and learn to create successful business plans from industry experts.',
    thumbnail: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Business',
    url: 'https://example.com/business-strategy',
  },
  {
    id: '4',
    title: 'Digital Marketing: From Beginner to Pro',
    description: 'Learn SEO, content marketing, social media strategies, and analytics to grow your online presence.',
    thumbnail: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Marketing',
    url: 'https://example.com/digital-marketing',
  },
  {
    id: '5',
    title: 'Data Science and Analytics',
    description: 'Master data analysis, visualization, and machine learning to extract meaningful insights from data.',
    thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Technology',
    url: 'https://example.com/data-science',
  },
  {
    id: '6',
    title: 'Financial Literacy 101',
    description: 'Build a strong foundation in personal finance, investing, and wealth management strategies.',
    thumbnail: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Finance',
    url: 'https://example.com/financial-literacy',
  },
  {
    id: '7',
    title: 'Modern UX/UI Design Principles',
    description: 'Learn user-centered design methodologies and create stunning, intuitive interfaces.',
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Design',
    url: 'https://example.com/ux-ui-design',
  },
  {
    id: '8',
    title: 'Sustainable Development and Green Technology',
    description: 'Explore sustainable practices and green technologies shaping our future environmental solutions.',
    thumbnail: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Environment',
    url: 'https://example.com/sustainable-development',
  }
];

export const categories = [...new Set(courses.map(course => course.category))];