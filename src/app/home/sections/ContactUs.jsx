import { IoMailOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { LuSparkles } from "react-icons/lu";
export default function ContactPage() {
  return (
    <div id="contact" className="lg:mt-32 mt-10 bg-white overflow-hidden">
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Main content container */}
          <div className="relative bg-white/50 backdrop-blur-lg rounded-[2.5rem] p-8 md:p-12 border border-white/20">
            {/* Floating elements */}
            <div className="lg:block hidden absolute lg:w-[60%] w-full lg:-top-12  left-1/2 -translate-x-1/2 bg-black text-white px-8 py-4 rounded-2xl ">
              <h1 className="text-2xl lg:text-4xl font-bold flex items-center gap-4 ">
                Let's Create Something Amazing
                <LuSparkles className="w-6 h-6 mt-1"/>
              </h1>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-12">
              {/* Left side - Floating cards */}
              <div className="space-y-8">
                <div className="relative bg-white rounded-2xl p-6 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute -top-4 -left-4 bg-black text-white p-3 rounded-xl shadow-lg">
                    <IoMailOutline className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2 pl-8">Get in Touch</h2>
                  <p className="text-gray-600">Ready to start your next project? We're here to turn your ideas into reality.</p>
                </div>
                <div className="relative bg-black text-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IoMailOutline className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Email us at</p>
                        <p className="font-medium">returnhex.official@gmail.com</p>
                      </div>
                    </div>

                    <div className="w-full h-px bg-white/20"></div>

                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2301&q=80"
                        alt="Office"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-medium">Visit our office</p>
                        <p className="text-sm text-gray-300">123 Innovation Hub, Tech City</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Floating form */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                <form className="space-y-6">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-900">Your Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-black focus:ring-0 transition-colors duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-900">Email Address</label>
                    <div className="relative">
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-black focus:ring-0 transition-colors duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-900">Your Message</label>
                    <div className="relative">
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-black focus:ring-0 transition-colors duration-200"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-4 px-6 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors duration-200"
                  >
                    Send Message
                    <FiSend className="w-4 h-4" />
                  </button>
                </form>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-100 rounded-full"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
