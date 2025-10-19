import React, { useState } from "react";

const BookingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-20">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-10">Book Your Stay</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Booking Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Booking Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Check-in</label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Check-out</label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Guests</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              Confirm Booking
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2 text-gray-700">
            <p><span className="font-medium">Check-in:</span> {formData.checkIn || "—"}</p>
            <p><span className="font-medium">Check-out:</span> {formData.checkOut || "—"}</p>
            <p><span className="font-medium">Guests:</span> {formData.guests}</p>
            <p><span className="font-medium">Total Price:</span> ${(formData.guests * 120).toFixed(2)}</p>
          </div>
          <p className="mt-6 text-sm text-gray-500">*Prices include taxes and service fees</p>
        </div>
      </div>

      {/* Cancellation Policy */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">Cancellation Policy</h2>
        <p className="text-gray-700">
          You can cancel for a <span className="font-semibold">full refund</span> up to 
          <span className="text-blue-600"> 7 days before check-in</span>. 
          Cancellations made within 7 days of check-in will receive a 
          <span className="font-semibold"> 50% refund</span>. No refunds will be given after check-in.
        </p>
      </div>

      {/* Ground Rules */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">Ground Rules</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Follow the house rules and respect quiet hours.</li>
          <li>Treat your host’s home like your own.</li>
          <li>No smoking inside the property.</li>
          <li>No parties or unregistered guests allowed.</li>
          <li>Pets allowed only upon request.</li>
        </ul>
      </div>
    </div>
  );
};

export default BookingPage;
