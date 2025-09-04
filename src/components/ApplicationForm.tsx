"use client";

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  courseId: string;
  courseName: string;
  education: string;
  qualifications: string;
  message: string;
}

const courses = [
  { id: 'web-dev', name: 'Full Stack Web Development', price: 2999 },
  { id: 'data-science', name: 'Data Science & Analytics', price: 3499 },
  { id: 'digital-marketing', name: 'Digital Marketing Mastery', price: 1999 },
  { id: 'ux-design', name: 'UX/UI Design Principles', price: 2499 },
  { id: 'mobile-dev', name: 'Mobile App Development', price: 3299 },
  { id: 'project-mgmt', name: 'Project Management', price: 2499 },
];

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    courseId: '',
    courseName: '',
    education: '',
    qualifications: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCourse = courses.find(c => c.id === e.target.value);
    setFormData(prev => ({
      ...prev,
      courseId: e.target.value,
      courseName: selectedCourse?.name || ''
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Application submitted successfully! We will contact you within 24 hours.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          courseId: '',
          courseName: '',
          education: '',
          qualifications: '',
          message: ''
        });
        setCurrentStep(1);
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Application submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit application. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));
  const progress = (currentStep / 3) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-gray-900">Apply Today</h1>
          <p className="text-gray-600">
            Step {currentStep} of 3
          </p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        {currentStep === 1 && (
          <>
            <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="courseId" className="block text-sm font-medium text-gray-700 mb-1">
                Select Course *
              </label>
              <select
                id="courseId"
                name="courseId"
                value={formData.courseId}
                onChange={handleCourseChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Choose a course</option>
                {courses.map(course => (
                  <option key={course.id} value={course.id}>
                    {course.name} - ${course.price}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={nextStep}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Next Step →
            </button>
          </>
        )}

        {currentStep === 2 && (
          <>
            <h3 className="text-xl font-semibold mb-6">Education Details</h3>
            <div className="mb-6">
              <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                Education Level *
              </label>
              <select
                id="education"
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select your education level</option>
                <option value="high-school">High School</option>
                <option value="associate">Associate Degree</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="phd">PhD</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700 mb-1">
                Relevant Qualifications/Skills
              </label>
              <textarea
                id="qualifications"
                name="qualifications"
                rows={4}
                value={formData.qualifications}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="List any relevant qualifications, skills, or previous learning..."
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={prevStep}
                className="w-1/2 bg-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-400 focus:outline-none"
              >
                ← Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="w-1/2 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Next Step →
              </button>
            </div>
          </>
        )}

        {currentStep === 3 && (
          <>
            <h3 className="text-xl font-semibold mb-6">Final Details</h3>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Why do you want to take this course? Any specific goals or questions..."
              />
            </div>

            {submitStatus.message && (
              <div className={`p-4 rounded-lg mb-6 ${
                submitStatus.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Application Summary</h4>
              <p><strong>Course:</strong> {formData.courseName}</p>
              <p><strong>Education:</strong> {formData.education}</p>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={prevStep}
                className="w-1/2 bg-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-400 focus:outline-none"
              >
                ← Previous
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-1/2 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </>
        )}
      </form>

      {/* FAQ Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900">How long does the application process take?</h4>
            <p className="text-gray-600">We typically respond within 24-48 hours. Once approved, you'll receive further instructions for payment and enrollment.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Do I need any prerequisites?</h4>
            <p className="text-gray-600">Most courses require a high school diploma. Specific technical courses may have additional requirements which are listed in the course details.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">What payment methods do you accept?</h4>
            <p className="text-gray-600">We accept credit cards, debit cards, bank transfers, and PayPal. Flexible payment plans are available for select courses.</p>
          </div>
        </div>
      </div>
    </div>
  );
}