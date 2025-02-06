export default function ContactPage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat p-6"
      style={{ backgroundImage: "" }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
          Contact Us
        </h1>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-400 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message Send Message
           
          </button>
       
        </form>
      </div>
    </div>
  );
}
