const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">EduInstitute</h3>
            <p className="text-gray-300 mb-4">
              Empowering students with quality education and practical skills for their future success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/courses" className="text-gray-300 hover:text-white">Courses</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/apply" className="text-gray-300 hover:text-white">Apply Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📍 123 Education Street</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📧 info@eduinstitute.edu</li>
              <li>🕒 Mon-Fri: 9AM-6PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 EduInstitute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer