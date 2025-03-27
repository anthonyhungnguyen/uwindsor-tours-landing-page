"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const Survey = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "",
    feedbackType: "",
    rating: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      userType: "",
      feedbackType: "",
      rating: "",
      message: "",
    });

    // Reset the submitted state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="survey" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              Your Feedback Matters
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Help us improve the UWindsor Tours experience
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
          >
            {submitted ? (
              <div className="text-center py-8">
                <svg
                  className="w-16 h-16 text-yellow-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                <p className="text-gray-300">
                  Your feedback has been submitted successfully.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="userType"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      I am a...
                    </label>
                    <select
                      id="userType"
                      name="userType"
                      value={formData.userType}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="prospective">Prospective Student</option>
                      <option value="current">Current Student</option>
                      <option value="faculty">Faculty/Staff</option>
                      <option value="alumni">Alumni</option>
                      <option value="visitor">Visitor</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="feedbackType"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Feedback Type
                    </label>
                    <select
                      id="feedbackType"
                      name="feedbackType"
                      value={formData.feedbackType}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="suggestion">Suggestion</option>
                      <option value="issue">Technical Issue</option>
                      <option value="content">Content Feedback</option>
                      <option value="general">General Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    How would you rate your experience?
                  </label>
                  <div className="flex items-center justify-between gap-2 py-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <label
                        key={rating}
                        className="flex flex-col items-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="rating"
                          value={rating}
                          checked={formData.rating === rating.toString()}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-colors ${
                            formData.rating === rating.toString()
                              ? "bg-yellow-400 text-blue-900"
                              : "bg-white/10 text-gray-300 hover:bg-white/20"
                          }`}
                        >
                          {rating}
                        </span>
                        <span className="text-xs mt-1 text-gray-400">
                          {rating === 1
                            ? "Poor"
                            : rating === 2
                            ? "Fair"
                            : rating === 3
                            ? "Good"
                            : rating === 4
                            ? "Great"
                            : "Excellent"}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Your Feedback
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900 font-medium rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                  >
                    Submit Feedback
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 -right-24 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
    </section>
  );
};
