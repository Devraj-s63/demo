import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Banner Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to EduInstitute
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Shaping Your Future with Quality Education
            </p>
            <div className="space-x-4">
              <a href="/courses" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Explore Courses
              </a>
              <a href="/apply" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Apply Now
              </a>
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
              We provide comprehensive education solutions with experienced faculty, modern facilities,
              and practical learning approaches that prepare you for real-world success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-3">Expert Faculty</h3>
              <p className="text-gray-600">Learn from industry experts with years of experience in their fields.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-3">Practical Learning</h3>
              <p className="text-gray-600">Hands-on experience with real-world projects and industry-standard tools.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Career Ready</h3>
              <p className="text-gray-600">Graduate with skills that employers are looking for and land your dream job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-gray-600">
              Discover our most popular courses designed to boost your career prospects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img src="https://placehold.co/400x300?text=Web+Development+Course" alt="Web Development" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">Full Stack Web Development</h3>
              <p className="text-gray-600 mb-4">6 months • $2,999</p>
              <a href="/courses" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</a>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <img src="https://placehold.co/400x300?text=Data+Science+Course" alt="Data Science" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Science & Analytics</h3>
              <p className="text-gray-600 mb-4">8 months • $3,499</p>
              <a href="/courses" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</a>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <img src="https://placehold.co/400x300?text=Digital+Marketing" alt="Digital Marketing" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">Digital Marketing Mastery</h3>
              <p className="text-gray-600 mb-4">4 months • $1,999</p>
              <a href="/courses" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</a>
            </div>
          </div>

          <div className="text-center">
            <a href="/courses" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              View All Courses
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}