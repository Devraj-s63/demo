import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">About EduInstitute</h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Empowering Education, Inspiring Excellence
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To provide high-quality, accessible education that empowers individuals to achieve their
                  professional goals and contribute meaningfully to society. We believe that education is
                  the key to unlocking human potential and creating a better future for all.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be recognized as the premier educational institution that bridges the gap between
                  traditional learning and modern industry requirements, preparing students for successful
                  careers in a rapidly evolving digital world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose EduInstitute?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our commitment to excellence and innovative approach sets us apart from other educational institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-3">Award Winning</h3>
                <p className="text-gray-600">Recognized excellence in delivering quality education since 2015.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-6xl mb-4">👨‍🏫</div>
                <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
                <p className="text-gray-600">Learn from industry veterans with 10+ years of professional experience.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-6xl mb-4">💻</div>
                <h3 className="text-xl font-semibold mb-3">Modern Curriculum</h3>
                <p className="text-gray-600">Stay ahead with technology and industry standards updated regularly.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3">Career Support</h3>
                <p className="text-gray-600">Dedicated placement assistance and career counseling services.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
              <p className="text-gray-600">Extraordinary people who make EduInstitute exceptional</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <img src="https://placehold.co/150x150?text=Executive+Director" alt="Executive Director" className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Dr. Sarah Johnson</h3>
                <p className="text-blue-600 mb-2">Executive Director</p>
                <p className="text-gray-600 text-sm">Ph.D. in Educational Leadership, 15+ years in education administration.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <img src="https://placehold.co/150x150?text=Program+Director" alt="Program Director" className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Prof. Michael Chen</h3>
                <p className="text-blue-600 mb-2">Program Director</p>
                <p className="text-gray-600 text-sm">Former CTO at Fortune 500 company, expertise in tech education.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <img src="https://placehold.co/150x150?text=Admissions+Director" alt="Admission Director" className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Lisa Rodriguez</h3>
                <p className="text-blue-600 mb-2">Admissions Director</p>
                <p className="text-gray-600 text-sm">M.Ed. in Educational Counseling, dedicated to student success.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">EduInstitute by Numbers</h2>
              <p className="text-blue-100">Our impact on the educational landscape</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-blue-500 p-6 rounded-lg">
                <div className="text-4xl font-bold mb-2">25,000+</div>
                <div className="text-blue-100">Students Trained</div>
              </div>
              <div className="bg-blue-500 p-6 rounded-lg">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-blue-100">Job Placement Rate</div>
              </div>
              <div className="bg-blue-500 p-6 rounded-lg">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Corporate Partners</div>
              </div>
              <div className="bg-blue-500 p-6 rounded-lg">
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-blue-100">Expert Instructors</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}