import React, { useState } from "react";

const EditLangComp = ({ selectedLanguages, setIsLangOpen }) => {
  const allLanguages = ["English", "Spanish", "Arabic", "Tamil", "Hindi"];
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState(selectedLanguages || []);

  // Handle language selection
  const handleSelect = (lang) => {
    setSelected((prevSelected) =>
      prevSelected.includes(lang)
        ? prevSelected.filter((l) => l !== lang)
        : [...prevSelected, lang]
    );
  };

  // Handle Save
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Languages:", selected);
    setIsLangOpen(false);
  };

  // Filtered languages based on search input
  const filteredLanguages = allLanguages.filter((lang) =>
    lang.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Preferred Language</h1>
          <button onClick={() => setIsLangOpen(false)} className="text-xl">
            &times;
          </button>
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search language"
          className="w-full border border-gray-300 rounded-lg p-2 mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Language List */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-2">
            {filteredLanguages.map((lang) => (
              <label
                key={lang}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(lang)}
                  onChange={() => handleSelect(lang)}
                />
                <span>{lang}</span>
              </label>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={() => setIsLangOpen(false)}
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

export default EditLangComp;
