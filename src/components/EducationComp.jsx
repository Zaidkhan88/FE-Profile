
import React, { useState } from 'react';

const EducationComp = () => {
  // State for holding education entries
  const [education, setEducation] = useState([
    {
      id: 1,
      institution: 'Imperial College London',
      degree: 'Masters in Marketing',
      graduationYear: '2020',
      duration: 'March 2016 - June 2018',
    },
    {
      id: 2,
      institution: 'MIT University',
      degree: "Bachelor's degree in Engineering and Technology",
      graduationYear: '2020',
      duration: 'March 2012 - June 2016',
    },
  ]);

  // State for controlling the modal (Add/Edit)
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [currentEducation, setCurrentEducation] = useState(null);

  // Handle add new education
  const handleAddNew = () => {
    setIsEditOpen(true);
    setCurrentEducation(null); // for adding new entry
  };

  // Handle edit existing education
  const handleEdit = (edu) => {
    setIsEditOpen(true);
    setCurrentEducation(edu);
  };

  // Handle save education after editing or adding
  const handleSave = (newEducation) => {
    if (currentEducation) {
      // Update existing education
      setEducation((prevState) =>
        prevState.map((edu) =>
          edu.id === currentEducation.id ? { ...edu, ...newEducation } : edu
        )
      );
    } else {
      // Add new education entry
      setEducation((prevState) => [
        ...prevState,
        { id: prevState.length + 1, ...newEducation },
      ]);
    }
    setIsEditOpen(false);
  };

  return (
    <div>
      {/* Education Section Header */}
      <div className="flex justify-between items-center">
        <h2>Education</h2>
        <button
          onClick={handleAddNew}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          ADD
        </button>
      </div>

      {/* List of Education */}
      {education.map((edu) => (
        <div key={edu.id} className="flex justify-between items-center mt-4 border-b pb-4">
          <div>
            <p className="font-semibold">{edu.institution}</p>
            <p>{edu.degree}</p>
            <p>{edu.duration}</p>
          </div>
          <button
            onClick={() => handleEdit(edu)}
            className="text-blue-500 font-semibold"
          >
            Edit
          </button>
        </div>
      ))}

      {/* Modal for Adding or Editing Education */}
      {isEditOpen && (
        <EditEducationModal
          currentEducation={currentEducation}
          handleSave={handleSave}
          setIsEditOpen={setIsEditOpen}
        />
      )}
    </div>
  );
};

const EditEducationModal = ({ currentEducation, handleSave, setIsEditOpen }) => {
  const [formData, setFormData] = useState({
    institution: currentEducation ? currentEducation.institution : '',
    degree: currentEducation ? currentEducation.degree : '',
    graduationYear: currentEducation ? currentEducation.graduationYear : '',
    duration: currentEducation ? currentEducation.duration : '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
        <h2>{currentEducation ? 'Edit Education' : 'Add New Education'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block">Institution</label>
            <input
              type="text"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block">Degree</label>
            <input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block">Graduation Year</label>
            <input
              type="text"
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block">Duration</label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mt-4 flex justify-between">
            <button
              type="button"
              onClick={() => setIsEditOpen(false)}
              className="px-4 py-2 bg-gray-300 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EducationComp;
