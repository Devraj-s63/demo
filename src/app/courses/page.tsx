"use client";

import { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  category: string;
  featured: boolean;
}

// Sample courses data
const coursesData: Course[] = [
  {
    id: 'web-dev',
    name: 'Full Stack Web Development',
    description: 'Learn to build modern web applications from scratch using React, Node.js, and databases. Cover everything from frontend UI to backend APIs and deployment.',
    duration: '6 months',
    price: 2999,
    category: 'IT',
    featured: true,
  },
  {
    id: 'data-science',
    name: 'Data Science & Analytics',
    description: 'Master data analysis, machine learning, and visualization with Python, R, and modern data tools. Work on real datasets and build predictive models.',
    duration: '8 months',
    price: 3499,
    category: 'IT',
    featured: true,
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing Mastery',
    description: 'Comprehensive digital marketing course covering SEO, social media, content marketing, PPC advertising, and email marketing strategies.',
    duration: '4 months',
    price: 1999,
    category: 'Management',
    featured: true,
  },
  {
    id: 'ux-design',
    name: 'UX/UI Design Principles',
    description: 'Learn user-centered design principles, prototyping tools like Figma, wireframing, usability testing, and modern design trends.',
    duration: '5 months',
    price: 2499,
    category: 'Design',
    featured: false,
  },
  {
    id: 'mobile-dev',
    name: 'Mobile App Development',
    description: 'Build native mobile apps using React Native and Flutter. Learn app architecture, APIs, database integration, and app store deployment.',
    duration: '7 months',
    price: 3299,
    category: 'IT',
    featured: false,
  },
  {
    id: 'project-mgmt',
    name: 'Project Management',
    description: 'Learn Agile and Scrum methodologies, project planning, risk management, team leadership, and project management certifications.',
    duration: '4 months',
    price: 2499,
    category: 'Management',
    featured: false,
  },
];

const categories = ['All', 'IT', 'Management', 'Design'];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCourses = useMemo(() => {
    if (selectedCategory === 'All') return coursesData;
    return coursesData.filter(course => course.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Courses</h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Choose from our comprehensive range of professional development programs
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-gray-600">
                Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map(course => (
                <div
                  key={course.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={`https://placehold.co/400x250?text=${course.name.replace(/\s+/g, '+')}`}
                      alt={course.name}
                      className="w-full h-48 object-cover"
                    />
                    {course.featured && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full font-semibold">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{course.name}</h3>
                      <span className={`px-3 py-1 rounded-full font-medium text-sm ${
                        course.category === 'IT'
                          ? 'bg-blue-100 text-blue-800'
                          : course.category === 'Management'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        {course.category}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-500">
                        ⏱️ {course.duration}
                      </div>
                      <div className="text-2xl font-bold text-blue-600">
                        ${course.price.toLocaleString()}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        onClick={() => window.location.href = `/apply`}
                      >
                        Apply Now
                      </button>
                      <button
                        className="px-4 py-2 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No courses found</h3>
                <p className="text-gray-600">Try selecting a different category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with our comprehensive courses.
            </p>
            <div className="space-x-4">
              <a
                href="/apply"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}