import { notFound } from 'next/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// This would typically come from your database
const courseData = {
  'web-dev': {
    id: 'web-dev',
    name: 'Full Stack Web Development',
    slug: 'full-stack-web-development',
    category: 'IT',
    duration: '6 months',
    price: 2999,
    difficulty: 'Intermediate',
    rating: 4.8,
    students: 1250,
    instructor: 'Dr. Sarah Johnson',
    image: 'https://placehold.co/800x400?text=Full+Stack+Web+Development',
    description: 'Master the complete web development lifecycle from frontend UI to backend APIs and deployment. Learn React, Node.js, MongoDB, and cloud deployment in this comprehensive program.',
    overview: [
      'Modern web development technologies',
      'Full-stack application architecture',
      'Database design and management',
      'API development and integration',
      'Deployment and DevOps basics'
    ],
    curriculum: [
      {
        title: 'Frontend Development',
        modules: [
          'Introduction to HTML5 & CSS3',
          'JavaScript ES6+ Fundamentals',
          'React.js Development',
          'State Management with Redux',
          'Responsive Design & Bootstrap/Tailwind'
        ]
      },
      {
        title: 'Backend Development',
        modules: [
          'Node.js Fundamentals',
          'Express.js Framework',
          'RESTful API Development',
          'Authentication & Authorization',
          'Security & Performance'
        ]
      },
      {
        title: 'Database & Deployment',
        modules: [
          'Database Design with MySQL/MongoDB',
          'Cloud Deployment (AWS/Heroku)',
          'Version Control with Git',
          'Testing & Debugging',
          'Production Deployment & Monitoring'
        ]
      }
    ],
    testimonials: [
      {
        name: 'Alex Thompson',
        rating: 5,
        comment: 'This course transformed my career. The instructors are excellent and the projects are real-world relevant.',
        avatar: 'https://placehold.co/80x80?text=AT'
      },
      {
        name: 'Maria Garcia',
        rating: 5,
        comment: 'Comprehensive curriculum with hands-on projects. Highly recommended for aspiring developers.',
        avatar: 'https://placehold.co/80x80?text=MG'
      }
    ],
    requirements: [
      'Basic computer knowledge',
      'Good internet connection',
      'Motivation to learn and practice',
      'Laptop/desktop with VS Code installed'
    ],
    whatBeLearnt: [
      'Build complete web applications',
      'Master frontend and backend technologies',
      'Deploy applications to cloud platforms',
      'Work with databases and APIs',
      'Implement security best practices',
      'Use version control systems'
    ]
  },
  'data-science': {
    id: 'data-science',
    name: 'Data Science & Analytics',
    slug: 'data-science-analytics',
    category: 'IT',
    duration: '8 months',
    price: 3499,
    difficulty: 'Intermediate',
    rating: 4.9,
    students: 980,
    instructor: 'Prof. Michael Chen',
    image: 'https://placehold.co/800x400?text=Data+Science+Analytics',
    description: 'Become a data science expert with hands-on experience in Python, machine learning, and data visualization. Build predictive models and analyze real datasets.',
    overview: [
      'Python programming for data science',
      'Statistical analysis and probability',
      'Machine learning algorithms',
      'Data visualization techniques',
      'Big data processing'
    ],
    curriculum: [
      {
        title: 'Python Programming',
        modules: [
          'Python Fundamentals',
          'Data Structures & Algorithms',
          'NumPy & Pandas Libraries',
          'Data Cleaning & Preprocessing',
          'Jupyter Notebook Usage'
        ]
      },
      {
        title: 'Statistics & Data Analysis',
        modules: [
          'Descriptive Statistics',
          'Inferential Statistics',
          'Probability Theory',
          'Hypothesis Testing',
          'Regression Analysis'
        ]
      },
      {
        title: 'Machine Learning',
        modules: [
          'Supervised Learning Algorithms',
          'Unsupervised Learning Techniques',
          'Model Evaluation & Validation',
          'Feature Engineering',
          'Deep Learning Introduction'
        ]
      }
    ],
    testimonials: [
      {
        name: 'James Wilson',
        rating: 5,
        comment: 'Excellent course for anyone wanting to enter the data science field. Very practical approach.',
        avatar: 'https://placehold.co/80x80?text=JW'
      },
      {
        name: 'Lisa Zhang',
        rating: 5,
        comment: 'The ML projects are challenging and educational. Great learning experience!',
        avatar: 'https://placehold.co/80x80?text=LZ'
      }
    ],
    requirements: [
      'Basic programming knowledge',
      'Mathematics background (algebra, calculus)',
      'Strong analytical mindset',
      'Access to laptop/desktop'
    ],
    whatBeLearnt: [
      'Python programming for data analysis',
      'Statistical analysis techniques',
      'Machine learning algorithms',
      'Data visualization with matplotlib/seaborn',
      'Big data processing',
      'Predictive modeling'
    ]
  }
};

