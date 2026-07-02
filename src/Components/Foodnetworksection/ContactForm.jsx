import React, { useState } from "react";
import {
  Building2,
  User,
  Phone,
  Mail,
  Send,
  MessageSquare,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    personName: "",
    phone: "",
    email: "",
    enquiry: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Thank you! We'll contact you soon.");

    setFormData({
      businessName: "",
      businessType: "",
      personName: "",
      phone: "",
      email: "",
      enquiry: "",
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}

          <div>
            <span className="uppercase tracking-[5px] text-red-600 font-semibold">
              Contact Us
            </span>

            <h2 className="text-5xl font-bold mt-5">
              Let's Discuss Your
              <span className="block text-red-600">Food Requirements</span>
            </h2>

            <p className="text-gray-600 mt-8 leading-8 text-lg">
              Whether you're a hospital, aged care facility, workplace, café or
              retail store, we'd love to help with fresh daily food solutions.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white">
                  <Phone />
                </div>

                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-gray-600">+61 75532 9893</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white">
                  <Mail />
                </div>

                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">info@lishayz.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}

          <div className="bg-black rounded-3xl p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <Building2 className="absolute left-4 top-4 text-gray-400" />

                  <input
                    type="text"
                    name="businessName"
                    placeholder="Business Name"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full pl-12 p-4 rounded-xl bg-[#1b1b1b] text-white border border-gray-700 focus:border-red-600 outline-none"
                    required
                  />
                </div>

                <div className="relative">
                  <Building2 className="absolute left-4 top-4 text-gray-400" />

                  <input
                    type="text"
                    name="businessType"
                    placeholder="Business Type"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full pl-12 p-4 rounded-xl bg-[#1b1b1b] text-white border border-gray-700 focus:border-red-600 outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-4 top-4 text-gray-400" />

                  <input
                    type="text"
                    name="personName"
                    placeholder="Personal Name"
                    value={formData.personName}
                    onChange={handleChange}
                    className="w-full pl-12 p-4 rounded-xl bg-[#1b1b1b] text-white border border-gray-700 focus:border-red-600 outline-none"
                    required
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-4 text-gray-400" />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 p-4 rounded-xl bg-[#1b1b1b] text-white border border-gray-700 focus:border-red-600 outline-none"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 p-4 rounded-xl bg-[#1b1b1b] text-white border border-gray-700 focus:border-red-600 outline-none"
                  required
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-gray-400" />

                <textarea
                  rows="6"
                  name="enquiry"
                  placeholder="Your Enquiry..."
                  value={formData.enquiry}
                  onChange={handleChange}
                  className="w-full pl-12 pt-4 p-4 rounded-xl bg-[#1b1b1b] text-white border border-gray-700 focus:border-red-600 outline-none resize-none"
                  required
                />
              </div>

              <button className="w-full bg-red-600 hover:bg-red-700 duration-300 text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-3">
                <Send size={20} />
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
