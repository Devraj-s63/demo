import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Log the contact message (in a real app, this would go to database + email)
    console.log('New Contact Message:', {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For demo purposes - in production this would save to MySQL and send email
    return NextResponse.json(
      { message: 'Thank you! Your message has been sent successfully.', success: true },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}