export default function ContactPage() {

    
    const inputClass = "w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400";
    const labelClass = "block text-gray-700 text-sm font-bold mb-2"

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6 px-20">

    {/* map */}

      <div className="w-full md:w-1/2 h-[520px]">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1563.7709156056817!2d90.38997794504778!3d23.8765594647279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1738858163308!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>


    {/* contact */}
      <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg mt-6 md:mt-0 md:ml-6">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
          Contact Us
        </h1>

        <form>
          <div className="mb-4">
            <label className="labelClass">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className={inputClass}/>
          </div>

          <div className="mb-4">
            <label className="labelClass">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className={inputClass}/>
          </div>

          <div className="mb-4">
            <label className="labelClass">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className={inputClass}>
            </textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
