
import React, { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "ad78cba1-a774-463c-8e3d-c2e871a57788"
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult("Error! Please try again.");
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-coffee-cream px-4 py-20 rounded-lg">
      <div className="max-w-6xl h-auto mx-auto bg-white p-6 rounded-lg shadow-md mb-8">

        <h2 className="text-3xl font-bold text-coffee-orange mb-4">
          Contact Us
        </h2>

        <p className="text-coffee-brown font-semibold mb-4">
          Have questions or feedback? Reach out to us!
        </p>

        <form onSubmit={onSubmit}>

          {/* Full Name */}
          <label className="block font-semibold text-coffee-brown mb-2">
             Name
          </label>

          <input
            className="pl-4 border border-coffee-orange w-full py-2.5
            focus:outline-none focus:ring-2 focus:ring-coffee-orange
            rounded-lg mb-4"
            type="text"
            name="name"
            required
            placeholder="Your name here..."
          />
          {/* Number */}
          <label className="block font-semibold text-coffee-brown mb-2">
            Phone 
          </label>
  
          <input
            className="pl-4 border border-coffee-orange w-full py-2.5
            focus:outline-none focus:ring-2 focus:ring-coffee-orange
            rounded-lg mb-4"
            type="text"
            name="number"
            required
            placeholder="Your number here..."
          />
          {/* Email */}
          <label className="block font-semibold text-coffee-brown mb-2">
            Email
          </label>

          <input
            className="pl-4 border border-coffee-orange w-full py-2.5
            focus:outline-none focus:ring-2 focus:ring-coffee-orange
            rounded-lg mb-4"
            type="email"
            name="email"
            required
            placeholder="Your email here..."
          />

          {/* Message */}
          <label className="block font-semibold text-coffee-brown mb-2">
            Message
          </label>

          <textarea
            name="message"
            required
            rows="5"
            placeholder="Your message here..."
            className="border border-coffee-orange w-full p-3
            rounded-lg shadow-md focus:outline-none
            focus:ring-2 focus:ring-coffee-orange mb-4"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-coffee-orange hover:bg-coffee-brown
            text-white font-bold py-2 w-full text-center rounded-lg"
          >
            Submit
          </button>

          {/* Result */}
          <p className="text-center mt-4 text-green-500 font-semibold">
            {result}
          </p>

        </form>
      </div>
    </div>
  );
}

export default Contact;

