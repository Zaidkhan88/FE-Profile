import React, { useState } from 'react';

const WorkExperience = () => {
  const [experience, setExperience] = useState([
    {
      id: 1,
      jobTitle: 'Software Engineer',
      company: 'Amazon',
      duration: 'July 2018 - Present',
    },
  ]);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [currentExperience, setCurrentExperience] = useState(null);

  // Handle add new experience
  const handleAddNew = () => {
    setIsEditOpen(true);
    setCurrentExperience(null);
  };

  // Handle edit experience
  const handleEdit = (exp) => {
    setIsEditOpen(true);
    setCurrentExperience(exp);
  };

  // Handle save experience after editing or adding
  const handleSave = (newExperience) => {
    if (currentExperience) {
      setExperience((prevState) =>
        prevState.map((exp) =>
          exp.id === currentExperience.id ? { ...exp, ...newExperience } : exp
        )
      );
    } else {
      setExperience((prevState) => [
        ...prevState,
        { id: prevState.length + 1, ...newExperience },
      ]);
    }
    setIsEditOpen(false);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Work Experience</h2>
        <button
          onClick={handleAddNew}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          ADD
        </button>
      </div>

      {experience.map((exp) => (
        <div key={exp.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center mb-4">
          <div>
            <p className="font-semibold">{exp.jobTitle}</p>
            <p className="text-gray-500">{exp.company}</p>
            <p className="text-gray-400">{exp.duration}</p>
          </div>
          <button
            onClick={() => handleEdit(exp)}
            className="text-gray-600 font-semibold border px-3 py-1 rounded-md"
          >
            Edit ✏️
          </button>
        </div>
      ))}

      {isEditOpen && (
        <EditExperienceModal
          currentExperience={currentExperience}
          handleSave={handleSave}
          setIsEditOpen={setIsEditOpen}
        />
      )}
    </div>
  );
};

const EditExperienceModal = ({ currentExperience, handleSave, setIsEditOpen }) => {
  const [formData, setFormData] = useState({
    jobTitle: currentExperience ? currentExperience.jobTitle : '',
    company: currentExperience ? currentExperience.company : '',
    duration: currentExperience ? currentExperience.duration : '',
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold">{currentExperience ? 'Edit Experience' : 'Add Experience'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
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

export default WorkExperience;
