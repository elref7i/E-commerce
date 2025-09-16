import { Helmet } from "react-helmet";

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us - FreshCart</title>
        <meta
          name="description"
          content="Learn about FreshCart's mission to provide quality products with exceptional customer service. Discover our story and values."
        />
        <meta
          name="keywords"
          content="About FreshCart, Company Story, Mission, Values, Online Shopping"
        />
        <meta
          property="og:title"
          content="About Us - FreshCart"
        />
        <meta
          property="og:description"
          content="Discover FreshCart's commitment to quality, customer satisfaction, and innovation in online shopping."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="mb-12">
        <div className="text-center py-12 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About FreshCart
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in online shopping, delivering quality products
            and exceptional service since day one.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                FreshCart was born from a simple idea: making online shopping
                more accessible, reliable, and enjoyable for everyone. Founded
                in 2024, we&apos;ve grown from a small startup to one of the
                most trusted e-commerce platforms.
              </p>
              <p>
                Our journey began when we realized that many online shopping
                experiences were complicated, slow, and unreliable. We set out
                to change that by creating a platform that prioritizes user
                experience, product quality, and customer satisfaction.
              </p>
              <p>
                Today, we&apos;re proud to serve thousands of customers
                worldwide, offering a curated selection of products from trusted
                brands with fast, reliable delivery and exceptional customer
                support.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  10K+
                </div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  5K+
                </div>
                <div className="text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600">Customer Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  99%
                </div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-bullseye text-primary-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-center">
              To provide our customers with access to high-quality products at
              competitive prices, delivered with exceptional service and
              convenience. We believe everyone deserves a great shopping
              experience.
            </p>
          </div>

          <div className="card p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-eye text-primary-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-center">
              To become the world&apos;s most trusted and innovative e-commerce
              platform, setting new standards for customer experience, product
              quality, and technological advancement in online retail.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These core values guide everything we do and shape our company
            culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-heart text-primary-600 text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Customer First
            </h3>
            <p className="text-gray-600">
              Our customers are at the heart of everything we do. We listen,
              learn, and continuously improve based on their feedback.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-shield-halved text-primary-600 text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Quality & Trust
            </h3>
            <p className="text-gray-600">
              We maintain the highest standards of product quality and build
              trust through transparency and reliability.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-rocket text-primary-600 text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
            <p className="text-gray-600">
              We embrace new technologies and innovative solutions to enhance
              the shopping experience for our customers.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-handshake text-primary-600 text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
            <p className="text-gray-600">
              We conduct business with honesty, fairness, and respect for all
              our stakeholders and partners.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-users text-primary-600 text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
            <p className="text-gray-600">
              We believe in building strong communities and supporting the
              people and causes that matter most.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-leaf text-primary-600 text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Sustainability
            </h3>
            <p className="text-gray-600">
              We&apos;re committed to sustainable practices and environmental
              responsibility in all our operations.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The passionate individuals behind FreshCart&apos;s success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card p-6 text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <i className="fa-solid fa-user text-gray-400 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Sarah Johnson
            </h3>
            <p className="text-primary-600 font-medium mb-3">CEO & Founder</p>
            <p className="text-gray-600 text-sm">
              Visionary leader with 10+ years in e-commerce and technology.
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <i className="fa-solid fa-user text-gray-400 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Michael Chen
            </h3>
            <p className="text-primary-600 font-medium mb-3">CTO</p>
            <p className="text-gray-600 text-sm">
              Technology expert focused on innovation and user experience.
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <i className="fa-solid fa-user text-gray-400 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Emily Rodriguez
            </h3>
            <p className="text-primary-600 font-medium mb-3">
              Head of Customer Success
            </p>
            <p className="text-gray-600 text-sm">
              Customer advocate ensuring exceptional service and satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="card p-12 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Shop with Us?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers and discover amazing products
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/prouducts"
              className="btn bg-white text-primary-600 hover:bg-gray-100 btn-lg"
            >
              <i className="fa-solid fa-shopping-bag mr-2"></i>
              Start Shopping
            </a>
            <a
              href="/contact"
              className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600 btn-lg"
            >
              <i className="fa-solid fa-envelope mr-2"></i>
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
