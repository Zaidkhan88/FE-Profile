import React, { useState } from "react";
import axios from "axios";

const EditPersonalComp = ({ personalInfo, setIsOpen }) => {
  const [formData, setFormData] = useState(personalInfo);

  const handleChange = (e) => {
    const { name, value } = e.target; // Corrected destructuring
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/user/${formData._id}`, // Update API URL
        formData
      );
      console.log("Updated Successfully:", response.data);
      setIsOpen(false);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Edit Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName" // Corrected name
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName" // Corrected name
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Last Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email} // Fixed the incorrect mapping
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Email"
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Age"
          />
          <input
            type="text"
            name="address"
            value={formData.address1}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Address"
          />
          <div className="flex gap-2">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="City"
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="State"
            />
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Country"
            />
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Pincode"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPersonalComp;
