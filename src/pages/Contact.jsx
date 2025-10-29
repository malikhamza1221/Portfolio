import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_2nkwp1t",   
        "template_drtbn36",    
        form.current,
        "C5lRbqbmybyaUHuT6"     
      )
      .then(
        (result) => {
          console.log("✅ Email Sent:", result.text);
          setStatus("✅ Message Sent Successfully!");
          setIsSending(false);
          form.current.reset();
        },
        (error) => {
          console.error("❌ Email Error:", error.text);
          setStatus("❌ Failed to Send Message. Try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <section className="min-h-screen bg-linear-to-b from-[#0B1C57] via-[#16277A] to-[#0B1C57] flex flex-col items-center justify-center px-6 pt-28 pb-16 overflow-x-hidden">
      {/* 🔹 Heading Section */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Get in <span className="text-[#ff6b00]">Touch</span>
        </h2>
        <p className="text-gray-300 mt-3 max-w-xl mx-auto">
          I’d love to hear from you! Whether you have a project idea, question,
          or just want to say hello — feel free to reach out.
        </p>
      </div>

      {/* 🔹 Contact Section */}
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
        {/* 📬 Left Info */}
        <div className="flex-1 flex flex-col space-y-6">
          {[
            {
              icon: <Mail size={22} />,
              title: "Email",
              value: "arainshab917@gmail.com",
            },
            {
              icon: <Phone size={22} />,
              title: "Phone",
              value: "+92 3706829230",
            },
            {
              icon: <MapPin size={22} />,
              title: "Location",
              value: "Bahawalpur, Punjab, Pakistan",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-[#16277A]/50 border border-[#ffffff22] shadow-lg rounded-2xl p-5 hover:shadow-[0_0_25px_rgba(255,107,0,0.4)] transition-all duration-300"
              data-aos="fade-right"
              data-aos-delay={i * 200}
            >
              <div className="p-3 bg-[#ff6b00] rounded-full text-white">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ✉️ Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex-1 bg-[#16277A]/60 border border-[#ffffff22] rounded-3xl shadow-lg p-8 md:p-10 backdrop-blur-md"
          data-aos="fade-left"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Send Me a Message
          </h3>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 bg-[#0B1C57]/40 border border-[#ffffff33] text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b00] transition-all duration-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 bg-[#0B1C57]/40 border border-[#ffffff33] text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b00] transition-all duration-300"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              className="w-full p-3 bg-[#0B1C57]/40 border border-[#ffffff33] text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b00] transition-all duration-300"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 bg-[#0B1C57]/40 border border-[#ffffff33] text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b00] resize-none transition-all duration-300"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="mt-6 w-full py-3 rounded-lg bg-linear-to-r from-[#ff6b00] to-[#ff8533] text-white font-semibold tracking-wide hover:shadow-[0_0_25px_rgba(255,107,0,0.6)] hover:scale-[1.03] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="mt-4 text-center text-sm text-gray-200">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
