"use client";

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface AppliedCourse {
  id: number;
  course_name: string;
  applied_date: string;
  status: 'pending' | 'approved' | 'rejected' | 'enrolled';
  progress: number; // 0-100
}

export default function StudentPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Mock student data
  const studentData = {
    name: "John Smith",
    email: "student@example.com",
    enrolledCourses: [
      {
        id: 1,
        course_name: "Full Stack Web Development",
        applied_date: "2024-01-15",
        status: "enrolled",
        progress: 75,
        start_date: "2024-01-20",
        completion_date: "2024-07-20"
      },
      {
        id: 2,
        course_name: "Data Science & Analytics",
        applied_date: "2024-01-10",
        status: "pending",
        progress: 10,
        start_date: null,
        completion_date: null
      }
    ],
    recentApplications: [
      {
        id: 3,
        course_name: "Digital Marketing Mastery",
        applied_date: "2024-01-05",
        status: "approved"
      },
      {
        id: 4,
        course_name: "UX/UI Design Principles",
        applied_date: "2023-12-28",
        status: "enrolled"
      }
    ]
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Mock login validation
    if (email === 'student@example.com' && password === 'password') {
      setTimeout(() => {
        setIsLoggedIn(true);
        setLoading(false);
      }, 1500);
    } else {
      setLoading(false);
      alert('Invalid credentials. Use: student@example.com / password');
    }
  };

  const getStatusColor = (status: string) => {
    const colors = {
      enrolled: 'bg-green-100 text-green-800',
      approved: 'bg-blue-100 text-blue-800',
      pending: 'bg-yellow-100 text-yellow-800',
      rejected: 'bg-red-100 text-red-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  if (!isLoggedIn) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Student Portal</h2>
              <p className="text-gray-600 mt-2">Access your courses and applications</p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@example.com"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </div>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Demo credentials: student@example.com / password
              </p>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setEmail('student@example.com');
                  setPassword('password');
                }}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Use Demo Credentials
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Welcome back, {studentData.name}!</h1>
                <p className="text-gray-600 mt-1">Manage your courses and track your progress</p>
              </div>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Student Dashboard */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="text-2xl font-bold text-blue-600">{studentData.enrolledCourses.length}</div>
              <div className="text-gray-600">Enrolled Courses</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="text-2xl font-bold text-green-600">
                {studentData.enrolledCourses.filter(c => c.status === 'enrolled').length}
              </div>
              <div className="text-gray-600">Active Courses</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="text-2xl font-bold text-purple-600">
                {Math.round(studentData.enrolledCourses.reduce((sum, c) => sum + c.progress, 0) / studentData.enrolledCourses.length)}%
              </div>
              <div className="text-gray-600">Average Progress</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="text-2xl font-bold text-yellow-600">{studentData.recentApplications.length}</div>
              <div className="text-gray-600">Total Applications</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Enrolled Courses */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">My Courses</h3>
              <div className="space-y-4">
                {studentData.enrolledCourses.map(course => (
                  <div key={course.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{course.course_name}</h4>
                        <p className="text-sm text-gray-600">Enrolled: {course.start_date}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                        {course.status}
                      </span>
                    </div>

                    {course.status === 'enrolled' && (
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Progress</span>
                          <span className="text-sm font-medium">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    <div className="flex space-x-3 mt-3">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        View Course
                      </button>
                      <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                        Certificates
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application History */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Application History</h3>
              <div className="space-y-4">
                {studentData.recentApplications.map(application => (
                  <div key={application.id} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                    <div>
                      <h4 className="font-medium text-gray-900">{application.course_name}</h4>
                      <p className="text-sm text-gray-600">Applied: {application.applied_date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                      {application.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="/apply"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors block text-center"
                >
                  Apply for New Course
                </a>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="bg-green-100 text-green-800 p-4 rounded-lg hover:bg-green-200 transition-colors">
                <div className="text-2xl mb-2">📚</div>
                <div className="font-medium">Study Materials</div>
              </button>
              <button className="bg-blue-100 text-blue-800 p-4 rounded-lg hover:bg-blue-200 transition-colors">
                <div className="text-2xl mb-2">🎓</div>
                <div className="font-medium">My Grades</div>
              </button>
              <button className="bg-purple-100 text-purple-800 p-4 rounded-lg hover:bg-purple-200 transition-colors">
                <div className="text-2xl mb-2">📋</div>
                <div className="font-medium">Assignments</div>
              </button>
              <button className="bg-yellow-100 text-yellow-800 p-4 rounded-lg hover:bg-yellow-200 transition-colors">
                <div className="text-2xl mb-2">🏆</div>
                <div className="font-medium">Certificates</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}