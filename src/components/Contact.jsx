import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Contact Me
        </h2>

        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full p-4 bg-gray-100 text-black rounded-lg border border-gray-300 placeholder-black font-bold"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full p-4 bg-gray-100 text-black rounded-lg border border-gray-300 placeholder-black font-bold"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="w-full p-4 bg-gray-100 text-black rounded-lg border border-gray-300 placeholder-black font-bold"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
