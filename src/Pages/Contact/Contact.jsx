import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);
    const loadingToast = toast.loading("Sending your message...");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Message sent successfully! We'll get back to you soon.");
      resetForm();
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
      toast.dismiss(loadingToast);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <Helmet>
        <title>Contact Us - FreshCart</title>
        <meta
          name="description"
          content="Get in touch with FreshCart customer support. We're here to help with any questions or concerns you may have."
        />
        <meta
          name="keywords"
          content="Contact FreshCart, Customer Support, Help, Contact Form"
        />
        <meta
          property="og:title"
          content="Contact Us - FreshCart"
        />
        <meta
          property="og:description"
          content="Reach out to our friendly customer support team for assistance with your FreshCart experience."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="mb-12">
        <div className="text-center py-12 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;d love to hear from you. Send us a message and we&apos;ll
            respond as soon as possible.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Get in Touch
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-map-marker-alt text-primary-600"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                <p className="text-gray-600">
                  123 Business Street
                  <br />
                  Suite 100
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-phone text-primary-600"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600">
                  <a
                    href="tel:+1234567890"
                    className="hover:text-primary-600 transition-colors"
                  >
                    +1 (234) 567-8900
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Mon-Fri 9AM-6PM EST
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-envelope text-primary-600"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">
                  <a
                    href="mailto:support@freshcart.com"
                    className="hover:text-primary-600 transition-colors"
                  >
                    support@freshcart.com
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  We respond within 24 hours
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-clock text-primary-600"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Business Hours
                </h3>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8">
            <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-gray-600 hover:text-primary-600"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-gray-600 hover:text-primary-600"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-gray-600 hover:text-primary-600"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-gray-600 hover:text-primary-600"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>

            <form
              onSubmit={formik.handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`form-control w-full px-4 py-3 ${
                      formik.touched.name && formik.errors.name
                        ? "form-control-error"
                        : ""
                    }`}
                    placeholder="Your full name"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="mt-2 text-sm text-red-600">
                      {formik.errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`form-control w-full px-4 py-3 ${
                      formik.touched.email && formik.errors.email
                        ? "form-control-error"
                        : ""
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="mt-2 text-sm text-red-600">
                      {formik.errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`form-control w-full px-4 py-3 ${
                    formik.touched.subject && formik.errors.subject
                      ? "form-control-error"
                      : ""
                  }`}
                  placeholder="What's this about?"
                />
                {formik.touched.subject && formik.errors.subject && (
                  <p className="mt-2 text-sm text-red-600">
                    {formik.errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`form-control w-full px-4 py-3 resize-none ${
                    formik.touched.message && formik.errors.message
                      ? "form-control-error"
                      : ""
                  }`}
                  placeholder="Tell us more about your inquiry..."
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="mt-2 text-sm text-red-600">
                    {formik.errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-lg w-full"
              >
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane mr-2"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">Quick answers to common questions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h3 className="font-semibold text-gray-900 mb-3">
              <i className="fa-solid fa-shipping-fast text-primary-600 mr-2"></i>
              How long does shipping take?
            </h3>
            <p className="text-gray-600">
              Standard shipping takes 3-5 business days. Express shipping
              options are available for faster delivery.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold text-gray-900 mb-3">
              <i className="fa-solid fa-undo text-primary-600 mr-2"></i>
              What&apos;s your return policy?
            </h3>
            <p className="text-gray-600">
              We offer a 30-day return policy for most items. Items must be in
              original condition with tags attached.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold text-gray-900 mb-3">
              <i className="fa-solid fa-credit-card text-primary-600 mr-2"></i>
              What payment methods do you accept?
            </h3>
            <p className="text-gray-600">
              We accept all major credit cards, PayPal, Apple Pay, and Google
              Pay for secure checkout.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold text-gray-900 mb-3">
              <i className="fa-solid fa-headset text-primary-600 mr-2"></i>
              How can I track my order?
            </h3>
            <p className="text-gray-600">
              Once your order ships, you&apos;ll receive a tracking number via
              email to monitor your package&apos;s progress.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
