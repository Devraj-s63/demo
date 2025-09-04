import { NextRequest, NextResponse } from 'next/server';

interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  category: string;
  featured: boolean;
}

// In production, this would come from MySQL database
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

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');

    let filteredCourses = coursesData;

    if (category) {
      filteredCourses = filteredCourses.filter(course => course.category === category);
    }

    if (featured === 'true') {
      filteredCourses = filteredCourses.filter(course => course.featured === true);
    }

    return NextResponse.json({
      success: true,
      data: filteredCourses,
      total: filteredCourses.length
    });

  } catch (error) {
    console.error('Courses fetch error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const courseData = await request.json();

    // Validate required fields
    if (!courseData.name || !courseData.category || !courseData.price) {
      return NextResponse.json(
        { message: 'Name, category, and price are required' },
        { status: 400 }
      );
    }

    // Generate ID
    const courseId = courseData.id || courseData.name.toLowerCase().replace(/\s+/g, '-');

    const newCourse: Course = {
      id: courseId,
      name: courseData.name,
      description: courseData.description || '',
      duration: courseData.duration || '',
      price: parseFloat(courseData.price),
      category: courseData.category,
      featured: courseData.featured === true,
    };

    // In production, this would save to MySQL
    coursesData.push(newCourse);

    return NextResponse.json(
      { message: 'Course added successfully', data: newCourse },
      { status: 201 }
    );

  } catch (error) {
    console.error('Course creation error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}