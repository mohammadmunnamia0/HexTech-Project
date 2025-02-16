import { IoMailOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { LuSparkles } from "react-icons/lu";
export default function ContactPage() {
  return (
    <div id="contact" className="min-h-screen bg-white overflow-hidden mt-10">
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Main content container */}
          <div className="relative bg-white/50 backdrop-blur-lg rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/20">
            {/* Floating elements */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black text-white px-8 py-4 rounded-2xl shadow-lg">
              <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                Let's Create Something Amazing
                <LuSparkles className="w-6 h-6" />
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
                        <p className="font-medium">returnhex@gmail.com</p>
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

    // <div id="contact" className="container lg:mt-[7%] lg:mb-[4%]">
    //   <h1 className="text-4xl text-center font-semibold">Get In Touch</h1>

    //   <div className="flex flex-col md:flex-row items-center justify-center min-h-screen  p-8">
    //     {/* contact */}
    //     <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg mt-6 md:mt-0 ">
    //       <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
    //         Contact Us
    //       </h1>

    //       <form>
    //         <div className="mb-4">
    //           <label className={labelClass}>Name</label>
    //           <input
    //             type="text"
    //             placeholder="Your Name"
    //             className={inputClass}
    //           />
    //         </div>

    //         <div className="mb-4">
    //           <label className={labelClass}>Email</label>
    //           <input
    //             type="email"
    //             placeholder="Your Email"
    //             className={inputClass}
    //           />
    //         </div>

    //         <div className="mb-4">
    //           <label className={labelClass}>Message</label>
    //           <textarea
    //             rows="4"
    //             placeholder="Your Message"
    //             className={inputClass}
    //           ></textarea>
    //         </div>

    //         <button
    //           type="submit"
    //           className="w-full bg-gray-950 text-white py-3 rounded-lg hover:bg-gray-600 transition "
    //         >
    //           Send Message
    //         </button>

    //       </form>
    //     </div>

    //     {/* map */}

    //     <div className="w-full md:w-1/2 h-[529px] md:ml-6">
    //       <iframe
    //         className="w-full h-full rounded-lg shadow-lg"
    //         src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1563.7709156056817!2d90.38997794504778!3d23.8765594647279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1738858163308!5m2!1sen!2sbd"
    //         allowFullScreen="s"
    //         loading="lazy"
    //         referrerPolicy="no-referrer-when-downgrade"
    //       ></iframe>
    //     </div>
    //   </div>
    // </div>
  );
}
