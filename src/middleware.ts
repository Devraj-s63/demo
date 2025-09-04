import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedAdminRoutes = [
  '/admin',
  '/api/admin',
  '/api/courses', // POST request should be protected
];

const protectedStudentRoutes = [
  '/student',
  '/api/applications'
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get token from cookie or Authorization header
  const token = request.cookies.get('auth-token')?.value ||
                request.headers.get('Authorization')?.replace('Bearer ', '');

  // Check admin routes
  if (protectedAdminRoutes.some(route => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL('/login?role=admin&redirect=' + encodeURIComponent(pathname), request.url));
    }

    try {
      // In production, verify JWT token here
      // For demo, just check if token exists
      if (!token.includes('admin')) {
        return NextResponse.redirect(new URL('/unauthorized', request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL('/login?role=admin', request.url));
    }
  }

  // Check student routes
  if (protectedStudentRoutes.some(route => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL('/login?role=student&redirect=' + encodeURIComponent(pathname), request.url));
    }

    try {
      // In production, verify JWT token here
      if (!token.includes('student')) {
        return NextResponse.redirect(new URL('/unauthorized', request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL('/login?role=student', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/student/:path*',
    '/api/admin/:path*',
    '/api/courses/:path*',
    '/api/applications/:path*',
  ],
};