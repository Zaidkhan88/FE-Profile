import React from "react";

import ProfilePersonal from "./ProfilePersonal"
import BioComp from "./BioComp";
import LanguageComp from "./LanguageComp";
import EducationComp from './EducationComp'
import WorkExperience from './WorkExp'
import Header from './Header'
import AsideProfile from "./AsideProfile";

const ProfilePage = () => {
   

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <Header/>
    {/* Profile Content */}
        <main className="w-full md:w-3/4 p-6 bg-white shadow-md rounded-lg ml-4">
          <h2 className="text-lg font-semibold mb-4">Profile</h2>
         
          {/* Personal Information */}
          <section className="mb-6">
            <ProfilePersonal/>
          </section>
          <section className="mb-6">
            <h3 className="text-md font-medium">Contact Information</h3>
            <p><strong>Email:</strong> Rakeshraushan@Gmail.com</p>
            <p><strong>Phone:</strong> +91 9922004856</p>
          </section>
          <section className="mb-6">
           <BioComp/>
          </section>
          <section className="mb-6">
           <LanguageComp/>
          </section>
          <section className="mb-6">
           <EducationComp/>
          </section>
          <section className="mb-6">
           <WorkExperience/>
          </section>

         
        </main>
      </div>
    
  );
};

export default ProfilePage;
 
