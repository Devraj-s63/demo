import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ApplicationForm from '@/components/ApplicationForm';

export default function ApplicationPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 mb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Apply Today</h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Start Your Career Journey with EduInstitute
            </p>
          </div>
        </section>

        {/* Application Form */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ApplicationForm />
        </div>

        {/* FAQ Section */}
        <section className="py-16 bg-white mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900">How long does the application process take?</h4>
                  <p className="text-gray-600">We typically respond within 24-48 hours. Once approved, you'll receive further instructions for payment and enrollment.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Do I need any prerequisites?</h4>
                  <p className="text-gray-600">Most courses require a high school diploma. Specific technical courses may have additional requirements which are listed in the course details.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900">What payment methods do you accept?</h4>
                  <p className="text-gray-600">We accept credit cards, debit cards, bank transfers, and PayPal. Flexible payment plans are available for select courses.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Can I change my course after enrollment?</h4>
                  <p className="text-gray-600">Yes, you can request a course change within the first week of enrollment. Contact our admissions team for assistance.</p>
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