interface CoursePageProps {
  params: {
    id: string;
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courseData[params.id as keyof typeof courseData];

  if (!course) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    course.category === 'IT'
                      ? 'bg-blue-100 text-blue-800'
                      : course.category === 'Management'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {course.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    course.difficulty === 'Beginner'
                      ? 'bg-green-100 text-green-800'
                      : course.difficulty === 'Intermediate'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {course.difficulty}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {course.name}
                </h1>

                <p className="text-xl text-blue-100 mb-6">
                  {course.description}
                </p>

                <div className="flex items-center space-x-8 mb-8">
                  <div className="flex items-center">
                    <div className="text-yellow-400 text-lg">★★★★☆</div>
                    <span className="ml-2">{course.rating} ({course.students} students)</span>
                  </div>
                  <div>👨‍🏫 {course.instructor}</div>
                </div>

                <div className="text-4xl font-bold mb-6">
                  ${course.price.toLocaleString()}
                </div>

                <div className="space-x-4">
                  <a
                    href={`/apply`}
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    Enroll Now
                  </a>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
                    Download Syllabus
                  </button>
                </div>
              </div>

              <div className="relative">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold">{course.duration}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm">{course.students} students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Overview</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">What you'll learn:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.whatBeLearnt.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Curriculum */}
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
                <div className="space-y-6">
                  {course.curriculum.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h3>
                      <div className="space-y-3">
                        {section.modules.map((module, moduleIndex) => (
                          <div key={moduleIndex} className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                              {sectionIndex * 5 + moduleIndex + 1}
                            </div>
                            <span className="text-gray-700">{module}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Testimonials */}
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Testimonials</h2>
                <div className="space-y-6">
                  {course.testimonials.map((testimonial, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start space-x-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                            <div className="text-yellow-400">
                              {'★'.repeat(testimonial.rating)}
                            </div>
                          </div>
                          <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Course Info Card */}
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Information</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Difficulty</span>
                    <span className="font-semibold">{course.difficulty}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Students</span>
                    <span className="font-semibold">{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Rating</span>
                    <span className="font-semibold">⭐ {course.rating}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Instructor</span>
                    <span className="font-semibold">{course.instructor}</span>
                  </div>
                </div>

                <a
                  href={`/apply`}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors block text-center"
                >
                  Enroll Now - ${course.price.toLocaleString()}
                </a>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h3>
                <ul className="space-y-3">
                  {course.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-600">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(courseData).map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params }: CoursePageProps) {
  const course = courseData[params.id as keyof typeof courseData];

  if (!course) {
    return {
      title: 'Course Not Found',
    };
  }

  return {
    title: `${course.name} - EduInstitute Courses`,
    description: course.description,
    keywords: `${course.category}, ${course.name}, online courses, education, ${course.instructor}`,
    openGraph: {
      title: course.name,
      description: course.description,
      type: 'website',
      images: [course.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: course.name,
      description: course.description,
      images: [course.image],
    },
  };
}