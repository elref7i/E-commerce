import { Helmet } from "react-helmet";
import { useState } from "react";

export default function HelpCenter() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      category: "Account & Orders",
      questions: [
        {
          question: "How do I create an account?",
          answer:
            "Click on the 'Sign Up' button in the top right corner, fill in your details, and verify your email address. It only takes a few minutes!",
        },
        {
          question: "How can I track my order?",
          answer:
            "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and visiting the 'Orders' section.",
        },
        {
          question: "Can I modify or cancel my order?",
          answer:
            "You can modify or cancel your order within 30 minutes of placing it. After that, please contact our customer support team for assistance.",
        },
        {
          question: "How do I view my order history?",
          answer:
            "Log into your account and click on 'Orders' in the navigation menu. You'll see all your past and current orders with detailed information.",
        },
      ],
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          question: "What are your shipping options?",
          answer:
            "We offer standard shipping (3-5 business days), express shipping (1-2 business days), and same-day delivery in select areas.",
        },
        {
          question: "Do you ship internationally?",
          answer:
            "Currently, we ship within the United States. International shipping will be available soon. Stay tuned for updates!",
        },
        {
          question: "What if I'm not home when my package arrives?",
          answer:
            "If you're not available, the carrier will leave your package in a safe location or with a neighbor. You can also request to pick it up at a nearby facility.",
        },
        {
          question: "How much does shipping cost?",
          answer:
            "Shipping costs vary based on your location and chosen shipping method. Free shipping is available on orders over $50.",
        },
      ],
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          question: "What's your return policy?",
          answer:
            "We offer a 30-day return policy for most items. Items must be in original condition with tags attached and original packaging.",
        },
        {
          question: "How do I return an item?",
          answer:
            "Log into your account, go to 'Orders', select the order you want to return, and follow the return instructions. You can also contact our support team.",
        },
        {
          question: "How long do refunds take?",
          answer:
            "Once we receive your returned item, refunds are processed within 5-7 business days. The refund will appear on your original payment method.",
        },
        {
          question: "Can I exchange an item instead of returning it?",
          answer:
            "Yes! You can exchange items for a different size or color. Contact our customer support team to initiate an exchange.",
        },
      ],
    },
    {
      category: "Payment & Billing",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay.",
        },
        {
          question: "Is my payment information secure?",
          answer:
            "Yes! We use industry-standard encryption to protect your payment information. We never store your full credit card details on our servers.",
        },
        {
          question: "Can I use multiple payment methods?",
          answer:
            "Currently, you can only use one payment method per order. However, you can use gift cards in combination with other payment methods.",
        },
        {
          question: "Do you offer payment plans?",
          answer:
            "We offer flexible payment options through PayPal Credit and Klarna for eligible purchases. Look for these options at checkout.",
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "The website isn't loading properly. What should I do?",
          answer:
            "Try refreshing the page, clearing your browser cache, or using a different browser. If the problem persists, contact our technical support team.",
        },
        {
          question: "I can't log into my account. Help!",
          answer:
            "Make sure you're using the correct email and password. You can reset your password using the 'Forgot Password' link on the login page.",
        },
        {
          question: "The mobile app isn't working. What's wrong?",
          answer:
            "Make sure you have the latest version of the app installed. Try logging out and logging back in, or contact our support team for assistance.",
        },
        {
          question: "How do I update my account information?",
          answer:
            "Log into your account, go to 'Account Settings', and update your information. Don't forget to save your changes!",
        },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Help Center - FreshCart</title>
        <meta
          name="description"
          content="Get help with your FreshCart account, orders, shipping, returns, and more. Find answers to frequently asked questions."
        />
        <meta
          name="keywords"
          content="Help Center, FAQ, Customer Support, FreshCart Help, Order Support"
        />
        <meta
          property="og:title"
          content="Help Center - FreshCart"
        />
        <meta
          property="og:description"
          content="Find answers to your questions and get the help you need with your FreshCart experience."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="mb-12">
        <div className="text-center py-12 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Help Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find answers to your questions and get the support you need
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="search"
                placeholder="Search for help..."
                className="form-control w-full pl-12 pr-4 py-3 text-lg"
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i className="fa-solid fa-search text-gray-400 text-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Cards */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-shopping-bag text-primary-600 text-2xl"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Order Help</h3>
            <p className="text-gray-600 text-sm mb-4">
              Track orders, manage returns, and get order support
            </p>
            <a
              href="#orders"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Get Help →
            </a>
          </div>

          <div className="card p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-shipping-fast text-primary-600 text-2xl"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Shipping Info</h3>
            <p className="text-gray-600 text-sm mb-4">
              Delivery options, shipping times, and tracking
            </p>
            <a
              href="#shipping"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Learn More →
            </a>
          </div>

          <div className="card p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-undo text-primary-600 text-2xl"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Returns</h3>
            <p className="text-gray-600 text-sm mb-4">
              Return policy, exchanges, and refund information
            </p>
            <a
              href="#returns"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              View Policy →
            </a>
          </div>

          <div className="card p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-headset text-primary-600 text-2xl"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Contact Support
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Get in touch with our customer support team
            </p>
            <a
              href="/contact"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Contact Us →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Browse our comprehensive FAQ section for quick answers
          </p>
        </div>

        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                  <i className="fa-solid fa-folder text-primary-600"></i>
                </div>
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.questions.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg"
                  >
                    <button
                      onClick={() => toggleFAQ(`${categoryIndex}-${index}`)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <i
                        className={`fa-solid fa-chevron-down transition-transform ${
                          openFAQ === `${categoryIndex}-${index}`
                            ? "rotate-180"
                            : ""
                        }`}
                      ></i>
                    </button>

                    {openFAQ === `${categoryIndex}-${index}` && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="mb-16">
        <div className="card p-12 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Our friendly customer
            support team is here to help you 24/7.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-envelope text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="opacity-90 text-sm mb-2">Get help via email</p>
              <a
                href="mailto:support@freshcart.com"
                className="text-white hover:underline"
              >
                support@freshcart.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-phone text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-2">Phone Support</h3>
              <p className="opacity-90 text-sm mb-2">Call us directly</p>
              <a
                href="tel:+1234567890"
                className="text-white hover:underline"
              >
                +1 (234) 567-8900
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-comments text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="opacity-90 text-sm mb-2">Chat with us online</p>
              <button className="text-white hover:underline">Start Chat</button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn bg-white text-primary-600 hover:bg-gray-100 btn-lg"
            >
              <i className="fa-solid fa-envelope mr-2"></i>
              Contact Support
            </a>
            <a
              href="/prouducts"
              className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600 btn-lg"
            >
              <i className="fa-solid fa-shopping-bag mr-2"></i>
              Continue Shopping
            </a>
          </div>
        </div>
      </section>

      {/* Help Articles */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Popular Help Articles
          </h2>
          <p className="text-gray-600">
            Browse our most helpful articles and guides
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-user-plus text-primary-600"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Getting Started Guide
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Learn how to create an account, place your first order, and
                  navigate the platform.
                </p>
                <a
                  href="#"
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  Read Article →
                </a>
              </div>
            </div>
          </div>

          <div className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-credit-card text-primary-600"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Payment Methods
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Everything you need to know about payment options and
                  security.
                </p>
                <a
                  href="#"
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  Read Article →
                </a>
              </div>
            </div>
          </div>

          <div className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-shield-halved text-primary-600"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Account Security
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Keep your account safe with these security tips and best
                  practices.
                </p>
                <a
                  href="#"
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  Read Article →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
