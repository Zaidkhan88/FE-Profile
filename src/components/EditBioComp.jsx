import React, { useState } from "react";

const EditBioComp = ({ personalInfo, setIsBioOpen }) => {
  const [biodata, setBiodata] = useState(personalInfo);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page refresh
    console.log("Bio Changes done:", biodata);
    setIsBioOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
        {/* Modal Header */}
        <h1 className="text-xl font-semibold">Edit Bio</h1>

        <form onSubmit={handleSubmit}>
          {/* Bio Textarea */}
          <textarea
            className="w-full h-40 border border-gray-300 rounded-lg p-3 mt-4 focus:ring focus:ring-blue-300"
            value={biodata.bio}
            onChange={(e) => setBiodata({ ...biodata, bio: e.target.value })}
          />

          {/* Buttons */}
          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="button"
              onClick={() => setIsBioOpen(false)}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBioComp;
