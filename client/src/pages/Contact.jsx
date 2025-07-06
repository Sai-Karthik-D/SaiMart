import React from "react";
import toast from "react-hot-toast";

const onSubmitHandler = (e) => {
  e.preventDefault(); // prevent page reload
  toast.success("Message submitted successfully!");
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-10 md:px-20">
      <div className="max-w-3xl mx-auto bg-[#f9f9f9] shadow-md rounded-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-[#2e7d32]">Contact Us</h2>
        <p className="text-gray-600">
          Have a question, feedback, or an issue with your order? Fill out the form
          below or email us at <span className="text-[#2e7d32]">support@saimart.com</span>
        </p>

        <form className="space-y-5" onSubmit={onSubmitHandler}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e7d32]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e7d32]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="How can we help you?"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e7d32]"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#2e7d32] text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
