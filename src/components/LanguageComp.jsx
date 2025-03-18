import React from 'react'
import { useState } from 'react'
import { FiEdit } from "react-icons/fi";
import EditLangComp from './EditLangComp';
function LanguageComp() {
    const [isLangEditOpen,setIsLangEditOpen] = useState("")
    const personalInfo = {
            languages:['English','HIndi']
    }
  return (
    <>
            <div className="flex justify-between">
              <h3 className="text-md font-medium">Preferred Language</h3>
              <button className="text-gray-500"
              onClick = {()=>setIsLangEditOpen(true)}
              >

                <FiEdit />
              </button>
            </div>
            <p className="mt-2">English, Hindi</p>
            {isLangEditOpen && (
                <EditLangComp 
                selectedLanguages={personalInfo.languages} 
                setIsLangOpen={setIsLangEditOpen} 
            />
            )}
    </>
  )
}

export default LanguageComp
