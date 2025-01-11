import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-6">
              Have questions or want to collaborate? Feel free to reach out!
            </p>

            <div className="flex items-center mb-4">
              <FaPhone className="w-6 h-6 text-primary mr-4" />
              <span className="text-lg">0341-6246035</span>
            </div>

            <div className="flex items-center mb-4">
              <FaEnvelope className="w-6 h-6 text-primary mr-4" />
              <span className="text-lg">muhammadatiq72315@gmail.com</span>
            </div>

            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="w-6 h-6 text-primary mr-4" />
              <span className="text-lg">Karachi, Pakistan</span>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write your message here"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
