import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Application {
  id: number;
  name: string;
  email: string;
  phone: string;
  course_name: string;
  created_at: string;
  status: 'pending' | 'approved' | 'rejected';
}

export default function AdminPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'courses' | 'applications'>('dashboard');

  // Mock data for demo
  useEffect(() => {
    // Simulate API call
    const mockApplications: Application[] = [
      {
        id: 1,
        name: 'John Smith',
        email: 'john@example.com',
        phone: '+1 (555) 123-4567',
        course_name: 'Full Stack Web Development',
        created_at: '2024-01-15',
        status: 'pending'
      },
      {
        id: 2,
        name: 'Sarah Johnson',
        email: 'sarah@example.com',
        phone: '+1 (555) 987-6543',
        course_name: 'Data Science & Analytics',
        created_at: '2024-01-14',
        status: 'approved'
      },
      {
        id: 3,
        name: 'Mike Chen',
        email: 'mike@example.com',
        phone: '+1 (555) 456-7890',
        course_name: 'Digital Marketing Mastery',
        created_at: '2024-01-13',
        status: 'pending'
      }
    ];

    setTimeout(() => {
      setApplications(mockApplications);
      setLoading(false);
    }, 1000);
  }, []);

  const updateApplicationStatus = (id: number, status: 'approved' | 'rejected') => {
    setApplications(prev =>
      prev.map(app =>
        app.id === id ? { ...app, status } : app
      )
    );
  };

  const pendingCount = applications.filter(app => app.status === 'pending').length;
  const approvedCount = applications.filter(app => app.status === 'approved').length;
  const totalCount = applications.length;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        {/* Admin Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
              <div className="text-sm text-gray-600">Welcome, Admin</div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">{totalCount}</div>
                <div className="text-sm text-blue-700">Total Applications</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="text-2xl font-bold text-yellow-600">{pendingCount}</div>
                <div className="text-sm text-yellow-700">Pending Review</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-600">{approvedCount}</div>
                <div className="text-sm text-green-700">Approved</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <div className="text-2xl font-bold text-purple-600">$85,000</div>
                <div className="text-sm text-purple-700">Revenue This Month</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'dashboard', label: 'Dashboard', active: activeTab === 'dashboard' },
                { id: 'applications', label: 'Applications', active: activeTab === 'applications' },
                { id: 'courses', label: 'Courses', active: activeTab === 'courses' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    tab.active
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Applications */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Applications</h3>
                <div className="space-y-4">
                  {applications.slice(0, 5).map(app => (
                    <div key={app.id} className="flex items-center justify-between border-b border-gray-100 pb-3">
                      <div>
                        <p className="font-medium text-gray-900">{app.name}</p>
                        <p className="text-sm text-gray-600">{app.course_name}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        app.status === 'approved'
                          ? 'bg-green-100 text-green-800'
                          : app.status === 'rejected'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {app.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Add New Course
                  </button>
                  <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Export Applications
                  </button>
                  <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Generate Reports
                  </button>
                  <button className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                    Manage Users
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Application Management</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Applicant
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Course
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {applications.map(app => (
                      <tr key={app.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                              {app.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{app.name}</div>
                              <div className="text-sm text-gray-500">{app.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{app.course_name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{app.created_at}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            app.status === 'approved'
                              ? 'bg-green-100 text-green-800'
                              : app.status === 'rejected'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          {app.status === 'pending' && (
                            <>
                              <button
                                onClick={() => updateApplicationStatus(app.id, 'approved')}
                                className="text-green-600 hover:text-green-900 bg-green-100 px-3 py-1 rounded"
                              >
                                Approve
                              </button>
                              <button
                                onClick={() => updateApplicationStatus(app.id, 'rejected')}
                                className="text-red-600 hover:text-red-900 bg-red-100 px-3 py-1 rounded"
                              >
                                Reject
                              </button>
                            </>
                          )}
                          <button className="text-blue-600 hover:text-blue-900 bg-blue-100 px-3 py-1 rounded">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Management</h3>
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📚</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Course Management System</h4>
                <p className="text-gray-600 mb-6">This would integrate with the database to add, edit, and manage courses</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Add New Course
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}