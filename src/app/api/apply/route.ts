import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const {
      name,
      email,
      phone,
      courseId,
      courseName,
      education,
      qualifications,
      message
    } = formData;

    // Validation
    if (!name || !email || !courseId || !courseName) {
      return NextResponse.json(
        { message: 'Name, email, course are required' },
        { status: 400 }
      );
    }

    // Log the application (in a real app, this would go to database + email)
    console.log('New Application Submitted:', {
      name,
      email,
      phone,
      courseId,
      courseName,
      education,
      qualifications,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For demo purposes - in production this would save to MySQL and send email
    return NextResponse.json(
      { message: 'Application submitted successfully! We will contact you within 24 hours.', success: true },
      { status: 200 }
    );

  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}