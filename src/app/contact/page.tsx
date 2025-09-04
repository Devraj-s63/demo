import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Get in Touch with EduInstitute
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm />
          </div>
        </section>

        {/* Contact Info & Map */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">🏢</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">
                        123 Education Street<br />
                        Tech City, TC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-3xl mr-4">📞</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">+1 (555) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-3xl mr-4">📧</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@eduinstitute.edu</p>
                      <p className="text-gray-600">admissions@eduinstitute.edu</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-3xl mr-4">🕒</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Office Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
                <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p className="text-gray-600">Interactive Google Map</p>
                    <p className="text-sm text-gray-500">Click to view our location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}