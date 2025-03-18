import { useState, useEffect } from "react";
import axios from "axios";
import EditPersonalComp from "./EditPersonalComp";

const PersonalInformation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [personalInfo, setPersonalInfo] = useState(null);

  const userId = "64df1f2a6f9b3b001f4c5678"; // Replace with actual user ID

  useEffect(() => {
    axios.get(`http://localhost:5000/api/user/${userId}`)
      .then(response => setPersonalInfo(response.data))
      .catch(error => console.error("Error fetching user data:", error));
  }, [isOpen]);

  if (!personalInfo) return <p>Loading...</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">First Name</p>
          <p className="font-medium">{personalInfo.firstName}</p>
        </div>
        <div>
          <p className="text-gray-600">Last Name</p>
          <p className="font-medium">{personalInfo.lastName}</p>
        </div>
        <div>
          <p className="text-gray-600">Age</p>
          <p className="font-medium">{personalInfo.age}</p>
        </div>
        <div>
          <p className="text-gray-600">Gender</p>
          <p className="font-medium">{personalInfo.gender}</p>
        </div>
        <div className="col-span-2">
          <p className="text-gray-600">Address</p>
          <p className="font-medium">
            {`${personalInfo.address1}, ${personalInfo.city}, ${personalInfo.state}, ${personalInfo.pincode}`}
          </p>
        </div>
      </div>
      <button 
        className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
        onClick={() => setIsOpen(true)}
      >
        Edit
      </button>
      {isOpen && <EditPersonalComp {...{ personalInfo, setIsOpen, setPersonalInfo, userId }} />}
    </div>
  );
};

export default PersonalInformation;
