import React, { useEffect, useState } from "react";
import axios from "axios";

function AsideProfile() {
  const [personalInfo, setPersonalInfo] = useState(null);
  const userId = "64df1f2a6f9b3b001f4c5678";
  useEffect(() => {
    axios.get(`http://localhost:5000/api/user/${userId}`)
      .then(response => setPersonalInfo(response.data))
      .catch(error => console.error("Error fetching user data:", error));
  }, [userId]);

  if (!personalInfo) return <p>Loading...</p>;

  return (
    <div className="flex flex-col md:flex-row mt-6 px-4 md:px-12">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
          <h2 className="mt-4 font-semibold">{personalInfo.firstName} {personalInfo.lastName}</h2> 
          {/* Fixed: Use `personalInfo.firstName` & `personalInfo.lastName` */}
          <nav className="mt-6 space-y-2">
            <a href="#" className="block text-gray-700 font-medium">Profile</a>
            <a href="#" className="block text-gray-700">Education</a>
            <a href="#" className="block text-gray-700">Work Experience</a>
          </nav>
        </div>
      </aside>
    </div>
  );
}

export default AsideProfile;
