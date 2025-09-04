"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get('role') || 'student';
  const redirectTo = searchParams.get('redirect') || '/';

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const demoCredentials = {
    admin: { email: 'admin@eduinstitute.com', password: 'admin123' },
    student: { email: 'student@eduinstitute.com', password: 'student123' }
  };

  useEffect(() => {
    // Pre-fill demo credentials for easier testing
    setFormData(demoCredentials[role as keyof typeof demoCredentials]);
  }, [role]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Set cookie for authentication
        document.cookie = `auth-token=${data.data.token}; Path=/; HttpOnly=false; Secure=false; SameSite=Lax`;

        // Redirect to appropriate dashboard or original destination
        const targetUrl = role === 'admin' ? '/admin' : '/student';
        router.push(redirectTo.startsWith(targetUrl) ? redirectTo : targetUrl);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const switchRole = () => {
    const newRole = role === 'admin' ? 'student' : 'admin';
    router.push(`/login?role=${newRole}`);
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">
              {role === 'admin' ? 'EduInstitute Admin' : 'Student'} Login
            </CardTitle>
            <p className="text-grainy-600">
              {role === 'admin' ? 'Access your admin dashboard' : 'Access your student portal'}
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={switchRole}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Switch to {role === 'admin' ? 'Student' : 'Admin'} Login
                </button>
              </div>

              {/* Demo credentials info */}
              <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">Demo Credentials:</p>
                <p className="text-xs text-blue-700 mt-1">
                  Email: {demoCredentials[role as keyof typeof demoCredentials].email}<br />
                  Password: {demoCredentials[role as keyof typeof demoCredentials].password}
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}